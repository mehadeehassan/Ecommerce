import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-orange-200 flex items-center justify-center p-4">
      <div className="w-full max-w-110 bg-gray-100 rounded-xl border border-gray-100 shadow-sm p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold  mb-2 text-orange-400">Log In</h1>
          <p className="text-gray-400 ">Enter your credentials to continue</p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Remember & Forgot  */}
          <div className="flex items-center justify-between text-gray-500">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-orange-400"
              />
              <span className="text-gray-400">Remember me</span>
            </label>
            <a href="#" className="text-orange-400 hover:underline font-medium">
              Forgot password?
            </a>
          </div>

          {/* log In Button */}
          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm mt-2"
          >
            Log In
          </button>
          <p className="text-center text-gray-400">or login with </p>

        {/* Facebook Button And Google Button */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button className="bg-white hover:bg-orange-400 text-black py-2 px-4 rounded-lg border border-gray-300 flex items-center gap-2">
              <FaFacebook className="text-blue-600" />
              <span>Facebook</span>
            </button>
            <button className="bg-white hover:bg-orange-400 text-black py-2 px-4 rounded-lg border border-gray-300 flex items-center gap-2">
              <FcGoogle />
              <span>Google</span>
            </button>

          </div>
        </div>

        {/* Sign In Section  */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-orange-400 hover:underline font-medium"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
