import { useState } from 'react'
import Reveal from './Reveal'

const FLASH_ITEMS = [
  { src: 'https://picsum.photos/seed/tattoo1/400/500', label: 'TRADITIONAL' },
  { src: 'https://picsum.photos/seed/tattoo2/400/650', label: 'FINE LINE' },
  { src: 'https://picsum.photos/seed/tattoo3/400/470', label: 'BLACKWORK' },
  { src: 'https://picsum.photos/seed/tattoo4/400/600', label: 'DOTWORK' },
  { src: 'https://picsum.photos/seed/tattoo5/400/520', label: 'NEO-JAPONÉS' },
  { src: 'https://picsum.photos/seed/tattoo6/400/700', label: 'TRIBAL' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="flash" className="bg-papel-cream py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-20">
        <Reveal className="mb-12 md:mb-16">
          <p className="mb-3 font-inter text-xs font-light uppercase tracking-[0.3em] text-sangre-accent">
            — Flash
          </p>
          <h2 className="font-bebas text-5xl tracking-[0.15em] text-tinta-black md:text-7xl">
            FLASH
          </h2>
        </Reveal>

        {/* Masonry con CSS columns */}
        <div className="columns-2 gap-4 md:columns-3 md:gap-6">
          {FLASH_ITEMS.map((item, i) => (
            <figure
              key={item.label}
              onClick={() => setActive(active === i ? null : i)}
              className="group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden md:mb-6"
            >
              <img
                src={item.src}
                alt={`Tatuaje estilo ${item.label}`}
                loading="lazy"
                className="block w-full"
              />

              {/* Overlay hover / touch */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-tinta-black/80 transition-opacity duration-300 ${
                  active === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <span className="font-bebas text-2xl tracking-[0.15em] text-white md:text-3xl">
                  {item.label}
                </span>
                <span className="block w-8 border-t border-white" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
