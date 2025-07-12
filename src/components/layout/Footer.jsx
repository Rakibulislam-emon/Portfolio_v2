import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-[var(--footer-background)]">
      <div className="container px-4 flex flex-col items-center gap-6">
        {/* Call to action */}
        <p className="text-center text-sm md:text-base text-text">
          Stay connected with me on social media
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <SocialLink
            href="https://github.com/yourusername"
            label="GitHub"
            icon={<FaGithub className="text-xl" />}
          />
          <SocialLink
            href="https://linkedin.com/in/yourusername"
            label="LinkedIn"
            icon={<FaLinkedin className="text-xl" />}
          />
          <SocialLink
            href="https://twitter.com/yourusername"
            label="Twitter"
            icon={<FaTwitter className="text-xl" />}
          />
          <SocialLink
            href="https://facebook.com/yourusername"
            label="Facebook"
            icon={<FaFacebook className="text-xl" />}
          />
          <SocialLink
            href="https://wa.me/yourwhatsappphonenumber"
            label="WhatsApp"
            icon={<FaWhatsapp className="text-xl" />}
          />
          <SocialLink
            href="mailto:youremail@example.com"
            label="Email"
            icon={<FaEnvelope className="text-xl" />}
          />
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-text opacity-70">
          © {new Date().getFullYear()} Rakibul Islam Emon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ✅ Reusable social link for cleaner code
function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-text hover:text-heading transition-colors duration-200"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  );
}
