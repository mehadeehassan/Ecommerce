import axios from "axios";
import { PackageCheck, PackagePlus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../../components/AdminPanelCard/Modal";
import Pagination from "../../../components/AdminPanelCard/Pagination";
import ProductRow from "../../../components/AdminPanelCard/ProductRow";
const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [allCategory, setAllCategory] = useState([]);
  const [allBrand, setAllBrand] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  const setUpdateModalOpen = (value) => {
    setIsUpdateModalOpen(value);
    setErrorMessage({});
    if (!value) {
      setFormData({
        id: null,
        product_code: "",
        product_name: "",
        category_id: "",
        brand_id: "",
        status: "",
        description: "",
        image: null,
      });
    }
  };

  const setModalOpen = (value) => {
    setIsModalOpen(value);
    setErrorMessage({});
    setFormData({
      id: null,
      product_code: "",
      product_name: "",
      category_id: "",
      brand_id: "",
      status: "",
      description: "",
      image: null,
    });
  };

  const [formData, setFormData] = useState({
    id: null,
    product_code: "",
    product_name: "",
    category_id: "",
    brand_id: "",
    status: "",
    description: "",
    image: null,
  });

  const handleChange = (event) => {
    if (event.target.type === "file") {
      setFormData({
        ...formData,
        image: event.target.files[0],
      });
    } else {
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
    }
  };

  const handleApiError = (error) => {
    console.log("errors:", error.response?.data?.errors);
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
  };

  const handleGetAllProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/getAllProduct?page=${currentPage}&limit=${itemsPerPage}`,
      );
      if (response.status === 200) {
        setAllProduct(response.data.data);
        setTotalItems(response.data.total);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetAllCategory = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getAllCategory");
      if (response.status === 200) setAllCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetAllBrand = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getAllBrand");
      if (response.status === 200) setAllBrand(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddProduct = async () => {
    setErrorMessage({});
    try {
      const data = new FormData();
      data.append("product_code", formData.product_code);
      data.append("product_name", formData.product_name);
      data.append("category_id", formData.category_id);
      data.append("brand_id", formData.brand_id);
      data.append("status", formData.status);
      data.append("description", formData.description);
      if (formData.image) data.append("image", formData.image);

      const response = await axios.post(
        "http://localhost:3000/addProduct",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        setModalOpen(false);
        handleGetAllProduct();
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleUpdateProduct = async () => {
    setErrorMessage({});
    try {
      const data = new FormData();
      data.append("id", formData.id);
      data.append("product_code", formData.product_code);
      data.append("product_name", formData.product_name);
      data.append("category_id", formData.category_id);
      data.append("brand_id", formData.brand_id);
      data.append("status", formData.status);
      data.append("description", formData.description);
      if (formData.image) data.append("image", formData.image);

      const response = await axios.put(
        "http://localhost:3000/updateProduct",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        handleGetAllProduct();
        setUpdateModalOpen(false);
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleDeleteProduct = async (productId, productName) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `"${productName}" will be deleted.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;
    try {
      const response = await axios.delete(
        `http://localhost:3000/deleteProduct/${productId}`,
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: `"${productName}" successfully deleted.`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        handleGetAllProduct();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleGetAllProduct();
    handleGetAllCategory();
    handleGetAllBrand();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {/* Add Product Button */}
      <div className="flex justify-end mb-4">
        <button
          className="flex items-center gap-0.5 bg-orange-400 hover:bg-orange-500 text-white px-1 py-1 rounded-lg shadow-sm transition-all font-medium text-[13px]"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>
      {/* Table with products */}
      <div className="bg-gray-100/40 rounded-t-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-3">
          <h3 className="font-bold text-[15px] text-gray-800">Products List</h3>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="w-full table-fixed text-left">
            <thead>
              <tr className="bg-gray-200/90">
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1 border-r border-gray-200 ">
                  ID
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 ">
                  Image
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-50 border-r border-gray-200 ">
                  Product Name
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 ">
                  Brand
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 ">
                  Category
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 ">
                  Code
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 ">
                  Description
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 ">
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
                  <td
                    colSpan={9}
                    className="text-center py-6 text-gray-400 text-sm"
                  >
                    Loading...
                  </td>
                </tr>
              ) : allProduct.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="text-center py-6 text-gray-400 text-sm"
                  >
                    No products found
                  </td>
                </tr>
              ) : (
                allProduct.map((product) => (
                  <ProductRow
                    key={product.id}
                    Row={product}
                    onEdit={() => {
                      setFormData({
                        id: product.id,
                        product_code: product.product_code,
                        product_name: product.product_name,
                        category_id: product.category_id,
                        brand_id: product.brand_id,
                        status: product.status,
                        description: product.description,
                        image: null,
                      });
                      setUpdateModalOpen(true);
                    }}
                    onDelete={() =>
                      handleDeleteProduct(product.id, product.product_name)
                    }
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add Product Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Add Product"
        saveBtnText="Save"
        icon={PackagePlus}
        onSubmit={handleAddProduct}
      >
        <div className="space-y-4">
          {/* Code — full width */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Code <span className="text-red-500">*</span>
            </label>
            <input
              name="product_code"
              type="text"
              onChange={handleChange}
              value={formData.product_code ?? ""}
              placeholder="Enter product code"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
            {errorMessage.product_code && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.product_code}
              </p>
            )}
          </div>

          {/* Product Name + Category — 2 column */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                name="product_name"
                type="text"
                onChange={handleChange}
                value={formData.product_name ?? ""}
                placeholder="Enter Product Name"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />
              {errorMessage.product_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.product_name}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category_id"
                onChange={handleChange}
                value={formData.category_id ?? ""}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500"
              >
                <option value="">--select--</option>
                {allCategory.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.category_name}
                  </option>
                ))}
              </select>
              {errorMessage.category_id && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.category_id}
                </p>
              )}
            </div>
          </div>

          {/* Brand + Status — 2 column */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Brand <span className="text-red-500">*</span>
              </label>
              <select
                name="brand_id"
                onChange={handleChange}
                value={formData.brand_id ?? ""}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500"
              >
                <option value="">--select--</option>
                {allBrand.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.brand_name}
                  </option>
                ))}
              </select>
              {errorMessage.brand_id && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.brand_id}
                </p>
              )}
            </div>

            {/* Status — half width */}
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                onChange={handleChange}
                value={formData.status ?? ""}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500"
              >
                <option value="">--select--</option>
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </select>
              {errorMessage.status && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.status}
                </p>
              )}
            </div>
          </div>

          {/* Description — full width */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formData.description ?? ""}
              placeholder="Enter Description"
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none"
            />
            {errorMessage.description && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.description}
              </p>
            )}
          </div>

          {/* Image — full width */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Image <span className="text-red-500">*</span>
            </label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
            {errorMessage.image && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.image}</p>
            )}
          </div>
        </div>
      </Modal>
      {/* Product Update Modal */}
      <Modal
        isOpen={isUpdateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        title="Update Product"
        saveBtnText="Update"
        icon={PackageCheck}
        onSubmit={handleUpdateProduct}
      >
        <div className="space-y-4">
          {/* Code — full width */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Code <span className="text-red-500">*</span>
            </label>
            <input
              name="product_code"
              type="text"
              onChange={handleChange}
              value={formData.product_code ?? ""}
              placeholder="Enter product code"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
            {errorMessage.product_code && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.product_code}
              </p>
            )}
          </div>

          {/* Product Name + Category — 2 column */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                name="product_name"
                type="text"
                onChange={handleChange}
                value={formData.product_name ?? ""}
                placeholder="Enter Product Name"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />
              {errorMessage.product_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.product_name}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category_id"
                onChange={handleChange}
                value={formData.category_id ?? ""}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500"
              >
                <option value="">--select--</option>
                {allCategory.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.category_name}
                  </option>
                ))}
              </select>
              {errorMessage.category_id && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.category_id}
                </p>
              )}
            </div>
          </div>

          {/* Brand + status — 2 column */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Brand <span className="text-red-500">*</span>
              </label>
              <select
                name="brand_id"
                onChange={handleChange}
                value={formData.brand_id ?? ""}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500"
              >
                <option value="">--select--</option>
                {allBrand.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.brand_name}
                  </option>
                ))}
              </select>
              {errorMessage.brand_id && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.brand_id}
                </p>
              )}
            </div>

            {/* Status — half width */}
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                onChange={handleChange}
                value={formData.status ?? ""}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500"
              >
                <option value="">--select--</option>
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </select>
              {errorMessage.status && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.status}
                </p>
              )}
            </div>
          </div>

          {/* Description — full width */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formData.description ?? ""}
              placeholder="Enter Description"
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none"
            />
            {errorMessage.description && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.description}
              </p>
            )}
          </div>

          {/* Image — full width */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Image <span className="text-red-500">*</span>
            </label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
            {errorMessage.image && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.image}</p>
            )}
          </div>
        </div>
      </Modal>

      {/* pagination section dynamic page */}
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;
