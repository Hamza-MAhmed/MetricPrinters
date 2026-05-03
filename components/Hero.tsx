export default function Hero() {
  return (
    <section id="hero" aria-label="Hero">
      <div className="hero-bg" />
      <div className="hero-grid-pattern" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot" />
              Karachi&apos;s Trusted Print Partner
            </div>
            <h1 className="hero-headline">
              One Partner.
              <br />
              <span className="line-accent">All Your Printing.</span>
              <br />
              Done Right.
            </h1>
            <p className="hero-sub">
              From visiting cards to giant flex banners, from packaging boxes to branded uniforms — we manage every print job for your business, end to end. You just tell us what you need.
            </p>
            <div className="hero-actions">
              <a
                href="https://wa.me/923363683562?text=Hi!%20I%20need%20a%20quote%20for%20printing."
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Get a Free Quote
              </a>
              <a href="#services" className="btn-secondary">
                View All Services →
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-stat">
                <strong>500+</strong>
                <span>Orders Delivered</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-stat">
                <strong>50+</strong>
                <span>Business Clients</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-stat">
                <strong>48hr</strong>
                <span>Avg. Turnaround</span>
              </div>
            </div>
          </div>
          <div className="hero-visual" aria-hidden>
            <div className="floating-tag ft-1">
              <span className="ft-icon">🏷️</span> Tags &amp; Labels
            </div>
            <div className="floating-tag ft-2">
              <span className="ft-icon">🖨️</span> 48hr Turnaround
            </div>
            <div className="floating-tag ft-3">
              <span className="ft-icon">✅</span> Quality Guaranteed
            </div>
            <div className="hero-card-stack">
              <div className="print-card pc-1">
                <div className="pc-1-inner">
                  <div className="name">Ahmed Raza</div>
                  <div className="title">Chief Executive Officer</div>
                  <div className="contact">+92 300 0000000 · ahmed@company.pk</div>
                </div>
              </div>
              <div className="print-card pc-2">
                <div className="pc-2-text">
                  <div className="label">Panaflex Banner</div>
                  <div className="value">10ft × 4ft</div>
                </div>
                <span style={{ fontSize: '2.5rem' }}>🖼️</span>
              </div>
              <div className="print-card pc-3">
                <div className="swatch" style={{ background: 'linear-gradient(135deg,#c8410a,#f05a1a)' }} />
                <div className="swatch" style={{ background: 'linear-gradient(135deg,#0f0e0c,#2a2620)' }} />
                <div className="label">
                  Colour Matching
                  <br />
                  &amp; Brand Printing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
