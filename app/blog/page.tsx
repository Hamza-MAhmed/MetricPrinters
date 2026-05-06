import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Complete Guide to Business Printing in Karachi | Metric Printers',
    description:
        'Everything Karachi businesses need to know about printing — visiting cards, banners, packaging, stickers and more. Tips, pricing, and how to choose the right printing partner.',
    alternates: {
        canonical: 'http://hamza-mahmed.github.io/MetricPrinters/blog',
    },
    openGraph: {
        title: 'Complete Guide to Business Printing in Karachi',
        description: 'Tips, pricing, and advice for every type of business printing in Karachi.',
        url: 'http://hamza-mahmed.github.io/MetricPrinters/blog',
    },
}

export default function BlogPage() {
    return (
        <>
            {/* NAV placeholder — same nav as main site */}
            <div style={{ height: '68px' }} />

            <main style={{ background: 'var(--paper)', minHeight: '100vh' }}>

                {/* Hero */}
                <div style={{
                    background: 'var(--cream)',
                    borderBottom: '1px solid var(--border)',
                    padding: 'clamp(48px, 8vw, 100px) 0 clamp(40px, 6vw, 80px)',
                }}>
                    <div className="container">
                        <div className="section-label">Printing Guide</div>
                        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, maxWidth: '700px', lineHeight: 1.15 }}>
                            Complete Guide to Business Printing in Karachi
                        </h1>
                        <p className="section-sub" style={{ marginTop: '16px' }}>
                            Everything your business needs to know — from choosing the right product to getting the best quality at the right price.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px', fontSize: '0.85rem', color: 'var(--muted)' }}>
                            <span>📅 Published by Metric Printers</span>
                            <span>·</span>
                            <span>⏱ 6 min read</span>
                        </div>
                    </div>
                </div>

                {/* Article */}
                <article className="container" style={{ maxWidth: '760px', padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 60px)' }}>

                    {/* Table of contents */}
                    <div style={{
                        background: 'var(--cream)', border: '1px solid var(--border)',
                        borderRadius: '10px', padding: '24px 28px', marginBottom: '48px'
                    }}>
                        <p style={{ fontWeight: 600, marginBottom: '12px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>In This Guide</p>
                        <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[
                                ['#why-printing', 'Why Every Business in Karachi Needs Professional Printing'],
                                ['#types', 'Types of Printing Every Business Should Know About'],
                                ['#visiting-cards', 'Visiting Cards — Your Most Important First Impression'],
                                ['#banners', 'Banners & Signboards — Grab Attention Outdoors'],
                                ['#packaging', 'Packaging — Make Your Product Stand Out'],
                                ['#promotional', 'Promotional Items — Stay in Your Clients\' Hands'],
                                ['#how-to-choose', 'How to Choose the Right Printing Partner in Karachi'],
                                ['#tips', 'Pro Tips to Get the Best Print Quality'],
                            ].map(([href, label]) => (
                                <li key={href as string} style={{ fontSize: '0.9rem' }}>
                                    <a href={href as string} style={{ color: 'var(--accent)', textDecoration: 'none' }}>{label as string}</a>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <BlogSection id="why-printing" heading="Why Every Business in Karachi Needs Professional Printing">
                        <p>In a city as competitive as Karachi, first impressions can make or break a business relationship. Whether you&apos;re a small shop in Saddar, a startup in Clifton, or a growing brand in SITE, how your business looks on paper — literally — matters more than most business owners realise.</p>
                        <p>Professional printing signals credibility. A well-designed visiting card tells a client you take your business seriously. A clean banner outside your shop draws foot traffic. A branded packaging box turns a customer into a fan who shares your product online.</p>
                        <p>The businesses that invest in professional printing consistently outperform those that skip it — because every printed material is a silent salesperson working 24/7.</p>
                    </BlogSection>

                    <BlogSection id="types" heading="Types of Printing Every Business Should Know About">
                        <p>Not all printing is the same. Understanding the different types helps you make better decisions and get better results:</p>
                        <BlogList items={[
                            { title: 'Offset Printing', desc: 'Best for high-volume orders like books, catalogues, and bill books. Excellent quality, lower cost per unit at scale.' },
                            { title: 'Digital Printing', desc: 'Ideal for small to medium quantities. Visiting cards, flyers, stickers. Fast turnaround, no minimum quantity.' },
                            { title: 'Screen Printing', desc: 'Used for fabric — t-shirts, caps, uniforms. Ink is pushed through a mesh screen directly onto the material.' },
                            { title: 'Flex/Vinyl Printing', desc: 'For banners and signboards. Large format printing on durable flex material for outdoor use.' },
                            { title: 'UV Printing', desc: 'Premium finish for visiting cards and packaging. Creates a glossy or raised effect on specific design elements.' },
                        ]} />
                    </BlogSection>

                    <BlogSection id="visiting-cards" heading="Visiting Cards — Your Most Important First Impression">
                        <p>Despite everything going digital, the visiting card remains the single most important printed material for any business. In Pakistan&apos;s business culture, exchanging cards is still a standard part of every professional meeting.</p>
                        <p>Here&apos;s what to consider when ordering visiting cards:</p>
                        <BlogList items={[
                            { title: 'Paper weight', desc: '300–400 GSM is standard for a premium feel. Avoid anything below 250 GSM — it feels cheap.' },
                            { title: 'Finish', desc: 'Matte lamination looks sophisticated. Gloss is vibrant. Soft-touch feels luxurious. UV spot adds accent highlights.' },
                            { title: 'Size', desc: 'Standard business card size is 3.5" × 2". Stick to this unless you have a specific reason not to.' },
                            { title: 'What to include', desc: 'Name, title, phone, email, area/city, logo. Don\'t overcrowd — white space is your friend.' },
                            { title: 'Quantity', desc: 'Order at least 200 at a time. The per-unit cost drops significantly at higher quantities.' },
                        ]} />
                        <Callout>At Metric Printers, visiting cards start from <strong>Rs. 800 for 100 pieces</strong>. Premium finishes like soft-touch and UV are available on request.</Callout>
                    </BlogSection>

                    <BlogSection id="banners" heading="Banners & Signboards — Grab Attention Outdoors">
                        <p>For businesses with a physical presence — shops, offices, clinics, restaurants — outdoor signage is non-negotiable. It&apos;s your 24/7 advertisement that requires no recurring cost once installed.</p>
                        <BlogList items={[
                            { title: 'Panaflex banners', desc: 'The most common type in Karachi. Durable, affordable, and available in any size. Ideal for shop fronts, events, and roadside advertising.' },
                            { title: 'Backlit signboards', desc: 'Illuminated from behind for night visibility. Common for pharmacies, restaurants, and brand showrooms.' },
                            { title: 'Cut-out letters', desc: 'Three-dimensional lettering mounted on walls or boards. Premium look for office entrances and corporate environments.' },
                            { title: 'Roll-up banners', desc: 'Portable and reusable. Perfect for exhibitions, events, and in-store promotions.' },
                        ]} />
                        <p>Resolution matters for large format print. Always provide artwork at 150 DPI at final size, or let your printer handle the design to ensure sharpness.</p>
                    </BlogSection>

                    <BlogSection id="packaging" heading="Packaging — Make Your Product Stand Out">
                        <p>For e-commerce brands and product businesses in Karachi, packaging has become a marketing tool in its own right. Customers share unboxing moments on social media — a well-designed box is free advertising.</p>
                        <BlogList items={[
                            { title: 'Corrugated boxes', desc: 'Strong and stackable. Best for shipping products. Can be fully customised with your brand.' },
                            { title: 'Rigid boxes', desc: 'Premium feel, used for luxury products, gift sets, and high-end retail.' },
                            { title: 'Kraft paper bags', desc: 'Eco-friendly option gaining popularity among Karachi\'s fashion and food brands.' },
                            { title: 'Stickers & labels', desc: 'Cost-effective way to brand plain packaging. Works well for small businesses starting out.' },
                        ]} />
                        <Callout>Even a simple sticker with your logo on a plain box is 10x better than no branding. Start small and upgrade as your business grows.</Callout>
                    </BlogSection>

                    <BlogSection id="promotional" heading="Promotional Items — Stay in Your Clients' Hands">
                        <p>Promotional printing is one of the highest-ROI marketing investments for local businesses. Unlike digital ads that disappear, a branded pen or keychain stays with a client for months — reminding them of you every time they use it.</p>
                        <BlogList items={[
                            { title: 'Branded pens', desc: 'Most cost-effective. Order in bulk, distribute at events, leave at counters.' },
                            { title: 'Keychains', desc: 'Highly visible, used daily, long lifespan. Great for corporate gifting.' },
                            { title: 'T-shirts & caps', desc: 'Turn your team into walking billboards. Also powerful for events and giveaways.' },
                            { title: 'Notebooks & diaries', desc: 'Premium gift item for clients and corporate relationships.' },
                        ]} />
                    </BlogSection>

                    <BlogSection id="how-to-choose" heading="How to Choose the Right Printing Partner in Karachi">
                        <p>Karachi has hundreds of printers — from one-machine setups in Urdu Bazaar to large presses in SITE. Here&apos;s how to choose the right one for your business:</p>
                        <BlogList items={[
                            { title: 'Ask for samples', desc: 'Any serious printer will provide samples. If they can\'t, walk away.' },
                            { title: 'Check turnaround time', desc: 'Confirm the deadline before placing the order, not after. Get it in writing if it\'s urgent.' },
                            { title: 'Clarify the proofing process', desc: 'A good printer sends you a digital proof before printing. This prevents costly mistakes.' },
                            { title: 'Ask about delivery', desc: 'Does the printer deliver, or do you need to pick up? Factor this into your timeline.' },
                            { title: 'One partner for everything', desc: 'Working with a single trusted printing partner saves time, ensures consistency, and often gets you better pricing.' },
                        ]} />
                    </BlogSection>

                    <BlogSection id="tips" heading="Pro Tips to Get the Best Print Quality">
                        <BlogList items={[
                            { title: 'Always provide CMYK files', desc: 'RGB is for screens. CMYK is for print. If you submit RGB artwork, colours will shift when printed.' },
                            { title: 'Include bleed in your design', desc: 'Add 3mm bleed on all sides to prevent white edges after trimming.' },
                            { title: 'Embed all fonts', desc: 'If you use a custom font, embed it or convert text to outlines before submitting the file.' },
                            { title: 'Minimum 300 DPI for images', desc: 'Low-resolution images look pixelated when printed. Always use 300 DPI at final print size.' },
                            { title: 'Request a hard proof for large orders', desc: 'For orders above Rs. 5,000, always ask for a physical sample before full production.' },
                        ]} />
                    </BlogSection>

                    {/* CTA */}
                    <div style={{
                        background: 'var(--ink)', borderRadius: '12px',
                        padding: '40px 36px', marginTop: '56px', textAlign: 'center'
                    }}>
                        <h2 style={{ color: 'white', fontSize: '1.6rem', marginBottom: '12px' }}>Ready to Print for Your Business?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
                            Metric Printers handles everything — from visiting cards to packaging boxes. One message and your order is in motion.
                        </p>

                        <a href="https://wa.me/923363683562?text=Hi!%20I%20read%20your%20blog%20and%20need%20a%20quote."
                            className="btn-wa"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            💬 Get a Free Quote on WhatsApp
                        </a>
                    </div>

                </article>
            </main>

            {/* Back to home */}
            <div style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)', padding: '20px 0', textAlign: 'center' }}>
                <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
                    ← Back to Metric Printers
                </Link>
            </div>
        </>
    )
}

/* ── Reusable sub-components ── */
function BlogSection({ id, heading, children }: { id: string; heading: string; children: React.ReactNode }) {
    return (
        <section id={id} style={{ marginBottom: '52px' }}>
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', fontWeight: 900, marginBottom: '20px', paddingTop: '8px', borderTop: '2px solid var(--accent)', display: 'inline-block' }}>
                {heading}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.97rem', lineHeight: 1.75, color: 'var(--ink)' }}>
                {children}
            </div>
        </section>
    )
}

function BlogList({ items }: { items: { title: string; desc: string }[] }) {
    return (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: 0, listStyle: 'none' }}>
            {items.map((item) => (
                <li key={item.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>→</span>
                    <span><strong>{item.title}:</strong> {item.desc}</span>
                </li>
            ))}
        </ul>
    )
}

function Callout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{
            background: 'var(--cream)', borderLeft: '3px solid var(--accent)',
            borderRadius: '0 8px 8px 0', padding: '14px 20px',
            fontSize: '0.92rem', color: 'var(--ink)'
        }}>
            💡 {children}
        </div>
    )
}