export default function Hero() {
  const FEATURED = [
    { url: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=400&h=500&fit=crop&auto=format', label: 'BLACKWORK' },
    { url: 'https://images.unsplash.com/photo-1605647533135-51b5906087d0?w=400&h=500&fit=crop&auto=format', label: 'NEO-JAPONÉS' },
    { url: 'https://images.unsplash.com/photo-1567071208639-716c1009517d?w=400&h=500&fit=crop&auto=format', label: 'DOTWORK' },
  ]

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 torn-edge overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=1440&h=1024&fit=crop&auto=format')`,
          filter: 'contrast(1.4) brightness(0.25)',
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.08,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Red radial glow top-left */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(176,0,0,0.18) 0%, transparent 70%)' }}
      />

      {/* Ink splatter SVG — bottom right */}
      <div className="absolute bottom-16 right-8 md:right-20 pointer-events-none z-[2] opacity-70">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="140" rx="28" ry="22" fill="#0A0A0A" transform="rotate(-15 130 140)" />
          <ellipse cx="60" cy="155" rx="16" ry="12" fill="#0A0A0A" transform="rotate(10 60 155)" />
          <ellipse cx="155" cy="90" rx="12" ry="9" fill="#0A0A0A" transform="rotate(-30 155 90)" />
          <circle cx="45" cy="120" r="7" fill="#0A0A0A" />
          <circle cx="100" cy="170" r="5" fill="#0A0A0A" />
          <circle cx="170" cy="155" r="4" fill="#0A0A0A" />
          <ellipse cx="90" cy="130" rx="20" ry="30" fill="#0A0A0A" transform="rotate(20 90 130)" />
        </svg>
      </div>

      {/* Main headline — asymmetric left stack */}
      <div className="relative z-[3] px-8 md:px-20 w-full max-w-7xl">
        <div className="flex flex-col items-start leading-none">
          <h1 className="font-bebas text-[clamp(5rem,18vw,18rem)] leading-[0.88] tracking-[0.04em] text-[#F7F5F0] select-none">
            TINTA
          </h1>

          <div className="flex items-baseline leading-[0.88] -mt-2 md:-mt-4">
            <span className="font-bebas text-[clamp(5rem,18vw,18rem)] text-[#F7F5F0] tracking-[0.04em]">NEGRA</span>
          </div>

          <div className="-mt-1 md:-mt-2">
            <span className="font-abril text-[clamp(2.5rem,8vw,8rem)] text-[#F7F5F0] tracking-tight leading-none">
              TATTOO
            </span>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="mt-8 md:mt-12 mb-8 w-32 md:w-48" style={{ height: '1px', background: 'linear-gradient(90deg, #B00000 0%, #5A5A5A 100%)' }} />

        {/* Tagline + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
          <p className="text-sm md:text-base font-inter font-light tracking-[0.15em] text-[#5A5A5A] uppercase">
            Arte sobre piel.&nbsp; Estilo bajo cero.
          </p>
          <a
            href="#portafolio"
            className="font-bebas text-lg md:text-xl tracking-[0.3em] px-10 py-4 bg-[#F7F5F0] text-[#0A0A0A] hover:bg-[#B00000] hover:text-[#F7F5F0] transition-colors duration-300"
          >
            VER FLASH
          </a>
        </div>

        {/* Breve descripción de servicios */}
        <p className="mt-8 max-w-2xl font-inter font-light text-sm md:text-base leading-relaxed text-[#F7F5F0]/70">
          Tatuajes personalizados en blackwork, tradicional, neo-japonés y fineline. Diseño a medida, cita previa y
          protocolos de higiene certificados. Trabajos destacados:
        </p>

        {/* Selección de trabajos destacados */}
        <div className="mt-6 grid grid-cols-3 gap-2 md:gap-3 max-w-xl">
          {FEATURED.map((item) => (
            <a key={item.label} href="#portafolio" className="group relative overflow-hidden border border-[#5A5A5A]/30">
              <img
                src={item.url}
                alt={`Tatuaje ${item.label}`}
                loading="lazy"
                className="w-full h-32 md:h-44 object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-bebas text-xs md:text-sm tracking-[0.25em] text-[#F7F5F0]">{item.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
