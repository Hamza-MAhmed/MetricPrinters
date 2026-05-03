const steps = [
  { num: '1', title: 'Tell Us What You Need', desc: 'Call or WhatsApp us with your requirement — type, quantity, size, and any design details you have.' },
  { num: '2', title: 'Get an Instant Quote', desc: "We'll give you a clear price with no hidden costs. Agree to proceed and we get to work immediately." },
  { num: '3', title: 'We Handle Everything', desc: 'We manage the entire print process — sourcing, production, and quality checking on your behalf.' },
  { num: '4', title: 'Delivery to Your Door', desc: 'Your order is delivered to your location in Karachi. Fast, neat, and exactly as ordered.' },
]

export default function HowItWorks() {
  return (
    <section id="how" aria-label="How our process works">
      <div className="container">
        <div className="how-header">
          <div className="section-label">Our Process</div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">Getting your printing done has never been easier. Here&apos;s all it takes.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.num} className="step">
              <div className="step-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
