import React from 'react';

export default function NewsletterSection() {
  return (
    <section className="text-center py-20 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-heading)" }}>
          Stay Updated
        </h3>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
          Subscribe to get notified about new articles, tutorials, and insights on modern web development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(255, 255, 255, 0.2)",
              color: "var(--color-text)"
            }}
          />
          <button
            className="px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "white"
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}