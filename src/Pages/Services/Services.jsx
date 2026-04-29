import React from "react";
import AboutCard from "../../components/AboutCard/AboutCard";

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            We provide the best service experience to make your shopping easy
            and seamless.
          </p>
        </div>

        {/* Services Section */}

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <AboutCard
            aboutSection={{
              title: "Fast Delivery",
              description:
                "We ensure home delivery within 24-72 hours all over the country.",
              icon: "🚚",
            }}
          />
          <AboutCard
            aboutSection={{
              title: "Premium Quality",
              description:
                "We never compromise on the quality of our products.",
              icon: "💎",
            }}
          />
          <AboutCard
            aboutSection={{
              title: "Best Support",
              description:
                "Our support team is always there for you whenever you need help.",
              icon: "🤝",
            }}
          />
          <AboutCard
            aboutSection={{
              title: "Call Us",
              description: "We are available 24/7 for you.",
              icon: "📞",
            }}
          />
          <AboutCard
            aboutSection={{
              title: "Free Shipping",
              description: "We provide free shipping on all orders over $100.",
              icon: "🚚",
            }}
          />
          <AboutCard
            aboutSection={{
              title: "Secure Payment",
              description: "We accept all major credit cards and debit cards.",
              icon: "💳",
            }}
          />
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-orange-400 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Have any questions?</h2>
          <p className="mb-6 opacity-90">
            Send us a message on Messenger or give us a direct call.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-orange-400 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
              Call Now
            </button>
            <button className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-orange-600 transition">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
