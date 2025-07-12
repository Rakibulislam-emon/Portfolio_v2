import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8  bg-[var(--footer-background)] ">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" className="hover:text-heading transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-heading transition-colors">LinkedIn</a>
            <a href="https://twitter.com/yourusername" className="hover:text-heading transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
