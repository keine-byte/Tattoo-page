import t1 from '@/imports/tatuajes/1.jpg'
import t2 from '@/imports/tatuajes/2.jpg'
import t3 from '@/imports/tatuajes/3.jpg'
import t4 from '@/imports/tatuajes/4.jpg'
import t5 from '@/imports/tatuajes/5.jpg'
import t6 from '@/imports/tatuajes/6.jpg'

const GALLERY_ITEMS = [
  { url: t1, alt: 'Tatuaje estilo Tradicional Minimalista', tall: true },
  { url: t2, alt: 'Tatuaje estilo Tradicional Minimalista', tall: false },
  { url: t3, alt: 'Tatuaje estilo Tradicional Minimalista', tall: false },
  { url: t4, alt: 'Tatuaje estilo Tradicional Minimalista', tall: true },
  { url: t5, alt: 'Tatuaje estilo Tradicional Minimalista', tall: false },
  { url: t6, alt: 'Tatuaje estilo Tradicional Minimalista', tall: false },
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
