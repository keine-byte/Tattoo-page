const GALLERY_ITEMS = [
  { url: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&h=750&fit=crop&auto=format', alt: 'Tatuaje estilo Tradicional Minimalista', tall: true },
  { url: 'https://images.unsplash.com/photo-1552627019-947c3789ffb5?w=600&h=450&fit=crop&auto=format', alt: 'Tatuaje estilo Tradicional Minimalista', tall: false },
  { url: 'https://images.unsplash.com/photo-1605647533135-51b5906087d0?w=600&h=450&fit=crop&auto=format', alt: 'Tatuaje estilo Tradicional Minimalista', tall: false },
  { url: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=750&fit=crop&auto=format', alt: 'Tatuaje estilo Tradicional Minimalista', tall: true },
  { url: 'https://images.unsplash.com/photo-1567071208639-716c1009517d?w=600&h=450&fit=crop&auto=format', alt: 'Tatuaje estilo Tradicional Minimalista', tall: false },
  { url: 'https://images.unsplash.com/photo-1575495407752-bfb6fb0518bf?w=600&h=450&fit=crop&auto=format', alt: 'Tatuaje estilo Tradicional Minimalista', tall: false },
]

export default function Portfolio() {
  return (
    <section id="portafolio" className="px-6 md:px-16 py-20 md:py-32">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— Trabajo reciente</p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#F7F5F0]">PORTAFOLIO</h2>
          <p className="mt-3 font-inter font-light text-sm tracking-[0.15em] text-[#5A5A5A] uppercase">
            Estilo: Tradicional Minimalista
          </p>
        </div>
        <div className="hidden md:block w-48 border-t border-dashed border-[#5A5A5A]/40" style={{ marginBottom: '0.6rem' }} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.url}
            className={`gallery-item relative overflow-hidden border border-[#5A5A5A]/30 cursor-pointer group ${item.tall ? 'row-span-2' : ''}`}
            style={{ minHeight: item.tall ? '400px' : '220px' }}
          >
            <img
              src={item.url}
              alt={item.alt}
              loading="lazy"
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              style={{ display: 'block' }}
            />
            <div className="gallery-overlay absolute inset-0 bg-[#0A0A0A]/80 flex items-center justify-center opacity-0 transition-opacity duration-300">
              <span className="font-bebas text-lg md:text-2xl tracking-[0.2em] text-[#F7F5F0] border border-[#F7F5F0]/40 px-4 py-2 text-center">
                TRADICIONAL MINIMALISTA
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
