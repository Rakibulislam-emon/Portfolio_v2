import {
  FaCode,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-[var(--header-background)]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-heading rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container px-4 relative z-10">
        {/* Main content */}
        <div className="flex flex-col items-center gap-8">
          {/* Brand section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-heading to-accent bg-clip-text text-transparent mb-2">
              Let's Connect & Create
            </h3>
            <p className="text-text/80 max-w-md mx-auto">
              Ready to bring your ideas to life? Let's build something amazing
              together.
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-2xl">
            <SocialLink
              href="https://github.com/yourusername"
              label="GitHub"
              icon={<FaGithub />}
              color="hover:text-gray-400"
            />
            <SocialLink
              href="https://linkedin.com/in/yourusername"
              label="LinkedIn"
              icon={<FaLinkedin />}
              color="hover:text-blue-400"
            />
            <SocialLink
              href="https://twitter.com/yourusername"
              label="Twitter"
              icon={<FaTwitter />}
              color="hover:text-sky-400"
            />
            <SocialLink
              href="https://facebook.com/yourusername"
              label="Facebook"
              icon={<FaFacebook />}
              color="hover:text-blue-500"
            />
            <SocialLink
              href="https://wa.me/yourwhatsappphonenumber"
              label="WhatsApp"
              icon={<FaWhatsapp />}
              color="hover:text-green-400"
            />
            <SocialLink
              href="mailto:youremail@example.com"
              label="Email"
              icon={<FaEnvelope />}
              color="hover:text-red-400"
            />
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Bottom section */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm text-text/60">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>and</span>
              <FaCode className="text-accent" />
              <span>by Rakibul Islam Emon</span>
            </div>

            <p className="text-xs text-text/50">
              © {new Date().getFullYear()} All rights reserved. Built with React
              & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Enhanced social link component
function SocialLink({ href, label, icon, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20 ${color}`}
    >
      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </a>
  );
}
