import React from "react";

export default function AboutCard({ aboutSection }) {
  const { icon: Icon, title, description } = aboutSection;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center hover:border-orange-200 hover:shadow-md transition-all">
      <div className="w-14 h-14 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-5">
        <Icon className="w-6 h-6" strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-lg font-semibold text-stone-900 mb-2">
        {title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}