import React from "react";
import { Link } from "react-router-dom";
export default function AdminLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 w-full border border-gray-50 max-w-sm">
        <div className="text-center mb-6">
          <h2 className="text-xl font-medium text-gray-800 mt-2 mb-1">
            Forgot password
          </h2>
          <p className="text-xs text-gray-400">
            Enter your email to receive a password reset link
          </p>
        </div>

        <form className="flex flex-col gap-3">
          <div>
            <label className="text-sm text-gray-700 block mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-1 text-sm font-medium transition-all mt-4"
          >
            Email Password Reset Link
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">
          Or, return to{" "}
          <Link
            to="/admin-login"
            className=" hover:text-orange-500 transition-all underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
