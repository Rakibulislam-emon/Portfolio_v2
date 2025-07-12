import React from 'react'

export default function Header() {
  return (
    <header className="py-6  bg-[var(--header-background)]">
      <div className="container flex justify-between items-center">
        <div className="text-heading text-2xl font-bold">Your Name</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-heading transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-heading transition-colors">About</a></li>
            <li><a href="/portfolio" className="hover:text-heading transition-colors">Portfolio</a></li>
            <li><a href="/resume" className="hover:text-heading transition-colors">Resume</a></li>
            <li><a href="/contact" className="hover:text-heading transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
