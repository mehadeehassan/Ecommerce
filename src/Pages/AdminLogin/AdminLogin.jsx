import Cookies from "js-cookie";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axiosAdmin from "../Utils/axiosAdmin";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axiosAdmin.post("/adminLogin", {
        email,
        password,
      });

      toast.success(res.data.message || "Logged in successfully!", {
        position: "top-right",
        duration: 5000,
      });

      Cookies.set("adminToken", res.data.token);

      localStorage.setItem(
        "admin",
        JSON.stringify({
          name: res.data.name,
          role: res.data.role,
          permissions: res.data.permissions,
        }),
      );

      setTimeout(() => {
        navigate("/admin");
      }, 500);
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong";
      setError(msg);
      toast.error(msg);
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
        <div className="text-center mb-7">
          <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <p className="font-utility text-[11px] uppercase tracking-[0.25em] text-orange-500 mb-3">
            Admin access
          </p>
          <h2 className="font-display text-xl font-bold text-stone-900 mb-1">
            Log in to <span className="text-orange-500">ShopAdmin</span>
          </h2>
          <p className="text-xs text-stone-400">
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
              <Link
                to="/forgot-password"
                className="text-xs hover:text-orange-500 underline"
              >
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
          <Link
            to="#"
            className="hover:text-orange-500 text-md text-gray-800 underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}