import { useState } from 'react'

const GALLERY_ITEMS = [
  { url: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&h=750&fit=crop&auto=format', label: 'TRADICIONAL', style: 'Tradicional', alt: 'Tattoo artist working with black ink needle', tall: true },
  { url: 'https://images.unsplash.com/photo-1552627019-947c3789ffb5?w=600&h=450&fit=crop&auto=format', label: 'FINELINE', style: 'Fineline', alt: 'Grayscale close up of tattoo session', tall: false },
  { url: 'https://images.unsplash.com/photo-1605647533135-51b5906087d0?w=600&h=450&fit=crop&auto=format', label: 'NEO-JAPONÉS', style: 'Neo-Japonés', alt: 'Man with heavy black tattoos on arm', tall: false },
  { url: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=750&fit=crop&auto=format', label: 'BLACKWORK', style: 'Blackwork', alt: 'Close-up of tattooing on arm', tall: true },
  { url: 'https://images.unsplash.com/photo-1567071208639-716c1009517d?w=600&h=450&fit=crop&auto=format', label: 'DOTWORK', style: 'Dotwork', alt: 'Flower tattoo in progress on leg', tall: false },
  { url: 'https://images.unsplash.com/photo-1575495407752-bfb6fb0518bf?w=600&h=450&fit=crop&auto=format', label: 'TRIBAL', style: 'Tribal', alt: 'Man with full body black tattoos lying in plants', tall: false },
]

const FILTERS = ['Todos', 'Tradicional', 'Fineline', 'Neo-Japonés', 'Blackwork', 'Dotwork', 'Tribal']

export default function Portfolio() {
  const [active, setActive] = useState('Todos')
  const items = active === 'Todos' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.style === active)

  return (
    <section id="portafolio" className="px-6 md:px-16 py-20 md:py-32">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— Trabajo reciente</p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#F7F5F0]">PORTAFOLIO</h2>
        </div>
        <div className="hidden md:block w-48 border-t border-dashed border-[#5A5A5A]/40" style={{ marginBottom: '0.6rem' }} />
      </div>

      {/* Filtros por estilo */}
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`font-inter text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-colors duration-200 ${
              active === f
                ? 'bg-[#B00000] border-[#B00000] text-[#F7F5F0]'
                : 'border-[#5A5A5A]/40 text-[#5A5A5A] hover:border-[#F7F5F0] hover:text-[#F7F5F0]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className={`gallery-item relative overflow-hidden border border-[#5A5A5A]/30 cursor-pointer group ${item.tall ? 'row-span-2' : ''}`}
            style={{ minHeight: item.tall ? '400px' : '220px' }}
          >
            <img
              src={item.url}
              alt={item.alt}
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              style={{ display: 'block' }}
            />
            <div className="gallery-overlay absolute inset-0 bg-[#0A0A0A]/80 flex items-center justify-center opacity-0 transition-opacity duration-300">
              <span className="font-bebas text-xl md:text-2xl tracking-[0.3em] text-[#F7F5F0] border border-[#F7F5F0]/40 px-4 py-2">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
