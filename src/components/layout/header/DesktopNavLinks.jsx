import { Link } from "react-router";

export default function DesktopNavLinks() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return links.map((link) => (
    <li key={link.href} className="relative group">
      <Link
        to={link.href}
        className="
          text-text 
          font-medium 
          px-3 
          py-1 
          rounded 
          transition 
          duration-300 
          hover:text-heading 
          hover:bg-heading/10
          focus:outline-none
          focus-visible:ring-2 
          focus-visible:ring-heading
          focus-visible:ring-offset-2
        "
      >
        {link.label}

        {/* Underline animation */}
        <span
          className="
            absolute 
            left-0 
            bottom-0 
            w-0 
            h-0.5 
            bg-heading 
            transition-all 
            duration-300 
            group-hover:w-full
          "
        />
      </Link>
    </li>
  ));
};
