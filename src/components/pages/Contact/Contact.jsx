import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--color-heading)" }}>
              Get In Touch
            </h1>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Information */}
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>

        {/* Call to Action */}
        <section className="text-center py-20 mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-heading)" }}>
              Let's Build Something Amazing
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about technology, 
              I'm always excited to connect with fellow developers and innovators.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
