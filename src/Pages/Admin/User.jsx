import { Plus, UserPlus } from "lucide-react";
import { useState } from "react";
import Modal from "../../components/AdminPanelCard/Modal";
import UserRow from "../../components/AdminPanelCard/UserRow";

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setModalOpen = (value) => {
    setIsModalOpen(value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = () => {
   formData
      //  console.log(formData);
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
                  status: "Active",
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
        onSubmit={handleSubmit}
        submitBtnText="Submit"
        icon={UserPlus}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm  text-gray-600 mb-1">
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
            <label className="block text-sm  text-gray-600 mb-1">
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
            <label className="block text-sm  text-gray-600 mb-1">
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
            <label className="block text-sm  text-gray-600 mb-1">
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
            <label className="block text-sm  text-gray-600 mb-1">Status</label>
            <select className="w-full px-3 py-1 rounded-lg border border-gray-200 text-gray-500 outline-none ">
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
