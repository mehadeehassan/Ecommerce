import React from "react";
import AboutCard from "../../components/AboutCard/AboutCard";

export default function About() {
  return (
    <div className="bg-white text-gray-900">
      {/* about section  */}
      <div className="text-center py-20 px-6 bg-gray-50 shadow-md ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg hover:text-orange-400 ">
          {" "}
          We believe in quality and trust. Our main goal is to make your
          shopping experience easy and enjoyable.
        </p>
      </div>

      {/* lower section */}
      <div className="py-16 px-6 bg-gray-600 text-white mt-80 shadow-md ">
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
        </div>
      </div>
    </div>
  );
}
