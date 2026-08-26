const STYLES = [
  { name: 'TRADICIONAL', img: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&h=500&fit=crop&auto=format', desc: 'Líneas gruesas, colores sólidos y motivos clásicos: dagas, rosas, anclas y corazones.' },
  { name: 'FINE LINE', img: 'https://images.unsplash.com/photo-1552627019-947c3789ffb5?w=600&h=500&fit=crop&auto=format', desc: 'Trazo fino y minimalista para piezas delicadas, detalles finos y lettering.' },
  { name: 'NEO-JAPONÉS', img: 'https://images.unsplash.com/photo-1605647533135-51b5906087d0?w=600&h=500&fit=crop&auto=format', desc: 'Iconografía japonesa reinterpretada: dragones, olas, crisantemos y koi.' },
  { name: 'BLACKWORK', img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=500&fit=crop&auto=format', desc: 'Negro sólido, geometría y alto contraste para piezas de gran impacto.' },
  { name: 'DOTWORK', img: 'https://images.unsplash.com/photo-1567071208639-716c1009517d?w=600&h=500&fit=crop&auto=format', desc: 'Sombreado construido a base de puntos, con texturas y degradados orgánicos.' },
  { name: 'TRIBAL', img: 'https://images.unsplash.com/photo-1575495407752-bfb6fb0518bf?w=600&h=500&fit=crop&auto=format', desc: 'Patrones ancestrales y formas abstractas que siguen la anatomía del cuerpo.' },
]

export default function Styles() {
  return (
    <section id="estilos" className="px-6 md:px-16 py-20 md:py-32 bg-[#F7F5F0]">
      <div className="mb-12">
        <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— Especialidades</p>
        <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#0A0A0A]">ESTILOS</h2>
        <p className="mt-4 max-w-2xl font-inter font-light text-sm md:text-base leading-relaxed text-[#0A0A0A]/70">
          Cada artista domina técnicas específicas. Encuentra el estilo que mejor encaja con la idea que tienes en mente.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {STYLES.map((style, i) => (
          <div key={style.name} className="group relative overflow-hidden border border-[#0A0A0A]/20 bg-[#0A0A0A]">
            <img
              src={style.img}
              alt={`Estilo ${style.name}`}
              loading="lazy"
              className="w-full h-64 object-cover filter grayscale contrast-125 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bebas text-lg text-[#B00000]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-bebas text-2xl tracking-[0.1em] text-[#F7F5F0]">{style.name}</h3>
              </div>
              <p className="font-inter font-light text-sm leading-relaxed text-[#5A5A5A]">{style.desc}</p>
            </div>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#B00000] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
          </div>
        ))}
      </div>
    </section>
  )
}
