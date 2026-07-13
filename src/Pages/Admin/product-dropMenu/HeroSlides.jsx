/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { ImagePlus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../../components/AdminPanelCard/Modal";
import Pagination from "../../../components/AdminPanelCard/Pagination";
import SlideRow from "../../../components/AdminPanelCard/SlideRow"; 
import axiosAdmin from "../../Utils/axiosAdmin";

const HeroSlides = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [allCategory, setAllCategory] = useState([]);
  const [allSlides, setAllSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  const setUpdateModalOpen = (value) => {
    setIsUpdateModalOpen(value);
    setErrorMessage({});
    if (!value) resetForm();
  };

  const setModalOpen = (value) => {
    setIsModalOpen(value);
    setErrorMessage({});
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      id: null,
      title: "",
      description: "",
      category_id: "",
      button_text: "Shop Now",
      sort_order: 0,
      status: "active",
      image: null,
    });
  };

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    category_id: "",
    button_text: "Shop Now",
    sort_order: 0,
    status: "active",
    image: null,
  });

  const handleChange = (event) => {
    if (event.target.type === "file") {
      setFormData({ ...formData, image: event.target.files[0] });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
      if (errorMessage[event.target.name]) {
        setErrorMessage({ ...errorMessage, [event.target.name]: "" });
      }
    }
  };

  const handleApiError = (error) => {
    const errorMsg =
      error.response?.data?.errors?.[0]?.message ||
      error.response?.data?.message ||
      `${formData.title ? `"${formData.title}" - ` : ""}Something went wrong!`;
    toast.error(errorMsg);
    if (Array.isArray(error.response?.data?.errors)) {
      const errorObj = {};
      error.response.data.errors.forEach((err) => {
        errorObj[err.field] = err.message;
      });
      setErrorMessage(errorObj);
    }
    if (error.response?.data?.message === "Image is required") {
      setErrorMessage((prev) => ({ ...prev, image: "Image is required" }));
    }
  };

  const handleGetAllSlides = async () => {
    setLoading(true);
    try {
      const response = await axiosAdmin.get(`/getAllHeroSlides?page=${currentPage}&limit=${itemsPerPage}`);
      if (response.status === 200) {
        setAllSlides(response.data.data);
        setTotalItems(response.data.total || response.data.data.length); 
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetAllCategory = async () => {
    try {
      const response = await axiosAdmin.get("/getAllCategory");
      if (response.status === 200) setAllCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddSlide = async () => {
    setErrorMessage({});
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("button_text", formData.button_text);
      data.append("sort_order", formData.sort_order || 0);
      data.append("status", formData.status);
      if (formData.category_id) data.append("category_id", formData.category_id);
      if (formData.image) data.append("image", formData.image);

      const response = await axiosAdmin.post("/addHeroSlide", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        toast.success(`"${formData.title}" has been added successfully!`);
        setModalOpen(false);
        handleGetAllSlides();
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleUpdateSlide = async () => {
    setErrorMessage({});
    try {
      const data = new FormData();
      data.append("id", formData.id);
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("button_text", formData.button_text);
      data.append("sort_order", formData.sort_order || 0);
      data.append("status", formData.status);
      if (formData.category_id) data.append("category_id", formData.category_id);
      if (formData.image) data.append("image", formData.image);

      const response = await axiosAdmin.put("/updateHeroSlide", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        toast.success(`"${formData.title}" has been updated successfully!`);
        handleGetAllSlides();
        setUpdateModalOpen(false);
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleDeleteSlide = async (slideId, slideTitle) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `"${slideTitle}" will be permanently deleted.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;
    try {
      const response = await axiosAdmin.delete(`/deleteHeroSlide/${slideId}`);
      if (response.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: `"${slideTitle}" successfully deleted.`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        handleGetAllSlides();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAllSlides();
    handleGetAllCategory()
  }, [currentPage]);

  return (
    <div className="p-6 min-h-screen font-sans">
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
      
      {/* Add Slide Button */}
      <div className="flex justify-end mb-4">
        <button
          className="flex items-center gap-0.5 bg-orange-400 hover:bg-orange-500 text-white px-2 py-1.5 rounded-lg shadow-sm transition-all font-medium text-[13px]"
          onClick={() => setModalOpen(true)}
        >
          <Plus size={16} />
          Add Slide
        </button>
      </div>

      {/* Table */}
      <div className="bg-gray-100/40 rounded-t-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-3">
          <h3 className="font-bold text-[15px] text-gray-800">Hero Slides</h3>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="w-full table-fixed text-left">
            <thead>
              <tr className="bg-gray-200/90">
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1 border-r border-gray-200">
                  Order
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 text-center">
                  Image
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200">
                  Title
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200">
                  Description
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200">
                  Links To
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200">
                  Button Text
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 text-center">
                  Status
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 text-end">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="text-center py-6 text-gray-400 text-sm">
                    Loading...
                  </td>
                </tr>
              ) : allSlides.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-6 text-gray-400 text-sm">
                    No hero slides found
                  </td>
                </tr>
              ) : (
                allSlides.map((slide) => (
                  <SlideRow
                    key={slide.id}
                    row={slide}
                    onEdit={() => {
                      setFormData({
                        id: slide.id,
                        title: slide.title,
                        description: slide.description || "",
                        category_id: slide.category_id || "",
                        button_text: slide.button_text,
                        sort_order: slide.sort_order,
                        status: slide.status,
                        image: null,
                      });
                      setUpdateModalOpen(true);
                    }}
                    onDelete={() => handleDeleteSlide(slide.id, slide.title)}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- Add Slide Modal  --- */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Add Hero Slide"
        saveBtnText="Save"
        icon={ImagePlus}
        onSubmit={handleAddSlide}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              type="text"
              onChange={handleChange}
              value={formData.title ?? ""}
              placeholder="e.g. Upto 50% off on all Men's wear"
              className="w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400"
            />
            {errorMessage.title && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.title}</p>
            )}
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formData.description ?? ""}
              placeholder="Short subtitle text"
              rows={2}
              className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none outline-none focus:ring-1 focus:ring-orange-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Links To Category</label>
              <select
                name="category_id"
                onChange={handleChange}
                value={formData.category_id ?? ""}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 outline-none focus:ring-1 focus:ring-orange-400"
              >
                <option value=""> All Sale </option>
                {allCategory.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.category_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Button Text <span className="text-red-500">*</span>
              </label>
              <input
                name="button_text"
                type="text"
                onChange={handleChange}
                value={formData.button_text ?? ""}
                placeholder="Shop Now"
                className="w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Order</label>
              <input
                name="sort_order"
                type="number"
                onChange={handleChange}
                value={formData.sort_order ?? 0}
                className="w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Status</label>
              <select
                name="status"
                onChange={handleChange}
                value={formData.status ?? "active"}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 outline-none focus:ring-1 focus:ring-orange-400"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Image <span className="text-red-500">*</span>
            </label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
            />
            {errorMessage.image && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.image}</p>
            )}
          </div>
        </div>
      </Modal>

      {/* --- Update Slide Modal  --- */}
      <Modal
        isOpen={isUpdateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        title="Update Hero Slide"
        saveBtnText="Update"
        icon={ImagePlus}
        onSubmit={handleUpdateSlide}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              type="text"
              onChange={handleChange}
              value={formData.title ?? ""}
              className="w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400"
            />
            {errorMessage.title && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.title}</p>
            )}
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formData.description ?? ""}
              rows={2}
              className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none outline-none focus:ring-1 focus:ring-orange-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Links To Category</label>
              <select
                name="category_id"
                onChange={handleChange}
                value={formData.category_id ?? ""}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 outline-none focus:ring-1 focus:ring-orange-400"
              >
                <option value=""> All Sale </option>
                {allCategory.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.category_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Button Text <span className="text-red-500">*</span>
              </label>
              <input
                name="button_text"
                type="text"
                onChange={handleChange}
                value={formData.button_text ?? ""}
                className="w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Order</label>
              <input
                name="sort_order"
                type="number"
                onChange={handleChange}
                value={formData.sort_order ?? 0}
                className="w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Status</label>
              <select
                name="status"
                onChange={handleChange}
                value={formData.status ?? "active"}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 outline-none focus:ring-1 focus:ring-orange-400"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Image</label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
            />
          </div>
        </div>
      </Modal>

      {/* Pagination Section */}
      <div className="mt-4">
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

export default HeroSlides;