import React from "react";

export default function SignInPage() {
    return (
        <div className="min-h-screen bg-orange-200 flex items-center justify-center p-4">
            <div className="w-full max-w-110 bg-white rounded-xl border border-gray-100 shadow-sm p-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold  mb-2">
                        Sign In
                    </h1>
                    <p className="text-gray-400 ">Enter your credentials to continue</p>
                </div>
                {/* form section  */}
                <div className="space-y-5">
                    <div>
                        <input type="text"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-400"
                        />
                    </div>

                    <div>
                        <input type="text"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-400"
                        />
                    </div>
                    {/* Remember & Forget Password */}
                    <div className="flex items-center justify-between text-gray-500">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" 
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-gray-400">Remember me</span>
                        </label>
                        <a href="#"  className="text-blue-500 hover:underline font-medium" > Forget Password</a>
                    </div>
                    {/* Sign In Section  */}

                    <div>
                        <button 
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm mt-2">
                            Sign In
                        </button>
                    </div>
                </div>
                {/* Sign Up Section  */}
                    <div className="text-center mt-8 text-gray-400 text-sm">
                        <p>Don't have an account? <a href="#" className="text-blue-500 hover:underline font-medium">Sign Up</a></p>
                    </div>
            </div>
        </div>
    )
}