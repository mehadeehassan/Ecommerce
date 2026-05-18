import { ChevronLeft, ChevronRight, Plus, UserPlus } from "lucide-react";
import { useState } from "react";
import Modal from "../../components/AdminPanelCard/Modal";
import UserRow from "../../components/AdminPanelCard/UserRow";

const User = () => {
  // Modal State and Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setModalOpen = (value) => {
    setIsModalOpen(value);
  };
  // form data state for add user form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    status: "",
  });
  // handle change function for add user form
  const handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  // handle add user function for add user form save button
  const handleAddUser = () => {
    // formData;
    //  console.log(formData);
    setFormData({});
    setModalOpen(false);
    console.log(formData);
  };

  return (
    <div className="p-6 min-h-screen font-sans">
      {/* add user button section */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-1.5 rounded-lg shadow-sm transition-all font-medium text-[13px]"
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
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-200/90">
                <th className="px-5 py-2 text-[10px] text-gray-600 font-medium uppercase">
                  Full Name
                </th>
                <th className="px-5 py-2 text-[10px] text-gray-600 font-medium uppercase">
                  Email
                </th>
                <th className="px-5 py-2 text-[10px] text-gray-600 font-medium uppercase">
                  Status
                </th>
                <th className="px-5 py-2 text-[10px] text-gray-600 font-medium uppercase text-end">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* User Table Row */}
              <UserRow
                Row={{
                  name: "Mehedi Hasan",
                  email: "mehedi@gmail.com",
                  status: "Active",
                }}
              />
              <UserRow
                Row={{
                  name: "Ferdousi Begum Tuli",
                  email: "ferdousi@gmail.com",
                  status: "Inactive",
                }}
              />
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
              className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 placeholder:text-gray-300"
            />
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
              className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-xs  text-gray-600 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-xs  text-gray-600 mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              name="confirmPassword"
              onChange={handleChange}
              type="password"
              placeholder="Confirm your password"
              className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-xs  text-gray-600 mb-1">Status</label>
            <select
              className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 outline-none "
              onChange={handleChange}
              value={formData.status ?? ""}
              name="status"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      </Modal>

      {/* pagination section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-xs text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">50</span> results
          </p>
        </div>
        <div className="flex items-center justify-end gap-2 mt-4">
          <button className="flex items-center px-1 py-1 text-xs hover:rounded-lg text-gray-500 hover:bg-gray-300 transition-colors">
            <ChevronLeft size={20} />
            Back
          </button>
          <button className="px-1 py-1 rounded-lg text-xs text-gray-500 hover:bg-gray-300 transition-colors active:bg-orange-400">
            1
          </button>
          <button className="px-1 py-1 rounded-lg text-xs text-gray-500 hover:bg-gray-300 transition-colors active:bg-orange-400">
            2
          </button>
          <button className="px-1 py-1 rounded-lg text-xs text-gray-500 hover:bg-gray-300 transition-colors active:bg-orange-400">
            3
          </button>
          <button className="px-1 py-1 rounded-lg text-xs text-gray-500 hover:bg-gray-300 transition-colors active:bg-orange-400">
            ...
          </button>
          <button className="px-1 py-1 rounded-lg text-xs text-gray-500 hover:bg-gray-300 transition-colors active:bg-orange-400">
            10
          </button>
          <button className="flex items-center px-1 py-1 text-xs hover:rounded-lg text-gray-500 hover:bg-gray-300 transition-colors">
            Next
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default User;
