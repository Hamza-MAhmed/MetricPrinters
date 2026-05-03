import Image from 'next/image'

/** * High-quality direct image links that match your requested styles.
 * These are optimized for fast loading in Karachi.
 */
const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`

const IMG = {
  // Matches the "Creative/Minimalist" Business card look
  cards: u('photo-1589829545856-d10d557cf95f'), 
  // Matches the "Hang Tag" look for garments/products
  panaflex: u('photo-1586528116311-ad8dd3c8310d'), 
  signboards: u('photo-1581291518633-83b4ebd1d83e'), 
  tags: u('photo-1544816155-12df9643f363'),
  storefront: u('photo-1558618666-fcd25c85cd64'),
  boxes: u('photo-1607082348824-0a96f2a4b9da'),
  billbooks: u('photo-1593642532842-98d0fd5ebc1a'),
  apparelPrint: u('photo-1576566588028-4147f3842f27'),
  caps: u('photo-1556306535-0f09a537f0a3'),
  officeDocs: u('photo-1586281380349-632531db7ed4'),
  books: u('photo-1589998059171-988d887df646'),
  pens: u('photo-1585776245991-cf89dd7fc73a'),
  keychains: u('photo-1629196914068-39742411f982'),
  stationery: u('photo-1626785774573-4b799315345d'),
  screen: u('photo-1621607512214-68297480165e'),
  more: u('photo-1586281380349-632531db7ed4'),
} as const

const services = [
  { name: 'Visiting Cards', desc: 'Premium business cards in matte, gloss, UV, or soft-touch finishes.', src: IMG.stationery, alt: 'Premium creative business cards' },
  { name: 'Tags', desc: 'Custom hang tags and clothing tags for garments and retail goods.', src: IMG.tags, alt: 'Professional clothing hang tags' },
  { name: 'Panaflex Banners', desc: 'Large-format flex banners for shops and outdoor advertising.', src: IMG.panaflex, alt: 'Large outdoor signage' },
  { name: 'Sign Boards', desc: 'Durable indoor and outdoor signboards for your office or shop front.', src: IMG.panaflex, alt: 'Commercial signboard' },
  { name: 'Packaging Boxes', desc: 'Custom printed boxes for products, gifting, and e-commerce.', src: IMG.boxes, alt: 'Branded packaging boxes' },
  { name: 'Stickers & Labels', desc: 'Die-cut stickers, product labels, and waterproof labels.', src: IMG.stationery, alt: 'Printed labels and stickers' },
  { name: 'Bill Books & Forms', desc: 'Numbered bill books, invoice pads, and custom office forms.', src: IMG.billbooks, alt: 'Professional bill books' },
  { name: 'T-Shirts & Uniforms', desc: 'Screen printing and heat transfer on t-shirts and uniforms.', src: IMG.apparelPrint, alt: 'Printed t-shirts' },
  { name: 'Caps & Hats', desc: 'Branded caps for staff, events, or promotional giveaways.', src: IMG.caps, alt: 'Custom printed caps' },
  { name: 'Keychains', desc: 'Custom printed keychains for corporate gifts and branding.', src: IMG.keychains, alt: 'Promotional items' },
  { name: 'Branded Pens', desc: 'Logo-printed pens — a cost-effective promotional item.', src: IMG.pens, alt: 'Branded office pens' },
  { name: 'Books & Catalogues', desc: 'Product catalogues, company profiles, and brochures.', src: IMG.books, alt: 'Printed book catalogues' },
  { name: 'Files & Folders', desc: 'Branded presentation folders for a professional corporate look.', src: IMG.officeDocs, alt: 'Corporate files and folders' },
  { name: 'Screen Printing', desc: 'High-quality screen printing on fabric, paper, and hard surfaces.', src: IMG.screen, alt: 'Screen printing work' },
  { name: 'Customized Everything', desc: "If it can be printed, we can get it done. Just ask us.", src: IMG.more, alt: 'Various printed products' },
]

export default function Services() {
  const waLink = "https://wa.me/923363683562?text=Hi! I need a quote for printing services.";

  return (
    <section id="services" className="section" aria-label="Our printing services">
      <div className="container">
        <div className="services-header">
          <div>
            <div className="section-label">What We Print</div>
            <h2 className="section-title">
              Every Print Need.
              <br />
              One Place.
            </h2>
            <p className="section-sub">
              Your "One-Stop Shop" for all printing requirements. We manage the quality so you don't have to.
            </p>
          </div>
          <a
            href={waLink}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ flexShrink: 0 }}
          >
            Request a Quote →
          </a>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <article key={s.name} className="service-card">
              <div className="svc-image-wrap">
                <Image 
                   src={s.src} 
                   alt={s.alt} 
                   fill 
                   sizes="(max-width: 640px) 100vw, (max-width: 968px) 33vw, 250px" 
                   className="svc-image" 
                   priority={s.name === 'Visiting Cards'} // Optimize LCP for first card
                />
              </div>
              <div className="svc-name">{s.name}</div>
              <div className="svc-desc">{s.desc}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}