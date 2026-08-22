import { useEffect, useRef } from 'react'

export default function Hero() {
  const cursorRef = useRef(null)

  // Cursor personalizado: círculo de 20px que sigue al ratón (solo en el Hero).
  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Solo en dispositivos con puntero fino (ratón), no en táctiles.
    if (!window.matchMedia('(pointer: fine)').matches) {
      cursor.style.display = 'none'
      return
    }

    const onMove = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-papel-cream text-tinta-black"
    >
      {/* Ruido de fondo (SVG feTurbulence) */}
      <div
        aria-hidden="true"
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-multiply"
      />

      {/* Cursor personalizado */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-5 w-5 rounded-full border border-white mix-blend-difference md:block"
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 md:px-20 md:py-32">
        {/* Grid asimétrica del título */}
        <h1 className="grid select-none grid-cols-1 items-center font-bebas text-[clamp(4rem,15vw,10rem)] leading-[0.85] tracking-[0.15em] md:grid-cols-2 lg:grid-cols-3">
          <span className="justify-self-center md:justify-self-start">TINTA</span>
          <span className="justify-self-center md:justify-self-end lg:justify-self-center">
            NEGR
            {/* La 'a' se fuerza a minúscula con Inter (Bebas Neue solo tiene mayúsculas)
                y el margen negativo la hace "caer" hacia NEGR. */}
            <span className="-ml-[0.2em] font-inter lowercase">a</span>
          </span>
          <span className="justify-self-center md:col-span-2 lg:col-span-1 lg:justify-self-end">
            TATTOO
          </span>
        </h1>

        {/* Eslogan + CTA */}
        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xs font-inter text-base font-light tracking-wide text-gris-metal">
            Arte sobre piel. Estilo bajo cero.
          </p>
          <a
            href="#flash"
            className="inline-flex self-start bg-tinta-black px-10 py-4 font-inter text-sm font-semibold uppercase tracking-[0.2em] text-papel-cream transition-colors duration-300 hover:bg-sangre-accent"
          >
            VER FLASH
          </a>
        </div>
      </div>
    </section>
  )
}
