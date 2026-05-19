import axios from "axios";
import { ChevronLeft, ChevronRight, Plus, UserPlus } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import Modal from "../../components/AdminPanelCard/Modal";
import UserRow from "../../components/AdminPanelCard/UserRow";

const User = () => {
  //modal open and close state 
  const [isModalOpen, setIsModalOpen] = useState(false);
  //modal open and close handle korar jonno function
  const setModalOpen = (value) => {
    setIsModalOpen(value); // modal open and close state set kore dibe
    setErrorMessage({}); //ager error message clear kore nibe jokhon modal open hobe ba close hobe
  };
  //form data state e form er input field er value gula set kore dibe
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    status: 1,
  });
  //backend theke asha validation error gula set kore dibe
  const [errorMessage, setErrorMessage] = useState({});

  // input field er value change handle korar jonno
  const handleChange = (event) => {
    // console.log(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    //name sathe error message clear korar jonno
    if (errorMessage[event.target.name]) {
      setErrorMessage({
        ...errorMessage,
        [event.target.name]: "", // name field er error message clear kore dibe jokhon user name field e input dibe
      });
    }
  };

  //api call add user form submit korar jonno
  const handleAddUser = async () => {
    setErrorMessage({}); //ager error message clear kore nibe
    try {
      //api call kore backend e form data pathabe
      const response = await axios.post(
        "http://localhost:3000/signup",
        formData,
      );
      if (response.status === 200) {
        Swal.fire({
          title: response.data.message,
          text: "You clicked the button!",
          icon: "success",
        });
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          status: 1,
        });
        setIsModalOpen(false); //form submit er por modal close kore dibe
      }
    } catch (error) {
      console.log(error);

      //beakend theke validation frontend e dekhanor Jonno.
      if (error.response && error.response.data && error.response.data.errors) {
        // console.log(error.response.data.errors);
        //error message state e backend theke asha validation error gula set kore dibe
        setErrorMessage(error.response.data.errors);
      }
      //email already exist error message backend theke asle frontend e dekhanor jonno
      else if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // console.log(error.response.data.message);
        if (error.response.data.message.toLowerCase().includes("email")) {
          //email related error message state e set kore dibe
          setErrorMessage({
            email: error.response.data.message,
          });
          //email related error message state e set korar por email field e focus kore dibe
        } else {
          Swal.fire({
            title: "Error!",
            text: error.response.data.message,
            icon: "error",
          });
        }
        // console.log(error.response.data.message);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong! Please try again.",
          icon: "error",
        });
      }
    }
  };
  return (
    <div className="p-6 min-h-screen font-sans">
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
              className={`w-full px-3 py-1 rounded-lg border text-gray-500 placeholder:text-gray-300 outline-none ${errorMessage.name ? "border-red-500" : "border-gray-200"}`}
            />
            //name related error message backend theke asle frontend e dekhanor jonno
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
            //email related error message backend theke asle frontend e dekhanor jonno
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
            //password related error message backend theke asle frontend e dekhanor jonno
            {errorMessage.password && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.password}
              </p>
            )}
          </div>
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
              //confirm password related error message backend theke asle frontend e dekhanor jonno
            {errorMessage.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.confirmPassword}
              </p>
            )}
          </div>
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
