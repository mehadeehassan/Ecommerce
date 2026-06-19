/* eslint-disable react-hooks/set-state-in-effect */
import { Plus, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../components/AdminPanelCard/Modal";
import Pagination from "../../components/AdminPanelCard/Pagination";
import UserRow from "../../components/AdminPanelCard/UserRow";
import axiosAdmin from "../Utils/axiosAdmin";

const User = () => {
  // Add User modal খোলা/বন্ধের জন্য — true হলে modal দেখাবে
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Edit User modal খোলা/বন্ধের জন্য — true হলে modal দেখাবে
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  // form submit করলে backend থেকে আসা error গুলো রাখার জন্য
  const [errorMessage, setErrorMessage] = useState({});
  // API থেকে আনা user list রাখার জন্য — শুরুতে রাখার জন্য
  const [allUser, setAllUser] = useState([]);
  // API call চলার সময় "Loading..." দেখানোর জন্য
  const [loading, setLoading] = useState(false);
  // এখন কোন page এ আছি সেটা রাখার জন্য — শুরুতে page 1
  const [currentPage, setCurrentPage] = useState(1);
  // মোট কতজন user আছে — pagination এর জন্য দরকার
  const [totalItems, setTotalItems] = useState(0);
  // প্রতি page এ সর্বোচ্চ কতটি user দেখাবে
  const itemsPerPage = 10;

  // Edit modal বন্ধ করলে form এর id reset করে এবং error clear করে
  // Edit modal খুললেও error clear করে
  const setUpdateModalOpen = (value) => {
    setIsUpdateModalOpen(value);
    if (!value) setFormData((prev) => ({ ...prev, id: null }));
    setErrorMessage({});
  };

  // Add modal খোলা বা বন্ধ করার সময় error clear করে
  const setModalOpen = (value) => {
    setIsModalOpen(value);
    setErrorMessage({});
    setFormData({
      id: null,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // form এর সব field এর value এক জায়গায় রাখার জন্য
  // id — কোন user কে update করব তার id (add এর সময় null থাকে)
  // status — 1 = Active, 0 = Inactive (default Active)
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    status: 1,
  });

  // যেকোনো input এ কিছু টাইপ করলে সেই field এর value update হবে
  // এবং সেই field এর error message সাথে সাথে সরে যাবে
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

  // backend থেকে আসা error array কে field-wise object এ রূপান্তর করে set করে
  const handleApiError = (error) => {
    const errorMsg =
      error.response?.data?.errors?.[0]?.message ||
      error.response?.data?.message ||
      "Something went wrong!";
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
  };

  // API থেকে আনা user list রাখার জন্য
  // currentPage অনুযায়ী সঠিক page এর data আনে
  const handleGetAllUser = async () => {
    setLoading(true);
    try {
      const response = await axiosAdmin.get(
        `/getAllUserLimit?page=${currentPage}&limit=${itemsPerPage}`,
      );
      if (response.status === 200) {
        setAllUser(response.data.data);
        setTotalItems(response.data.total);
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  
  // নতুন user add করার জন্য API call
  // সফল হলে modal বন্ধ করে, form reset করে, list refresh করে
  // ব্যর্থ হলে backend এর error গুলো form এ দেখায়
  const handleAddUser = async () => {
    setErrorMessage({});
    try {
      const response = await axiosAdmin.post(
        "/signup",
        formData,
      );
      if (response.status === 200) {
        toast.success(response.data.message, {
          position: "top-right",
          duration: 5000,
        });
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          status: 1,
        });
        setIsModalOpen(false);
        handleGetAllUser();
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  // Edit বাটনে click করলে সেই user এর data form এ বসিয়ে Edit modal খুলে দেয়
  // API call হয় না — শুধু form data set করে modal open করে দেয়
  const handleEditUser = (user) => {
    setFormData({
      id: user.id || null,
      name: user.name || "",
      email: user.email || "",
      password: "",
      confirmPassword: "",
      status: user.status === 0 || user.status === "Inactive" ? 0 : 1,
    });
    setUpdateModalOpen(true);
  };

  // existing user update করার জন্য API call
  // formData.id না থাকলে কিছুই করবে না (safety check)
  // সফল হলে modal বন্ধ করে, list refresh করে
  // ব্যর্থ হলে backend এর error গুলো form এ দেখায়
  const handleUpdateUser = async () => {
    if (!formData.id) return;
    setErrorMessage({});
    try {
      const response = await axiosAdmin.put(
        `/updateUser/${formData.id}`,
        formData,
      );
      if (response.status === 200) {
        toast.success(response.data.message, {
          position: "top-right",
          duration: 5000,
        });
        setUpdateModalOpen(false);
        handleGetAllUser();
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  // user delete করার জন্য আগে confirmation popup দেখাও
  // user confirm করলে API call করে , cancel করলে কিছুই করে না
  // সফল হলে success popup দেখায়, list refresh করে
  // ব্যর্থ হলে error popup দেখায়
  const handleDeleteUser = async (userId, userName) => {
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
      const response = await axiosAdmin.delete(
        `/deleteUser/${userId}`,
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: `"${userName}" successfully deleted.`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        handleGetAllUser();
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

  // currentPage বদলালে নতুন page এর data আনে
  // প্রথমবার component load হলেও একবার চলে
  useEffect(() => {
    handleGetAllUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

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
      {/* add user button section */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-0.5 bg-orange-400 hover:bg-orange-500 text-white px-1 py-1 rounded-lg shadow-sm transition-all font-medium text-[13px]"
        >
          <Plus size={16} />
          Add User
        </button>
      </div>

      {/* table container card */}
      <div className="bg-gray-100/40 rounded-t-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-3">
          <h2 className="font-bold text-[15px] text-gray-800">User List</h2>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="w-full table-fixed text-left">
            <thead>
              <tr className="bg-gray-200/90">
                <th className="px-5 py-2 text-[10px] text-gray-600 font-medium uppercase border-r border-gray-200 ">
                  Full Name
                </th>
                <th className="px-5 py-2 text-[10px] text-gray-600 font-medium uppercase border-r border-gray-200">
                  Email
                </th>
                <th className="px-5 py-2 text-[10px] text-gray-600 font-medium uppercase border-r border-gray-200 text-center">
                  Status
                </th>
                <th className="px-5 py-2 text-[10px] text-gray-600 font-medium uppercase text-end">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-6 text-gray-400 text-sm"
                  >
                    Loading...
                  </td>
                </tr>
              ) : allUser.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-6 text-gray-400 text-sm"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                allUser.map((user) => (
                  <UserRow
                    key={user.id}
                    Row={user}
                    onEdit={() => handleEditUser(user)}
                    onDelete={() => handleDeleteUser(user.id, user.name)}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/*  Add User Model */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New User"
        saveBtnText="Save"
        icon={UserPlus}
        onSubmit={handleAddUser}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs  text-gray-600 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              onChange={handleChange}
              value={formData.name ?? ""}
              type="text"
              placeholder="Enter your full name"
              className={`w-full px-3 py-1 rounded-lg border text-gray-500 placeholder:text-gray-300 outline-none ${errorMessage.name ? "border-red-500" : "border-gray-200"}`}
            />
            {errorMessage.name && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.name}</p>
            )}
          </div>
          <div>
            <label className="block text-xs  text-gray-600 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              onChange={handleChange}
              value={formData.email ?? ""}
              type="email"
              placeholder="ex: user@example.com"
              className={`w-full px-3 py-1 rounded-lg border text-gray-500 placeholder:text-gray-300 outline-none ${errorMessage.email ? "border-red-500" : "border-gray-200"}`}
            />
            {errorMessage.email && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.email}</p>
            )}
          </div>
          <div>
            <label className="block text-xs  text-gray-600 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              onChange={handleChange}
              value={formData.password ?? ""}
              type="password"
              placeholder="Enter your password"
              className={`w-full px-3 py-1 rounded-lg border text-gray-500 placeholder:text-gray-300 outline-none ${errorMessage.password ? "border-red-500" : "border-gray-200"}`}
            />
            {errorMessage.password && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.password}
              </p>
            )}
          </div>
          {/* password field এ কিছু লেখা থাকলেই শুধু দেখাবে */}
          {formData.password && (
            <div>
              <label className="block text-xs  text-gray-600 mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword ?? ""}
                type="password"
                placeholder="Confirm your password"
                className={`w-full px-3 py-1 rounded-lg border text-gray-500 placeholder:text-gray-300 outline-none ${errorMessage.confirmPassword ? "border-red-500" : "border-gray-200"}`}
              />
              {errorMessage.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.confirmPassword}
                </p>
              )}
            </div>
          )}
          <div>
            <label className="block text-xs  text-gray-600 mb-1">Status</label>
            <select
              className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 outline-none "
              onChange={handleChange}
              value={formData.status ?? 1}
              name="status"
            >
              <option value={1}>Active</option>
              <option value={0}>Inactive</option>
            </select>
          </div>
        </div>
      </Modal>

      {/* edit user modal */}
      <Modal
        isOpen={isUpdateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        title="Edit User"
        saveBtnText="Update"
        icon={UserPlus}
        onSubmit={handleUpdateUser}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs  text-gray-600 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              onChange={handleChange}
              value={formData.name ?? ""}
              type="text"
              placeholder="Enter your full name"
              className={`w-full px-3 py-1 rounded-lg border text-gray-500 placeholder:text-gray-300 outline-none ${errorMessage.name ? "border-red-500" : "border-gray-200"}`}
            />
            {errorMessage.name && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.name}</p>
            )}
          </div>
          <div>
            <label className="block text-xs  text-gray-600 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              onChange={handleChange}
              value={formData.email ?? ""}
              type="email"
              placeholder="ex: user@example.com"
              className={`w-full px-3 py-1 rounded-lg border text-gray-500 placeholder:text-gray-300 outline-none ${errorMessage.email ? "border-red-500" : "border-gray-200"}`}
            />
            {/* email related error message backend theke asle frontend e dekhanor jonno */}
            {errorMessage.email && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.email}</p>
            )}
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              onChange={handleChange}
              value={formData.password ?? ""}
              type="password"
              placeholder="Enter a new password"
              className={`w-full px-3 py-1 rounded-lg border text-gray-500 placeholder:text-gray-300 outline-none ${errorMessage.password ? "border-red-500" : "border-gray-200"}`}
            />
            {errorMessage.password && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.password}
              </p>
            )}
          </div>

          {/* password field এ কিছু লেখা থাকলেই শুধু দেখাবে */}
          {formData.password && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword ?? ""}
                type="password"
                placeholder="Confirm the new password"
                className={`w-full px-3 py-1 rounded-lg border text-gray-500 placeholder:text-gray-300 outline-none ${errorMessage.confirmPassword ? "border-red-500" : "border-gray-200"}`}
              />
              {errorMessage.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errorMessage.confirmPassword}
                </p>
              )}
            </div>
          )}
          <div>
            <label className="block text-xs  text-gray-600 mb-1">Status</label>
            <select
              className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 outline-none "
              onChange={handleChange}
              value={formData.status ?? 1}
              name="status"
            >
              <option value={1}>Active</option>
              <option value={0}>Inactive</option>
            </select>
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

export default User;
