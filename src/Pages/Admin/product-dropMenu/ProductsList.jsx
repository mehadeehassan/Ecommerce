import { PackageCheck, PackagePlus, Plus } from "lucide-react";
import { useState } from "react";
import Modal from "../../../components/AdminPanelCard/Modal";
import Pagination from "../../../components/AdminPanelCard/Pagination";
import ProductRow from "../../../components/AdminPanelCard/ProductRow";
const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const setUpdateModalOpen = (value) => {
    setIsUpdateModalOpen(value);
    if (!value) {
      setFormData({
        id: null,
        code: "",
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
    setFormData({
      id: null,
      code: "",
      product_name: "",
      category_id: "",
      brand_id: "",
      unit_id: "",
      status: "",
      description: "",
      image: null,
    });
  };

  const [formData, setFormData] = useState({
    id: null,
    code: "",
    product_name: "",
    category_id: "",
    brand_id: "",
    status: "",
    description: "",
    image: null,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="p-6 min-h-screen font-sans">
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
              <ProductRow
                key={1}
                Row={{
                  id: 1,
                  image:
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=256&h=256&fit=crop",
                  productName: "HP Laptop",
                  brand: "HP",
                  category: "Electronics",
                  code: "HP-001",
                  description: "HP Laptop 15 inch",
                  status: 1,
                }}
                onEdit={() => {
                  setFormData({
                    id: 1,
                    code: "HP-001",
                    product_name: "HP Laptop",
                    category_id: "",
                    brand_id: "",
                    status: 1,
                    description: "HP Laptop 15 inch",
                    image: null,
                  });
                  setUpdateModalOpen(true);
                }}
                onDelete={() => {}}
              />
              <ProductRow
                key={2}
                Row={{
                  id: 2,
                  image:
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=256&h=256&fit=crop",
                  productName: "Dell Monitor",
                  brand: "Dell",
                  category: "Electronics",
                  code: "DL-002",
                  description: "Dell 24 inch Monitor",
                  status: 0,
                }}
                onEdit={() => {
                  setFormData({
                    id: 1,
                    code: "HP-001",
                    product_name: "HP Laptop",
                    category_id: "",
                    brand_id: "",
                    status: 1,
                    description: "HP Laptop 15 inch",
                    image: null,
                  });
                  setUpdateModalOpen(true);
                }}
                onDelete={() => {}}
              />
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
        // onSubmit={handleAddProduct}
      >
        <div className="space-y-4">
          {/* Code — full width */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Code <span className="text-red-500">*</span>
            </label>
            <input
              name="code"
              type="text"
              onChange={handleChange}
              value={formData.code ?? ""}
              placeholder="Enter product code"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
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
                <option value={1}>Electronics</option>
              </select>
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
                <option value={1}>HP</option>
              </select>
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
        // onSubmit={handleUpdateProduct}
      >
        <div className="space-y-4">
          {/* Code — full width */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Code <span className="text-red-500">*</span>
            </label>
            <input
              name="code"
              type="text"
              onChange={handleChange}
              value={formData.code ?? ""}
              placeholder="Enter product code"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
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
                <option value={1}>Electronics</option>
              </select>
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
                <option value={1}>HP</option>
              </select>
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
          </div>
        </div>
      </Modal>

      {/* pagination section dynamic page */}
      <Pagination
      // totalItems={totalItems}
      // itemsPerPage={itemsPerPage}
      // currentPage={currentPage}
      // onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;
