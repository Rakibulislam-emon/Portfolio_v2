import React from 'react'
import { useEffect, useState } from "react";
import { personalInfo } from '../../Data/data'

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
          className={`mb-32 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--color-heading)" }}>
              About Me
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Profile Image */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div
                  className="w-80 h-80 rounded-full overflow-hidden border-4 border-opacity-30"
                  style={{ borderColor: "var(--color-accent)" }}
                >
                  <img
                    src="https://i.ibb.co/Pz5k4Szp/picture-3723757-1657953622.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:w-2/3">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "var(--color-heading)" }}
              >
                {personalInfo.title}
              </h2>
              <p className="text-xl leading-relaxed mb-6 opacity-90">
                {personalInfo.description}
              </p>
              <p className="text-lg leading-relaxed mb-8 opacity-80">
                {personalInfo.additionalInfo}
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {personalInfo.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <h4
                      className="font-semibold mb-2"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {highlight.label}
                    </h4>
                    <p className="text-sm opacity-80">{highlight.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  )
}
