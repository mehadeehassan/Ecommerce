import React, { useState } from "react";
import { Pencil, Trash2, Plus, UserPlus, Save } from "lucide-react";
import Swal from "sweetalert2";
import UserRow from "../../components/AdminPanelCard/UserRow";
import Modal from "../../components/AdminPanelCard/Model";

const User = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleDelete = (userName) => {
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: `Delete ${userName}?`,
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // });
    Swal.fire({
      title: "Are you sure?",
      text: `Delete ${userName}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        Swal.fire({
          title: "Deleted!",
          text: `Delete ${userName}?`,
          icon: "success",
        });
    });
  };

  const handleAddUser = () => {
    // console.log("Adding user:", formData);
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-6 min-h-screen font-sans">
      {/* add user button section */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsAddModalOpen(true)}
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
              {/* UserRow */}
              <UserRow
                Row={{
                  name: "Mehedi Hasan",
                  email: "Mehedi@example.com",
                  status: "Active",
                }}
                onEdit={() => setIsEditModalOpen(true)}
                onDelete={() => handleDelete("Mehedi Hasan")}
              />
            </tbody>
          </table>
        </div>
      </div>

      {/*  Add User Model */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New User"
        footerBtnText="Save"
        icon={UserPlus}
        onConfirm={handleAddUser}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm  text-gray-600 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm  text-gray-600 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="ex: user@example.com"
              className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm  text-gray-600 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm  text-gray-600 mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm  text-gray-600 mb-1">Status</label>
            <select className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 outline-none ">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      </Modal>

      {/* Edit User Model  */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit User"
        footerBtnText="Update"
        icon={Save}
        onConfirm={() => setIsEditModalOpen(false)}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm  text-gray-600 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Mehedi hasan"
              className="w-full px-3 py-1 rounded-lg border border-gray-200  outline-none text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm  text-gray-600 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              defaultValue="Mehedi@example.com"
              className="w-full px-3 py-1 rounded-lg border border-gray-200  outline-none text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm  text-gray-600 mb-1">Status</label>
            <select className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 outline-none">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default User;
