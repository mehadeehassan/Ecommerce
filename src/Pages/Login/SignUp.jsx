import React from "react";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-orange-200 flex items-center justify-center p-4">
      <div className="w-full max-w-110 bg-white rounded-xl border border-gray-100 shadow-sm p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-400 mb-2">Sign Up</h1>
          <p className="text-gray-400 ">Enter your information to continue</p>
        </div>
        {/* form section  */}
        <div className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Cofiram password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm mt-2"
            >
              Sign In
            </button>
          </div>
        </div>
        {/* Sign Up Section  */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>
            You have already an account?{" "}
            <a
              href="/login"
              className="text-orange-400 hover:underline font-medium"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
