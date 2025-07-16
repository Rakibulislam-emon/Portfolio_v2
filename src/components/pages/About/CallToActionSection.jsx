const CallToActionSection = () => {
  return (
    <section className="text-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
      <div className="relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--color-heading)" }}>
          Ready to Build the Future?
        </h3>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Let's collaborate and create something extraordinary together. 
          With robotic precision and human creativity, we'll bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "white",
              boxShadow: "0 10px 30px rgba(242, 92, 117, 0.3)"
            }}
          >
            Start a Project
          </button>
          <button 
            className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 hover:scale-110"
            style={{
              borderColor: "var(--color-accent)",
              color: "var(--color-accent)",
              backgroundColor: "transparent"
            }}
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;