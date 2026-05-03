const items = [
  'Visiting Cards',
  'Panaflex Banners',
  'Sign Boards',
  'Stickers & Labels',
  'Packaging Boxes',
  'Bill Books',
  'Screen Printing',
  'T-Shirts & Caps',
  'Keychains & Pens',
  'Books & Files',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="ticker" aria-hidden>
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot">✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  )
}
