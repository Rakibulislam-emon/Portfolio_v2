import { Menu } from "@headlessui/react";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileNavLinks from "./MobileNavLinks";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="py-6 bg-[var(--header-background)]">
      <div className="max-w-7xl  mx-auto px-4 md:px-0 flex justify-between items-center relative">
        {/* Logo */}
       <Link to={"/"}>
          <div className="text-heading md:text-2xl font-bold ">
            𝓡𝓪𝓴𝓲𝓫𝓾𝓵 𝓘𝓼𝓵𝓪𝓶 𝓔𝓶𝓸𝓷
          </div>
       </Link>

        {/* Mobile Menu (Headless UI Dropdown) */}
        <div className="md:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className="
                  inline-flex
                  justify-center
                  items-center
                  p-2
                  rounded-md
                  text-heading
                  hover:text-white
                  transition-colors
                  duration-300
                  focus:outline-none
                  focus-visible:ring-0
                "
              >
                {/* Hamburger Icon */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Menu.Button>
            </div>

            <Menu.Items
              className="
                fixed 
                right-0 
                top-[70px] 
                w-40 
                mt-2 
                origin-top-right 
                bg-[var(--header-background)] 
                rounded-l-2xl 
                shadow-lg 
                z-50 
              border-none
              "
            >
              <div className="py-1  flex flex-col  items-center">
                <MobileNavLinks />
              </div>
            </Menu.Items>
          </Menu>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 ">
            <DesktopNavLinks />
          </ul>
        </nav>
      </div>
    </header>
  );
}
