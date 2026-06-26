/* eslint-disable no-unused-vars */
import {
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  Package,
  Phone,
  RotateCcw,
  Send,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";

const SUPPORT_EMAIL = "mehedi19999@gmail.com";

const REASONS = [
  { id: "order", label: "Order status", icon: Package },
  { id: "returns", label: "Returns & exchanges", icon: RotateCcw },
  { id: "product", label: "Product question", icon: ShoppingBag },
  { id: "other", label: "Something else", icon: HelpCircle },
];

export default function Contacts() {
  const [reason, setReason] = useState("order");
  const [form, setForm] = useState({
    name: "",
    email: "",
    order: "",
    message: "",
  });

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const reasonLabel =
      REASONS.find((r) => r.id === reason)?.label || "General";
    const subject = encodeURIComponent(
      `[${reasonLabel}] Message from ${form.name || "a customer"}`,
    );
    const bodyLines = [
      form.order ? `Order number: ${form.order}` : null,
      `Email: ${form.email}`,
      "",
      form.message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${SUPPORT_EMAIL}&su=${subject}&body=${body}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Sora', sans-serif; }
        .font-utility { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
        {/* Header */}
        <p className="font-utility text-[11px] uppercase tracking-[0.25em] text-orange-500 mb-3">
          Customer care
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
          How can we help?
        </h1>
        <p className="text-stone-500 text-[15px] max-w-md mb-10">
          Pick what this is about and tell us a bit more. Our team replies
          within 24 hours, every day of the week.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          {/* Left: form */}
          <div>
            {/* Reason chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {REASONS.map(({ id, label, icon: Icon }) => {
                const active = reason === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setReason(id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                      active
                        ? "bg-stone-900 border-stone-900 text-white"
                        : "bg-white border-stone-200 text-stone-600 hover:border-orange-300 hover:text-orange-600"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                    {label}
                  </button>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-stone-200 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="abcd@email.com"
                    className="w-full rounded-lg border border-stone-200 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400"
                  />
                </div>
              </div>

              {reason === "order" || reason === "returns" ? (
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1.5">
                    Order number{" "}
                    <span className="text-stone-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.order}
                    onChange={update("order")}
                    placeholder="#10234"
                    className="w-full sm:w-1/2 rounded-lg border border-stone-200 px-3.5 py-2.5 text-sm font-utility text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400"
                  />
                </div>
              ) : null}

              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us what's going on..."
                  className="w-full rounded-lg border border-stone-200 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 text-white text-sm font-semibold px-5 py-3 hover:bg-orange-600 transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Send message
                <Send className="w-4 h-4" strokeWidth={2} />
              </button>
            </form>
          </div>

          {/* Right: contact info sidebar */}
          <div className="space-y-4">
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
              <p className="font-utility text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-4">
                Reach us directly
              </p>

              <div className="space-y-4">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SUPPORT_EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Mail
                    className="w-4 h-4 mt-0.5 text-orange-500"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-xs text-stone-400">Email</p>
                    <p className="text-sm font-medium text-stone-800 group-hover:text-orange-600 break-all">
                      {SUPPORT_EMAIL}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <Phone
                    className="w-4 h-4 mt-0.5 text-orange-500"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-xs text-stone-400">Phone</p>
                    <p className="text-sm font-medium text-stone-800">
                      01643896271
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 mt-0.5 text-orange-500"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-xs text-stone-400">Store address</p>
                    <p className="text-sm font-medium text-stone-800">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    className="w-4 h-4 mt-0.5 text-orange-500"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-xs text-stone-400">Support hours</p>
                    <p className="text-sm font-medium text-stone-800">
                      Sat–Thu, 10am–8pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3">
              <p className="text-xs text-orange-700">
                <span className="font-semibold">Avg. response time:</span> under
                24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
