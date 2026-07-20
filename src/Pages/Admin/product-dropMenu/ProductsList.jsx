import { PackageCheck, PackagePlus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../../components/AdminPanelCard/Modal";
import Pagination from "../../../components/AdminPanelCard/Pagination";
import ProductRow from "../../../components/AdminPanelCard/ProductRow";
import axiosAdmin from "../../../Utils/axiosAdmin";
const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // প্রোডাক্ট অ্যাড করার মডাল ওপেন/ক্লোজ স্টেট
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // প্রোডাক্ট আপডেট করার মডাল ওপেন/ক্লোজ স্টেট
  const [errorMessage, setErrorMessage] = useState({}); // ব্যাকএন্ড থেকে আসা ভ্যালিডেশন এরর রাখার স্টেট
  const [allCategory, setAllCategory] = useState([]); // ড্রপডাউনের জন্য সব ক্যাটাগরি রাখার স্টেট
  const [allBrand, setAllBrand] = useState([]); // ড্রপডাউনের জন্য সব ব্র্যান্ড রাখার স্টেট
  const [allProduct, setAllProduct] = useState([]); // টেবিলে দেখানোর জন্য প্রোডাক্ট লিস্টের স্টেট
  const [loading, setLoading] = useState(false); // ডাটা লোড হওয়ার সময় স্পিনার বা লোডিং টেক্সট দেখানোর স্টেট
  const [currentPage, setCurrentPage] = useState(1); // বর্তমান পেজ নাম্বার ট্র্যাকিং স্টেট
  const [totalItems, setTotalItems] = useState(0); // ডাটাবেজে মোট কয়টি প্রোডাক্ট আছে তা রাখার স্টেট (পেজিনেশনের জন্য)
  const itemsPerPage = 10; // প্রতি পেজে কয়টি করে প্রোডাক্ট দেখাবে তার লিমিট

  // প্রোডাক্ট আপডেট মডাল ওপেন বা ক্লোজ করার ফাংশন
  const setUpdateModalOpen = (value) => {
    setIsUpdateModalOpen(value);
    setErrorMessage({}); // মডাল অ্যাকশনের সাথে এরর মেসেজ ক্লিয়ার করা
    if (!value) {
      // মডাল ক্লোজ (false) হলে ফর্মের সব ডাটা খালি (Reset) করে দেওয়া
      setFormData({
        id: null,
        product_code: "",
        product_price: "",
        product_name: "",
        category_id: "",
        brand_id: "",
        status: "",
        description: "",
        image: null,
        discount_percentage: "",
        is_on_sale: false,
        is_new_arrival: false,
        is_best_selling: false,
      });
    }
  };

  // নতুন প্রোডাক্ট অ্যাড করার মডাল ওপেন বা ক্লোজ করার ফাংশন
  const setModalOpen = (value) => {
    setIsModalOpen(value);
    setErrorMessage({}); // এরর মেসেজ ক্লিয়ার করা
    // ফর্ম ডাটা রিসেট করা
    setFormData({
      id: null,
      product_code: "",
      product_price: "",
      product_name: "",
      category_id: "",
      brand_id: "",
      status: "",
      description: "",
      image: null,
      discount_percentage: "",
      is_on_sale: false,
      is_new_arrival: false,
      is_best_selling: false,
    });
  };

  // ইনপুট ফিল্ডগুলোর ভ্যালু ট্র্যাক করার জন্য অবজেক্ট স্টেট
  const [formData, setFormData] = useState({
    id: null,
    product_code: "",
    product_price: "",
    product_name: "",
    category_id: "",
    brand_id: "",
    status: "",
    description: "",
    image: null,
    discount_percentage: "",
    is_on_sale: false,
    is_new_arrival: false,
    is_best_selling: false,
  });

  // ইনপুট ফিল্ডের পরিবর্তন হ্যান্ডেল করার ফাংশন
  const handleChange = (event) => {
    if (event.target.type === "file") {
      // ফাইল/ইমেজ ইনপুট হলে ফাইলের অবজেক্টটি সেভ করবে
      setFormData({
        ...formData,
        image: event.target.files[0],
      });
    } else if (event.target.type === "checkbox") {
      // চেকবক্স ইনপুট হলে চেকড স্টেট অনুযায়ী সেভ করবে
      setFormData({
        ...formData,
        [event.target.name]: event.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });

      // ইউজার যখন ইনপুট দেওয়া শুরু করবে, তখন ওই নির্দিষ্ট ফিল্ডের আগের এরর মেসেজটি মুছে যাবে
      if (errorMessage[event.target.name]) {
        setErrorMessage({
          ...errorMessage,
          [event.target.name]: "",
        });
      }
    }
  };

  // ব্যাকএন্ড ভ্যালিডেশন এররগুলোকে প্রসেস করে এরর স্টেটে বসানো
  const handleApiError = (error) => {
    console.log("errors:", error.response?.data?.errors);

    const errorMsg =
      error.response?.data?.errors?.[0]?.message ||
      error.response?.data?.message ||
      `${formData.product_name ? `"${formData.product_name}" - ` : ""}Something went wrong!`;
    toast.error(errorMsg);
    if (
      error.response &&
      error.response.data &&
      Array.isArray(error.response.data.errors)
    ) {
      const errorObj = {};
      // ব্যাকএন্ড থেকে আসা এরর অ্যারে লুপ করে অবজেক্টে রূপান্তর করে
      error.response.data.errors.forEach((err) => {
        errorObj[err.field] = err.message;
      });
      setErrorMessage(errorObj); // স্টেটে এরর অবজেক্ট সেট করা
    }
    // আলাদাভাবে ইমেজ রিকোয়ার্ড এরর হ্যান্ডেল করা
    if (error.response?.data?.message === "Image is required") {
      setErrorMessage((prev) => ({ ...prev, image: "Image is required" }));
    }
  };

  // ডাটাবেজ থেকে পেজ অনুযায়ী প্রোডাক্ট লিস্ট নিয়ে আসা
  const handleGetAllProduct = async () => {
    setLoading(true); // লোডিং শুরু
    try {
      const response = await axiosAdmin.get(
        `/getAllProduct?page=${currentPage}&limit=${itemsPerPage}`,
      );
      if (response.status === 200) {
        setAllProduct(response.data.data); // প্রোডাক্ট লিস্ট স্টেটে রাখা
        setTotalItems(response.data.total); // মোট প্রোডাক্ট সংখ্যা সেভ করা (পেজিনেশনের হিসাবের জন্য)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // লোডিং শেষ
    }
  };

  const handleGetAllCategory = async () => {
    try {
      const response = await axiosAdmin.get("/getAllCategory?limit=1000");
      if (response.status === 200) setAllCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetAllBrand = async () => {
    try {
      const response = await axiosAdmin.get("/getAllBrand?limit=1000");
      if (response.status === 200) setAllBrand(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // নতুন প্রোডাক্ট তৈরি করার ফাংশন
  const handleAddProduct = async () => {
    setErrorMessage({}); // পুরাতন এরর ক্লিয়ার করা
    try {
      // যেহেতু ইমেজ/ফাইল আপলোড হবে, তাই FormData অবজেক্ট ব্যবহার করা হয়েছে
      const data = new FormData();
      data.append("product_code", formData.product_code);
      data.append("product_price", formData.product_price);
      data.append("product_name", formData.product_name);
      data.append("category_id", formData.category_id);
      data.append("brand_id", formData.brand_id);
      data.append("status", formData.status);
      data.append("description", formData.description);
      data.append("discount_percentage", formData.discount_percentage || 0);
      data.append("is_on_sale", formData.is_on_sale ? 1 : 0);
      data.append("is_new_arrival", formData.is_new_arrival ? 1 : 0);
      data.append("is_best_selling", formData.is_best_selling ? 1 : 0);
      if (formData.image) data.append("image", formData.image);

      const response = await axiosAdmin.post("/addProduct", data, {
        headers: { "Content-Type": "multipart/form-data" }, // ফাইল পাঠানোর জন্য হেডার
      });
      if (response.status === 200) {
        toast.success(
          `"${formData.product_name}" has been added successfully!`,
        ); // সফলতার মেসেজ দেখানো
        setModalOpen(false); // মডাল বন্ধ করা ও ফর্ম রিসেট করা
        handleGetAllProduct(); // নতুন প্রোডাক্টসহ টেবিল আপডেট করা
      }
    } catch (error) {
      handleApiError(error); // এরর হলে তা হ্যান্ডেল করা
    }
  };

  const handleUpdateProduct = async () => {
    setErrorMessage({});
    try {
      const data = new FormData();
      data.append("id", formData.id);
      data.append("product_code", formData.product_code);
      data.append("product_price", formData.product_price);
      data.append("product_name", formData.product_name);
      data.append("category_id", formData.category_id);
      data.append("brand_id", formData.brand_id);
      data.append("status", formData.status);
      data.append("description", formData.description);
      data.append("discount_percentage", formData.discount_percentage || 0);
      data.append("is_on_sale", formData.is_on_sale ? 1 : 0);
      data.append("is_new_arrival", formData.is_new_arrival ? 1 : 0);
      data.append("is_best_selling", formData.is_best_selling ? 1 : 0);
      if (formData.image) data.append("image", formData.image);

      const response = await axiosAdmin.put("/updateProduct", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        toast.success(
          `"${formData.product_name}" has been updated successfully!`,
        );
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
      text: `"${productName}" successfully deleted.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;
    try {
      const response = await axiosAdmin.delete(`/deleteProduct/${productId}`);
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
  // কম্পোনেন্ট প্রথমবার লোড হলে এবং যখনই 'currentPage' পরিবর্তিত হবে, তখনই এই API কলগুলো রান করবে
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleGetAllProduct();
    handleGetAllCategory();
    handleGetAllBrand();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]); // Dependency array-তে currentPage থাকায় পেজ চেঞ্জ হলেই ডাটা রিফেচ হবে

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
        {/* <div className="overflow-x-auto mt-6"> */}
        <div
          className="overflow-x-auto mt-6"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <table className="w-full min-w-275 md:min-w-0 table-fixed text-left">
            <thead>
              <tr className="bg-gray-200/90">
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1 border-r border-gray-200 ">
                  ID
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 text-center">
                  Image
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/4 border-r border-gray-200 ">
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
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 text-left">
                  Price
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/5 border-r border-gray-200 ">
                  Discount
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 ">
                  On Sale
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 ">
                  Arrivals
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 text-left">
                  Selling
                </th>
                <th className="px-5 py-2 text-xs text-gray-600 font-medium uppercase w-1/6 border-r border-gray-200 ">
                  Description
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
                  <td
                    colSpan={10}
                    className="text-center py-6 text-gray-400 text-sm"
                  >
                    Loading...
                  </td>
                </tr>
              ) : allProduct.length === 0 ? (
                <tr>
                  <td
                    colSpan={10}
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
                        product_price: product.product_price,
                        product_name: product.product_name,
                        category_id: product.category_id,
                        brand_id: product.brand_id,
                        status: product.status,
                        description: product.description,
                        discount_percentage: product.discount_percentage || "",
                        is_on_sale: product.is_on_sale ? true : false,
                        is_new_arrival: product.is_new_arrival ? true : false,
                        is_best_selling: product.is_best_selling ? true : false,
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
          {/* Code — half column and price — half column */}
          <div className="grid grid-cols-2 gap-4">
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
                className={`w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400 ${
                  errorMessage.product_code ? "border-red-500" : ""
                }`}
              />
              {errorMessage.product_code && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.product_code}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                name="product_price"
                type="text"
                inputMode="numeric"
                onChange={handleChange}
                value={formData.product_price ?? ""}
                placeholder="Enter product price"
                className={`w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400 ${
                  errorMessage.product_price ? "border-red-500" : ""
                }`}
              />
              {errorMessage.product_price && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.product_price}
                </p>
              )}
            </div>
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
                className={`w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400 ${
                  errorMessage.product_name ? "border-red-500" : ""
                }`}
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
                className={`w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 outline-none focus:ring-1 focus:ring-orange-400 ${
                  errorMessage.category_id ? "border-red-500" : ""
                }`}
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
                className={`w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 outline-none focus:ring-1 focus:ring-orange-400 ${
                  errorMessage.brand_id ? "border-red-500" : ""
                }`}
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
                className={`w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 outline-none focus:ring-1 focus:ring-orange-400 ${errorMessage.status ? "border-red-500" : ""}`}
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
              className={`w-full p-2 border border-gray-300 rounded-md text-sm resize-none outline-none focus:ring-1 focus:ring-orange-400 ${
                errorMessage.description ? "border-red-500" : ""
              }`}
            />
            {errorMessage.description && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.description}
              </p>
            )}
          </div>

          {/* Discount % + Sale toggle — 2 column */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Discount (%)
              </label>
              <input
                name="discount_percentage"
                type="text"
                inputMode="numeric"
                onChange={handleChange}
                value={formData.discount_percentage ?? ""}
                placeholder="e.g. 20"
                className="w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400"
              />
              {errorMessage.discount_percentage && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.discount_percentage}
                </p>
              )}
            </div>

            <div className="flex items-center pt-5">
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  name="is_on_sale"
                  type="checkbox"
                  checked={formData.is_on_sale ?? false}
                  onChange={handleChange}
                  className="w-4 h-4 accent-orange-400 outline-none"
                />
                Mark as On Sale
              </label>
            </div>

            <div className="flex items-center pt-2">
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  name="is_new_arrival"
                  type="checkbox"
                  checked={formData.is_new_arrival ?? false}
                  onChange={handleChange}
                  className="w-4 h-4 accent-orange-400 outline-none"
                />
                Mark as New Arrival
              </label>
            </div>
            <div className="flex items-center pt-2">
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  name="is_best_selling"
                  type="checkbox"
                  checked={formData.is_best_selling ?? false}
                  onChange={handleChange}
                  className="w-4 h-4 accent-orange-400 outline-none"
                />
                Mark as Best Selling
              </label>
            </div>
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
              className={`w-full p-2 border border-gray-300 rounded-md text-sm file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 ${
                errorMessage.image ? "border-red-500" : ""
              }`}
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
          <div className="grid grid-cols-2 gap-4">
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
                className={`w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400 ${
                  errorMessage.product_code ? "border-red-500" : ""
                }`}
              />
              {errorMessage.product_code && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.product_code}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                name="product_price"
                type="text"
                inputMode="numeric"
                onChange={handleChange}
                value={formData.product_price ?? ""}
                placeholder="Enter product price"
                className={`w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400 ${
                  errorMessage.product_price ? "border-red-500" : ""
                }`}
              />
              {errorMessage.product_price && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.product_price}
                </p>
              )}
            </div>
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
                className={`w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400 ${
                  errorMessage.product_name ? "border-red-500" : ""
                }`}
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
                className={`w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 outline-none focus:ring-1 focus:ring-orange-400 ${
                  errorMessage.category_id ? "border-red-500" : ""
                }`}
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
                className={`w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 outline-none focus:ring-1 focus:ring-orange-400 ${
                  errorMessage.brand_id ? "border-red-500" : ""
                }`}
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
                className={`w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 outline-none focus:ring-1 focus:ring-orange-400 ${
                  errorMessage.status ? "border-red-500" : ""
                }`}
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
              className={`w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 outline-none focus:ring-1 focus:ring-orange-400 ${
                errorMessage.description ? "border-red-500" : ""
              }`}
            />
            {errorMessage.description && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.description}
              </p>
            )}
          </div>

          {/* Discount % + Sale toggle — 2 column */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Discount (%)
              </label>
              <input
                name="discount_percentage"
                type="text"
                inputMode="numeric"
                onChange={handleChange}
                value={formData.discount_percentage ?? ""}
                placeholder="e.g. 20"
                className="w-full p-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-orange-400"
              />
              {errorMessage.discount_percentage && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.discount_percentage}
                </p>
              )}
            </div>

            <div className="flex items-center pt-5">
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  name="is_on_sale"
                  type="checkbox"
                  checked={formData.is_on_sale ?? false}
                  onChange={handleChange}
                  className="w-4 h-4 accent-orange-400 outline-none "
                />
                Mark as On Sale
              </label>
            </div>

            <div className="flex items-center pt-2">
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  name="is_new_arrival"
                  type="checkbox"
                  checked={formData.is_new_arrival ?? false}
                  onChange={handleChange}
                  className="w-4 h-4 accent-orange-400 outline-none"
                />
                Mark as New Arrival
              </label>
            </div>
            <div className="flex items-center pt-2">
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  name="is_best_selling"
                  type="checkbox"
                  checked={formData.is_best_selling ?? false}
                  onChange={handleChange}
                  className="w-4 h-4 accent-orange-400 outline-none"
                />
                Mark as Best Selling
              </label>
            </div>
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
              className={`w-full p-2 border border-gray-300 rounded-md text-sm file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 ${
                errorMessage.image ? "border-red-500" : ""
              }`}
            />
            {errorMessage.image && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.image}</p>
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

export default Products;
