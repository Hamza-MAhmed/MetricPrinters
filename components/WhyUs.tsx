const features = [
  {
    icon: '🎯',
    title: 'Complete Print Management',
    desc: 'We handle sourcing, quality checks, and delivery. You focus on running your business.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'Most orders ready within 24–48 hours. Rush jobs available for urgent needs.',
  },
  {
    icon: '💎',
    title: 'Quality You Can Count On',
    desc: "Every order is inspected before delivery. We fix it if it's not right.",
  },
  {
    icon: '🤝',
    title: 'Trusted by Local Businesses',
    desc: "From startups to established brands across Karachi, we've got you covered.",
  },
]

const statCards = [
  { num: '50+', label: 'Happy Business Clients' },
  { num: '20+', label: 'Print Services Offered' },
  { num: '48h', label: 'Average Delivery Time' },
  { num: '100%', label: 'Quality Checked' },
]

export default function WhyUs() {
  return (
    <section id="why" aria-label="Why choose us">
      <div className="container">
        <div className="why-grid">
          <div className="why-left">
            <div className="section-label">Why Businesses Choose Us</div>
            <h2 className="section-title">Your Dedicated Print Manager — Not Just a Printer</h2>
            <p className="section-sub">
              Most businesses waste time chasing multiple vendors for different print needs. We change that. One call, one contact, everything handled.
            </p>
            <div className="why-features">
              {features.map((f) => (
                <div key={f.title} className="why-feat">
                  <div className="feat-icon">{f.icon}</div>
                  <div className="feat-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-right">
            <div className="stat-card accent-card">
              <div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Print orders delivered across Karachi — and counting.</div>
              </div>
              <span style={{ fontSize: '4rem', opacity: 0.4 }}>🖨️</span>
            </div>
            {statCards.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
