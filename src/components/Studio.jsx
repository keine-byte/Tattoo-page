import Reveal from './Reveal'

export default function Studio() {
  return (
    <section id="estudio" className="bg-tinta-black py-20 text-papel-cream md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-20">
        {/* Foto del estudio */}
        <Reveal>
          <img
            src="https://picsum.photos/seed/studio/600/400"
            alt="Interior del estudio Tinta Negra Tattoo"
            loading="lazy"
            className="block w-full object-cover"
            style={{ filter: 'grayscale(100%) contrast(150%)' }}
          />
        </Reveal>

        {/* Texto */}
        <Reveal delay={120}>
          <p className="mb-3 font-inter text-xs font-light uppercase tracking-[0.3em] text-sangre-accent">
            — El Estudio
          </p>
          <h2 className="font-bebas text-5xl leading-none tracking-[0.15em] md:text-7xl">
            LA TINTA
          </h2>

          {/* Trazo de pincel (curva bezier) */}
          <svg
            viewBox="0 0 300 44"
            className="mt-2 h-8 w-64 md:h-10 md:w-80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 30 C 70 6, 130 42, 190 22 S 276 10, 294 20"
              stroke="#B00000"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <p className="mt-6 max-w-md font-inter text-base font-light leading-relaxed text-gris-metal md:text-lg">
            Un sótano con luz cruda, agujas estériles y cero postureo. Trabajamos
            con cita previa, sin vitrinas de neón: entras con una idea y sales con
            una pieza que no se borra.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
