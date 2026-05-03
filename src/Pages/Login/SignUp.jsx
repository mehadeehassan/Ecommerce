import React from "react";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-orange-200 flex items-center justify-center p-4">
      <div className="w-full max-w-100 bg-gray-200 rounded-xl border border-gray-500 shadow-sm p-15">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-400 mb-2">Get Started for Free</h1>
          <p className="text-gray-400 text-xs ">Register now and enjoy free shipping on your first purchase.</p>
        </div>
        {/* form section  */}
        <div className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Password"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Cofiram password"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-orange-400 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-1 rounded-lg transition-colors shadow-sm mt-2"
            >
              Sign In
            </button>
          </div>
        </div>
        {/* Sign Up Section  */}
        <div className="text-center mt-6 text-gray-400 text-xs">
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
