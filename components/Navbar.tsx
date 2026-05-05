'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link' 
import Image from 'next/image'  
import logoImg from '../public/1stLogo.png'

export default function Navbar() {
  const inputRef = useRef<HTMLInputElement>(null)

  function closeMenu() {
    const el = inputRef.current
    if (el) el.checked = false
  }

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 641px)')
    function onChange() {
      if (mq.matches && inputRef.current) inputRef.current.checked = false
    }
    mq.addEventListener('change', onChange)
    onChange()
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <nav role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
      <Link href="/" className="logo" aria-label="Metric Printers Home">
          <Image
            src={logoImg}
            alt="Metric Printers Logo"
            width={140}
            height={44}
            style={{ objectFit: 'contain', height: '90px', width: 'auto' }}
            priority
          />
        </Link>


        <input
          ref={inputRef}
          type="checkbox"
          id="main-nav-toggle"
          className="nav-toggle-input"
          tabIndex={-1}
        />
        <label htmlFor="main-nav-toggle" className="hamburger" aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </label>

        <ul className="nav-links" id="navLinks">
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#how" onClick={closeMenu}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#industries" onClick={closeMenu}>
              Industries
            </a>
          </li>
          {/* <li>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
          </li> */}
          <li><a href="/blog" onClick={() => setOpen(false)}>Blog</a>
          </li>
          <li>
            <a
              href="https://wa.me/923363683562?text=Hi!%20I%20need%20a%20quote."
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
