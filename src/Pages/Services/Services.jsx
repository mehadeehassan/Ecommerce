import React from "react";
import { Truck, Gem, Headphones, Phone, PackageCheck, ShieldCheck, MessageCircle } from "lucide-react";
import AboutCard from "../../components/AboutCard/AboutCard";

const SUPPORT_PHONE = "+8801643896271";

const SERVICES = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "We ensure home delivery within 24-72 hours all over the country.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "We never compromise on the quality of our products.",
  },
  {
    icon: Headphones,
    title: "Best Support",
    description: "Our support team is always there for you whenever you need help.",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "We're available 24/7, every day of the week.",
  },
  {
    icon: PackageCheck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $100.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "We accept all major credit and debit cards, safely.",
  },
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Sora', sans-serif; }
        .font-utility { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-utility text-[11px] uppercase tracking-[0.25em] text-orange-500 mb-4">
            What we offer
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Our Services
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">
            We provide the best service experience to make your shopping easy
            and seamless.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <AboutCard key={service.title} aboutSection={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl bg-stone-900 px-8 py-14 text-center text-white relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-orange-500/10" />
          <div className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-orange-500/10" />

          <p className="font-utility text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4 relative">
            We're here to help
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 relative">
            Have any questions?
          </h2>
          <p className="text-stone-300 max-w-md mx-auto mb-8 relative">
            Send us a message on live chat or give us a direct call — we
            typically reply within minutes.
          </p>

          <div className="flex flex-wrap justify-center gap-3 relative">
            <a
              href={`tel:${SUPPORT_PHONE}`}
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold hover:bg-orange-600 transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              Call now
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-600 px-6 py-3 text-sm font-semibold hover:border-orange-400 hover:text-orange-400 transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              Live chat
              <span className="relative flex h-2 w-2 ml-0.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}