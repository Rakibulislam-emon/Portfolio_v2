import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rakibul@example.com',
      href: 'mailto:rakibul@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 123 456 789',
      href: 'tel:+880123456789'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: null
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null
    }
  ];

  return (
    <div
      className="p-8 rounded-2xl"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)"
      }}
    >
      <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--color-heading)" }}>
        Contact Information
      </h2>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;
          const content = (
            <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-105 group">
              <div
                className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <Icon size={20} color="white" />
              </div>
              <div>
                <p className="text-sm opacity-70">{detail.label}</p>
                <p className="font-medium" style={{ color: "var(--color-text)" }}>
                  {detail.value}
                </p>
              </div>
            </div>
          );

          return detail.href ? (
            <a
              key={index}
              href={detail.href}
              className="block hover:bg-white/5 rounded-lg transition-colors duration-300"
            >
              {content}
            </a>
          ) : (
            <div key={index} className="hover:bg-white/5 rounded-lg transition-colors duration-300">
              {content}
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
        <h3 className="font-semibold mb-2" style={{ color: "var(--color-accent)" }}>
          Availability
        </h3>
        <p className="text-sm opacity-80">
          I'm currently available for freelance projects and full-time opportunities. 
          Let's discuss how we can work together!
        </p>
      </div>
    </div>
  );
}