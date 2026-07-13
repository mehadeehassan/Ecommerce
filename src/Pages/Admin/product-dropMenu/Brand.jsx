/* eslint-disable react-hooks/exhaustive-deps */
import { BadgeCheck, BadgePlus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import CategoryRow from "../../../components/AdminPanelCard/CategoryRow";
import Modal from "../../../components/AdminPanelCard/Modal";
import Pagination from "../../../components/AdminPanelCard/Pagination";
import axiosAdmin from "../../Utils/axiosAdmin";

const Brand = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [allBrand, setAllBrand] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  const setUpdateModalOpen = (value) => {
    setIsUpdateModalOpen(value);
    if (!value) setFormData((prev) => ({ ...prev, id: null }));
    setErrorMessage({});
  };
  const setModalOpen = (value) => {
    setIsModalOpen(value);
    setErrorMessage({});
    setFormData({ id: null, brand_name: "" });
  };

  const [formData, setFormData] = useState({
    id: null,
    brand_name: "",
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    handleGetAllBrand();
  }, [currentPage]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    if (errorMessage[event.target.name]) {
      setErrorMessage({
        ...errorMessage,
        [event.target.name]: "",
      });
    }
  };

  const handleApiError = (error) => {
    const errorMsg =
      error.response?.data?.errors?.[0]?.message ||
      error.response?.data?.message ||
      `${formData.brand_name ? `"${formData.brand_name}" - ` : ""}Something went wrong!`;
    toast.error(errorMsg);
    if (
      error.response &&
      error.response.data &&
      Array.isArray(error.response.data.errors)
    ) {
      const errorObj = {};
      error.response.data.errors.forEach((err) => {
        errorObj[err.field] = err.message;
      });
      setErrorMessage(errorObj);
    }
    // console.log("error:", error.response?.data);
  };

  const handleGetAllBrand = async () => {
    setLoading(true);
    try {
      const response = await axiosAdmin.get(`/getAllBrand?page=${currentPage}&limit=${itemsPerPage}`);
      // console.log("response:", response.data);
      if (response.status === 200) {
        setAllBrand(response.data.data);
        setTotalItems(response.data.total);
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBrand = async () => {
    setErrorMessage({});
    // console.log("formData:", formData);
    try {
      const response = await axiosAdmin.post("/addBrand", formData);
      console.log("response:", response.data);
      if (response.status === 200) {
        toast.success(
          `"${formData.brand_name}" has been added successfully!`,
          {
            position: "top-right",
            duration: 5000,
          },
        );
        setFormData({
          brand_name: "",
        });
        setModalOpen(false);
        handleGetAllBrand();
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleUpdateBrand = async () => {
    setErrorMessage({});
    try {
      const response = await axiosAdmin.put(
        `/updateBrand/${formData.id}`,
        formData,
      );
      if (response.status === 200) {
        toast.success(
          `"${formData.brand_name}" has been updated successfully!`,
          {
            position: "top-right",
            duration: 5000,
        });
        setUpdateModalOpen(false);
        handleGetAllBrand();
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleDeleteBrand = async (userId, userName) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `"${userName}" will be deleted.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;
    try {
      const response = await axiosAdmin.delete(`/deleteBrand/${userId}`);
      if (response.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: `"${userName}" successfully deleted.`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        handleGetAllBrand();
      }
    } catch (error) {
      console.log("Delete Error:", error);
      Swal.fire({
        title: "Error!",
        text: `"${userName}" Failed to delete user.`,
        icon: "error",
      });
    }
  };
  return (
    <div className="p-6 min-h-screen font-sans">
      {/* toast notification */}
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 5000,
            className: "!bg-green-300/50 !text-green-900 !backdrop-blur-sm",
          },
          error: {
            duration: 5000,
            className: "!bg-red-300/50 !text-red-900 !backdrop-blur-sm",
          },
        }}
      />
      <div className="flex justify-end mb-4">
        <button
          className="flex items-center gap-0.5 bg-orange-400 hover:bg-orange-500 text-white px-1 py-1 rounded-lg shadow-sm transition-all font-medium text-[13px]"
          onClick={() => setModalOpen(true)}
        >
          <Plus size={16} />
          Add Brand
        </button>
      </div>
      {/* Table with Brands */}
      <div className="bg-gray-100/40 rounded-t-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-3">
          <h3 className="font-bold text-[15px] text-gray-800">Brand List</h3>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="w-full table-fixed text-left">
            <thead>
              <tr className="bg-gray-200/90">
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 text-center">
                  ID
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-4/6 text-center border-r border-gray-200">
                  Brand Management
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 text-center ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={3}
                    className="text-center py-6 text-gray-400 text-sm"
                  >
                    Loading...
                  </td>
                </tr>
              ) : allBrand.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="text-center py-6 text-gray-400 text-sm"
                  >
                    No Brands found
                  </td>
                </tr>
              ) : (
                allBrand.map((brand) => (
                  <CategoryRow
                    key={brand.id}
                    row={{ id: brand.serial, name: brand.brand_name }}
                    onEdit={() => {
                      setFormData({
                        id: brand.id,
                        brand_name: brand.brand_name,
                      });
                      setUpdateModalOpen(true);
                    }}
                    onDelete={() =>
                      handleDeleteBrand(brand.id, brand.brand_name)
                    }
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add Brand Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New Brand"
        saveBtnText="Save"
        icon={BadgePlus}
        onSubmit={handleAddBrand}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Brand Name <span className="text-red-500"> * </span>
            </label>
            <input
              name="brand_name"
              onChange={handleChange}
              value={formData.brand_name ?? ""}
              type="text"
              className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${errorMessage.brand_name ? "border-red-500" : ""
                }`}
              placeholder="Enter brand name"
            />
            {errorMessage.brand_name && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.brand_name}
              </p>
            )}
          </div>
        </div>
      </Modal>

      {/* Update Brand Modal */}

      <Modal
        isOpen={isUpdateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        title="Update Brand"
        saveBtnText="Update"
        icon={BadgeCheck}
        onSubmit={handleUpdateBrand}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Brand Name <span className="text-red-500"> * </span>
            </label>
            <input
              name="brand_name"
              onChange={handleChange}
              value={formData.brand_name ?? ""}
              type="text"
              className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${errorMessage.brand_name ? "border-red-500" : ""
                }`}
              placeholder="Enter brand name"
            />
            {errorMessage.brand_name && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.brand_name}
              </p>
            )}
          </div>
        </div>
      </Modal>
      {/* pagination section dynamic page */}
      <div className="mt-2">
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Brand;
