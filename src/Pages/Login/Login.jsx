import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-orange-200 flex items-center justify-center">
      <div className="w-full max-w-100 bg-gray-200 rounded-xl border border-gray-500 shadow-sm p-15">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold  mb-2 text-orange-400">Welcome Back!</h1>
          <p className="text-gray-400 text-xs ">Please enter your details to access your dashboard.</p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Password"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Remember & Forgot  */}
          <div className="flex items-center justify-between text-gray-500">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-3 w-3"
              />
              <span className="text-gray-400 text-xs">Remember me</span>
            </label>
            <a href="#" className="text-orange-400 hover:underline font-medium text-xs">
              Forgot password?
            </a>
          </div>

          {/* log In Button */}
          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-1 rounded-lg transition-colors shadow-sm mt-3"
          >
            Log In
          </button>
          <p className="text-center text-gray-400 text-xs">or login with </p>
          
        {/* Facebook Button And Google Button */}
          <div className="flex items-center justify-center gap-10">
            <button className=" hover:bg-orange-400 text-black py-1 px-4 text-xs rounded-lg border border-gray-300 flex items-center gap-1 cursor-pointer">
              <FaFacebook className="text-blue-600 text-lg" />
              <span>Facebook</span>
            </button>
            <button className=" hover:bg-orange-400 text-black py-1 px-4 text-xs rounded-lg border border-gray-300 flex items-center gap-1 cursor-pointer">
              <FcGoogle  className="text-lg"/>
              <span>Google</span>
            </button>
          </div>
        </div>

        {/* Sign In Section  */}
        <div className="text-center mt-2 text-gray-400 text-xs">
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
