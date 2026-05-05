'use client'

import { useState } from 'react'
import Link from 'next/link'    
import Image from 'next/image'  
import logoImg from '../public/1stLogo.png'


const industries = [
  { icon: '🛍️', label: 'Retail Shops' },
  { icon: '🍽️', label: 'Restaurants & Cafés' },
  { icon: '👗', label: 'Clothing & Fashion' },
  { icon: '🏗️', label: 'Construction & Real Estate' },
  { icon: '💊', label: 'Pharmacies & Clinics' },
  { icon: '🎓', label: 'Schools & Institutes' },
  { icon: '🏢', label: 'Corporates & Offices' },
  { icon: '🎉', label: 'Event Planners' },
  { icon: '📦', label: 'E-Commerce Brands' },
  { icon: '💈', label: 'Salons & Beauty' },
  { icon: '🚗', label: 'Auto & Services' },
  { icon: '⚡', label: 'Startups & New Brands' },
]

export function Industries() {
  return (
    <section id="industries" aria-label="Industries we serve">
      <div className="container">
        <div className="industries-header">
          <div className="section-label">Who We Work With</div>
          <h2 className="section-title">Businesses of Every Kind</h2>
          <p className="section-sub">From solo entrepreneurs to growing companies — if your business needs printing, we&apos;re your partner.</p>
        </div>
        <div className="industry-pills">
          {industries.map((i) => (
            <div key={i.label} className="pill">
              <span className="pill-icon">{i.icon}</span> {i.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    text: '"Ordered visiting cards and a shop banner. Both were ready the next day and the quality was excellent. Will definitely use again for all our print work."',
    initials: 'SR',
    name: 'Salman Raza',
    role: 'Owner, Raza Electronics, Karachi',
  },
  {
    text: '"We needed branded t-shirts and packaging boxes for our launch. They handled everything within 3 days. Super professional and very easy to deal with."',
    initials: 'FA',
    name: 'Fareeha Ahmed',
    role: 'Founder, Bloom & Co.',
  },
  {
    text: '"Best part is I just WhatsApp them what I need and they take care of everything. No running around, no hassle. The bill books came out perfectly."',
    initials: 'MK',
    name: 'Muhammad Kashif',
    role: 'Manager, Al-Noor Traders',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Client testimonials">
      <div className="container">
        <div className="testi-header">
          <div className="section-label">What Clients Say</div>
          <h2 className="section-title">Trusted by Karachi Businesses</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'How do I place an order?', a: "Just send us a WhatsApp or call us. Tell us what you need, the quantity, and any design files you have. We'll give you a quote right away." },
  { q: 'Do I need to provide a design?', a: 'Not necessarily. If you have a logo or artwork, great — send it over. If not, we can help guide you or arrange basic design work for your order.' },
  { q: 'How long does delivery take?', a: 'Most standard orders are ready within 24 to 48 hours. Larger or more complex jobs may take 3–5 days. We always give you a clear timeline upfront.' },
  { q: 'Do you deliver across Karachi?', a: 'Yes, we deliver to all areas across Karachi. Delivery charges may apply depending on your location.' },
  { q: 'What is the minimum order quantity?', a: "It depends on the product. Visiting cards typically start from 100 pieces. For other items, just ask us and we'll let you know the minimum for your specific need." },
  { q: "What if I'm not happy with the quality?", a: "We inspect every order before it leaves. If something isn't right, we'll work with you to fix it. Your satisfaction is our priority." },
  { q: 'Can you handle bulk/corporate orders?', a: "Absolutely. We work with businesses of all sizes. Bulk orders often come with better pricing — just get in touch and we'll work out the best deal for you." },
  { q: 'How do I pay?', a: 'We accept cash, bank transfer, and mobile payments like Easypaisa and JazzCash. Payment terms are discussed when you place your order.' },
]

export function FAQ() {
  const [open, setOpen] = useState<Record<number, boolean>>({})

  function toggle(i: number) {
    setOpen((prev) => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <section id="faq" aria-label="Frequently asked questions">
      <div className="container">
        <div className="faq-header">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Common Questions</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              role="button"
              tabIndex={0}
              className={`faq-item${open[i] ? ' open' : ''}`}
              onClick={() => toggle(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggle(i)
                }
              }}
            >
              <div className="faq-q">
                {f.q} <span className="faq-toggle">+</span>
              </div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section id="cta" aria-label="Get started">
      <div className="container">
        <div className="section-label">Ready to Get Started?</div>
        <h2 className="section-title">
          Let&apos;s Handle All Your
          <br />
          Printing — Starting Today.
        </h2>
        <p className="section-sub">No more chasing vendors. No more wasted time. One message and your print job is in motion.</p>
        <div className="cta-actions">
          <a href="https://wa.me/923363683562?text=Hi!%20I%20need%20a%20quote%20for%20printing." className="btn-wa" target="_blank" rel="noopener noreferrer">
            💬 Chat on WhatsApp
          </a>
          <a href="tel:+923363683562" className="btn-light">
            📞 Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
          <Link href="/" aria-label="Metric Printers Home">
              <Image
                src={logoImg}
                alt="Metric Printers Logo"
                width={160}
                height={52}
                style={{ objectFit: 'contain', height: '90px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p>
              Karachi&apos;s trusted one-stop printing partner for businesses. We manage your entire print workflow so you can focus on what matters — growing your business.
            </p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              {['Visiting Cards', 'Panaflex Banners', 'Sign Boards', 'Packaging Boxes', 'Stickers & Labels', 'Screen Printing'].map((s) => (
                <li key={s}>
                  <a href="#services">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>More Services</h5>
            <ul>
              {['T-Shirts & Caps', 'Keychains & Pens', 'Bill Books', 'Books & Catalogues', 'Tags & Labels', 'Files & Folders'].map((s) => (
                <li key={s}>
                  <a href="#services">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="tel:+923363683562">📞 +92 300 000 0000</a>
              </li>
              <li>
                <a href="https://wa.me/923363683562" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp Us
                </a>
              </li>
              <li>
                <a href="#cta">📍 Karachi, Pakistan</a>
              </li>
              <li>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Mon–Sat, 9am–8pm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Metric Printers. All rights reserved.</span>
          <span>Serving businesses across Karachi with professional printing solutions.</span>
        </div>
      </div>
    </footer>
  )
}

export function WAFloat() {
  return (
    <a
      href="https://wa.me/923363683562?text=Hi!%20I%20need%20a%20quote%20for%20printing."
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.374 0 0 5.373 0 12c0 2.917 1.04 5.59 2.747 7.663L.947 23.879l4.33-1.735A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.37l-.36-.213-3.714 1.487.999-3.622-.234-.372A9.816 9.816 0 012.182 12C2.182 6.57 6.571 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    </a>
  )
}
