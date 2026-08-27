import t7 from '@/imports/tatuajes/7.webp'

const STYLE = {
  name: 'TRADICIONAL MINIMALISTA',
  img: t7,
  desc: 'Líneas limpias y trazo depurado que fusionan la base del tatuaje tradicional con una estética sobria, elegante y minimalista. Piezas atemporales, sin ruido, hechas para durar.',
}

export default function Styles() {
  return (
    <section id="estilos" className="px-6 md:px-16 py-20 md:py-32 bg-[#F7F5F0]">
      <div className="mb-12">
        <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— Especialidad</p>
        <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#0A0A0A]">ESTILO</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center max-w-5xl">
        <div className="group relative overflow-hidden border border-[#0A0A0A]/20">
          <img
            src={STYLE.img}
            alt={`Estilo ${STYLE.name}`}
            loading="lazy"
            className="w-full h-72 md:h-[480px] object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#B00000]" />
        </div>

        <div>
          <span className="font-bebas text-lg text-[#B00000]">01</span>
          <h3 className="font-bebas text-4xl md:text-5xl tracking-[0.08em] leading-none text-[#0A0A0A] mt-2">
            TRADICIONAL<br />MINIMALISTA
          </h3>
          <div className="mt-5 w-16 h-px bg-[#B00000]" />
          <p className="mt-5 font-inter font-light text-sm md:text-base leading-relaxed text-[#0A0A0A]/70">
            {STYLE.desc}
          </p>
        </div>
      </div>
    </section>
  )
}
