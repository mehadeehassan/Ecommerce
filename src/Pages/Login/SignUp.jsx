import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axiosPublic from "../Utils/axiosPublic";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage[e.target.name]) {
      setErrorMessage({ ...errorMessage, [e.target.name]: "" });
    }
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage({});
    setLoading(true);
    try {
      const response = await axiosPublic.post("/register", formData);
      if (response.status === 200) {
        toast.success("Account created successfully!");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      }
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (Array.isArray(errors)) {
        const errObj = {};
        errors.forEach((err) => (errObj[err.field] = err.message));
        setErrorMessage(errObj);
      }
      toast.error(error.response?.data?.message || "Registration failed!");
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
            Get started for free
          </h1>
          <p className="text-stone-500 text-sm">
            Register now and enjoy free shipping on your first order.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1.5">
              Your name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
                strokeWidth={1.75}
              />
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Your Name"
                className={`w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition-all placeholder:text-stone-400 ${
                  errorMessage.name ? "border-red-400" : "border-stone-200"
                }`}
              />
            </div>
            {errorMessage.name && (
              <p className="text-red-500 text-xs mt-1">{errorMessage.name}</p>
            )}
          </div>

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

          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1.5">
              Confirm password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
                strokeWidth={1.75}
              />
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                placeholder="••••••••"
                className={`w-full pl-10 pr-10 py-2.5 rounded-lg border text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition-all placeholder:text-stone-400 ${
                  errorMessage.confirmPassword
                    ? "border-red-400"
                    : "border-stone-200"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
                aria-label={showConfirm ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                {showConfirm ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errorMessage.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errorMessage.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg transition-colors shadow-sm mt-2 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="text-center mt-6 text-stone-500 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-orange-500 hover:underline font-medium"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
