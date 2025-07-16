import React from 'react';
import { Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
      color: '#333'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      color: '#0077B5'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/yourusername',
      color: '#1DA1F2'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com/yourusername',
      color: '#1877F2'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/yourusername',
      color: '#E4405F'
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
        Connect With Me
      </h2>
      
      <p className="text-sm opacity-80 mb-6">
        Follow me on social media for updates on my latest projects and tech insights.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <div
                className="p-2 rounded-full transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: social.color }}
              >
                <Icon size={16} color="white" />
              </div>
              <span className="font-medium text-sm" style={{ color: "var(--color-text)" }}>
                {social.label}
              </span>
            </a>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs opacity-60">
          Prefer email? Drop me a line at{' '}
          <a
            href="mailto:rakibul@example.com"
            className="underline hover:no-underline transition-all duration-300"
            style={{ color: "var(--color-accent)" }}
          >
            rakibul@example.com
          </a>
        </p>
      </div>
    </div>
  );
}