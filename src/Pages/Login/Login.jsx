import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import axiosPublic from "../../Utils/axiosPublic";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage[e.target.name]) {
      setErrorMessage({ ...errorMessage, [e.target.name]: "" });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage({});
    setLoading(true);
    try {
      const response = await axiosPublic.post("/login", formData);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success("Logged in successfully!");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (Array.isArray(errors)) {
        const errObj = {};
        errors.forEach((err) => (errObj[err.field] = err.message));
        setErrorMessage(errObj);
      }
      toast.error(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <Toaster position="top-right" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Sora', sans-serif; }
        .font-utility { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="w-full max-w-md bg-white rounded-2xl border border-stone-200 shadow-xl shadow-stone-200/40 p-8 sm:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="font-utility text-[11px] uppercase tracking-[0.25em] text-orange-500 mb-3">
            Shops
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
            Welcome back
          </h1>
          <p className="text-stone-500 text-sm">
            Enter your details to access your dashboard.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
                strokeWidth={1.75}
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="you@email.com"
                className={`w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition-all placeholder:text-stone-400 ${
                  errorMessage.email ? "border-red-400" : "border-stone-200"
                }`}
              />
            </div>
            {errorMessage.email && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
                strokeWidth={1.75}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                value={formData.password}
                placeholder="••••••••"
                className={`w-full pl-10 pr-10 py-2.5 rounded-lg border text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition-all placeholder:text-stone-400 ${
                  errorMessage.password ? "border-red-400" : "border-stone-200"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errorMessage.password && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.password}
              </p>
            )}
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded accent-orange-500"
              />
              <span className="text-stone-500 text-xs">Remember me</span>
            </label>
            <a
              href="#"
              className="text-orange-500 hover:underline font-medium text-xs"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg transition-colors shadow-sm disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <span className="flex-1 h-px bg-stone-200" />
          <span className="text-stone-400 text-xs">or continue with</span>
          <span className="flex-1 h-px bg-stone-200" />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex-1 hover:bg-stone-50 text-stone-700 py-2 px-4 text-sm rounded-lg border border-stone-200 flex items-center justify-center gap-2 transition-colors"
          >
            <FaFacebook className="text-blue-600 text-base" />
            Facebook
          </button>
          <button
            type="button"
            className="flex-1 hover:bg-stone-50 text-stone-700 py-2 px-4 text-sm rounded-lg border border-stone-200 flex items-center justify-center gap-2 transition-colors"
          >
            <FcGoogle className="text-base" />
            Google
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-stone-500 text-sm">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-orange-500 hover:underline font-medium"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
