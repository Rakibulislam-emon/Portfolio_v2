import React from 'react';

export default function BlogHero({ isVisible }) {
  return (
    <section
      className={`mb-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--color-heading)" }}>
          Tech Blog
        </h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Insights, tutorials, and thoughts on modern web development, MERN stack, and emerging technologies.
        </p>
      </div>
    </section>
  );
}