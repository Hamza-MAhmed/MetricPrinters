import Image from 'next/image'
import card from '../public/visiting_card.jpg'
import book from '../public/book.jpg'
import book2 from '../public/book2.jpg'
import box1 from '../public/box1.jpg'
import box2 from '../public/box2.jpg'
import envelope from '../public/envelope.jpg'
import fabric_sample from '../public/fabric_samplebook.jpg'
import ideal_bill from '../public/ideal_billbook.jpg'
import letterhead from '../public/letter_head.jpg'
import nankhatai from '../public/Untitled design (1).png'
import sticker from '../public/sticker.jpg'
import sticker2 from '../public/sticker2.jpg'


const work = [
  { src: card,     alt: 'Custom printed visiting card',    label: 'Visiting Card',       w: 80, h: 40 },
  { src: book,              alt: 'Printed book',                    label: 'Book',                w: 60, h: 20 },
  { src: book2,             alt: 'Printed book',                    label: 'Book',                w: 40, h: 20 },
  { src: box1,              alt: 'Custom packaging box',            label: 'Packaging Box',       w: 70, h: 80 },
  { src: box2,              alt: 'Custom packaging box',            label: 'Packaging Box',       w: 60, h: 80 },
  { src: envelope,          alt: 'Printed envelope',                label: 'Envelope',            w: 50, h: 20 },
  { src: fabric_sample, alt: 'Fabric sample book',             label: 'Fabric Sample Book',  w: 60, h: 30 },
  { src: ideal_bill,    alt: 'Printed bill book',               label: 'Bill Book',           w: 90, h: 30 },
  { src: letterhead,       alt: 'Custom printed letterhead',       label: 'Letter Head',         w: 60, h: 30 },
  { src: nankhatai,   alt: 'Nan khata paper printing',    label: 'Nan Khata Paper',  w: 80, h: 50 },
  { src: sticker,           alt: 'Custom printed sticker',          label: 'Sticker',             w: 60, h: 20 },
  { src: sticker2,          alt: 'Custom printed sticker',          label: 'Sticker',             w: 20, h: 20 },
]

export default function OurWork() {
  return (
    <section id="work" aria-label="Our work portfolio">
      <div className="container">

        <div className="work-header">
          <div>
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">A Glimpse of Our Work</h2>
            <p className="section-sub">
              Every order we deliver is a reflection of quality. Here&apos;s some of what we&apos;ve produced for businesses across Karachi.
            </p>
          </div>
          <a
            href="https://wa.me/923363683562?text=Hi!%20I%20want%20to%20see%20more%20of%20your%20work."
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ flexShrink: 0 }}
          >
            Get Your Quote →
          </a>
        </div>

        <div className="work-grid">
          {work.map((item, i) => (
            <div key={i} className="work-item"
            style={{ 
              /* This sets the width based on your 'w' value */
              width: `${item.w * 5}px`,  // Multiplying by 5 to make the small numbers usable
              height: 'auto'             // Let the height grow naturally>
            }}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.w}
                height={item.h}
                className="work-image"
              />
              <div className="work-label">{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}