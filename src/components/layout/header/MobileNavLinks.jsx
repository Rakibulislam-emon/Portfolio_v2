import { Menu } from "@headlessui/react";
import { Link } from "react-router";

export default function MobileNavLinks() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return links.map((link) => (
    <Menu.Item key={link.href}>
      {({ active }) => (
        <li className="w-full list-none">
          <Link
            to={link.href}
            className={`block px-4 py-2 w-full transition-colors duration-200 ${
              active ? "text-heading" : "text-text"
            }`}
          >
            {link.label}
          </Link>
        </li>
      )}
    </Menu.Item>
  ));
}
