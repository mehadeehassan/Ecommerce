import React from "react";
import { Truck, Gem, Headphones } from "lucide-react";
import AboutCard from "../../components/AboutCard/AboutCard";

const FEATURES = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "We ensure home delivery within 24-72 hours all over the country.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "We never compromise on the quality of our products.",
  },
  {
    icon: Headphones,
    title: "Best Support",
    description:
      "Our support team is always there for you whenever you need help.",
  },
];

export default function About() {
  return (
    <div className="bg-white text-stone-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Sora', sans-serif; }
        .font-utility { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      {/* Hero */}
      <div className="text-center py-20 px-6 border-b border-stone-100">
        <p className="font-utility text-[11px] uppercase tracking-[0.25em] text-orange-500 mb-4">
          About us
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">
          We believe in quality and trust
        </h1>
        <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Our goal is simple: make your shopping experience easy, reliable,
          and genuinely enjoyable, from the moment you browse to the day your
          order arrives.
        </p>
      </div>

      {/* Why shop with us */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
            Why shop with us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <AboutCard key={feature.title} aboutSection={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}