export default function Studio() {
  return (
    <section id="estudio" className="relative px-6 md:px-16 py-20 md:py-32 bg-[#F7F5F0] overflow-hidden">
      {/* Noise on paper background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.06,
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1760877611905-0f885a3ce551?w=800&h=700&fit=crop&auto=format"
            alt="Tattoo and piercing shop interior with ornate signage"
            className="w-full h-[400px] md:h-[560px] object-cover filter contrast-125 grayscale"
          />
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#B00000]" />
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#0A0A0A]" />
        </div>

        <div className="text-[#0A0A0A]">
          <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-4">— Sobre nosotros</p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.04em] leading-[0.9] mb-6">
            TINTA<br />NEGRA
          </h2>

          <svg className="mb-8 w-full max-w-xs" height="6" viewBox="0 0 300 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3 Q30 1 60 4 Q90 6 120 2 Q150 0 180 3 Q210 5 240 2 Q270 0 300 3" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>

          <p className="font-inter font-light text-sm md:text-base leading-relaxed text-justify text-[#0A0A0A]/80 mb-6">
            Somos un estudio privado de tatuaje ubicado en el corazón de la ciudad. Cada pieza que sale de nuestras manos es única, irrepetible y hecha para durar toda una vida. No hacemos flash genérico; trazamos narrativas sobre la piel.
          </p>
          <p className="font-inter font-light text-sm md:text-base leading-relaxed text-justify text-[#0A0A0A]/80 mb-10">
            Nuestros artistas dominan el blackwork, el tradicional americano, el neo-japonés y el fineline de precisión quirúrgica. La cita previa es obligatoria y la discreción, garantizada.
          </p>

          <div className="flex items-center gap-6">
            <div className="border-l-2 border-[#B00000] pl-4">
              <p className="font-bebas text-3xl tracking-widest text-[#0A0A0A]">+800</p>
              <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Piezas realizadas</p>
            </div>
            <div className="border-l-2 border-[#0A0A0A] pl-4">
              <p className="font-bebas text-3xl tracking-widest text-[#0A0A0A]">12</p>
              <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
