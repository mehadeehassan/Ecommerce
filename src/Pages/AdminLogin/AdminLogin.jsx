import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:3000/adminLogin", {
        email,
        password,
      });

      toast.success(res.data.message, {
        position: "top-right",
        duration: 5000,
      });
      // admin token save kore dibo
      Cookies.set("adminToken", res.data.token);
      // 0.3 second delay kore admin panel e navigate kore dibo
      setTimeout(() => {
        navigate("/admin");
      }, 300);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
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
      <div className="p-8 w-full border border-gray-50 max-w-sm">
        <div className="text-center mb-6">
          <h2 className="text-xl font-medium text-gray-800 mt-2 mb-1">
            Log in to ShopAdmin
          </h2>
          <p className="text-xs text-gray-400">
            Enter your email and password below to log in
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <div>
            <label className="text-sm text-gray-700 block mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
              required
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm text-gray-700">Password</label>
              <Link to="/forgot-password" className="text-xs hover:text-orange-500 underline">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="accent-orange-500"
            />
            <label htmlFor="remember" className="text-sm text-gray-500">
              Remember me
            </label>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-1 text-sm font-medium transition-all mt-4"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link to="#" className="hover:text-orange-500 text-md text-gray-800 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
