import React from "react";

export default function Contacts() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-8 ">
            <div className="max-w-2xl text-center space-y-6 mt-70">
                <h1 className="text-4xl font-bold text-orange-400">Contact Us</h1>
                <p className="text-gray-600 text-sm">
                    If you have any questions or want to discuss any project, you can email me directly. I'll get back to you as soon as possible.
                </p>
                
                <div className="p-2 rounded-xl border border-gray-500 shadow-md">
                    <p className="text-sm text-gray-700 uppercase tracking-widest mb-2 hover:text-orange-400">Email</p>
                    <a 
                        href="mailto:mehedi19999@gmail.com" 
                        className="text-xl md:text-md font-extrabold text-orange-400 hover:text-orange-600 hover:underline transition"
                    >
                    mehedi19999@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}