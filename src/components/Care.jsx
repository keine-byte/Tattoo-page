const HYGIENE = [
  { title: 'Material estéril', desc: 'Agujas y materiales de un solo uso, abiertos frente a cada cliente.' },
  { title: 'Esterilización', desc: 'Instrumental esterilizado en autoclave clase B tras cada uso.' },
  { title: 'Barreras de protección', desc: 'Guantes, campos y cubiertas desechables en todas las sesiones.' },
  { title: 'Desinfección', desc: 'Superficies y zona de trabajo desinfectadas entre cliente y cliente.' },
  { title: 'Certificación', desc: 'Licencia sanitaria y protocolos de bioseguridad actualizados.' },
]

const CARE_BEFORE = [
  'Descansa bien e hidrátate el día anterior.',
  'Evita el alcohol y los anticoagulantes 24h antes.',
  'Llega con la piel limpia y sin quemaduras ni irritaciones.',
  'Come algo antes de tu sesión para evitar bajadas de tensión.',
]

const CARE_AFTER = [
  'Mantén el vendaje las primeras horas indicadas por tu artista.',
  'Lava con jabón neutro y seca sin frotar.',
  'Aplica la crema cicatrizante recomendada en capa fina.',
  'No expongas el tatuaje al sol ni lo sumerjas en agua durante 2–3 semanas.',
  'No te rasques: la costra se cae sola.',
]

export default function Care() {
  return (
    <>
      {/* HIGIENE Y SEGURIDAD */}
      <section id="higiene" className="px-6 md:px-16 py-20 md:py-32">
        <div className="mb-12">
          <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— Bioseguridad</p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#F7F5F0]">HIGIENE Y SEGURIDAD</h2>
          <p className="mt-4 max-w-2xl font-inter font-light text-sm md:text-base leading-relaxed text-[#5A5A5A]">
            Tu salud es lo primero. Estos son los protocolos que cumplimos en cada sesión.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {HYGIENE.map((item, i) => (
            <div key={item.title} className="border border-[#5A5A5A]/30 p-6 group hover:border-[#B00000] transition-colors duration-300">
              <p className="font-bebas text-lg text-[#B00000] mb-3">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="font-bebas text-2xl tracking-[0.1em] text-[#F7F5F0] mb-2">{item.title}</h3>
              <p className="font-inter font-light text-sm leading-relaxed text-[#5A5A5A]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CUIDADOS DEL TATUAJE */}
      <section id="cuidados" className="px-6 md:px-16 py-20 md:py-32 bg-[#F7F5F0]">
        <div className="mb-12">
          <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— Cicatrización</p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#0A0A0A]">CUIDADOS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-t-[3px] border-[#0A0A0A] pt-6">
            <h3 className="font-bebas text-3xl tracking-[0.1em] text-[#0A0A0A] mb-4">ANTES DE TU CITA</h3>
            <ul className="space-y-3">
              {CARE_BEFORE.map((c) => (
                <li key={c} className="flex gap-3 font-inter font-light text-sm md:text-base text-[#0A0A0A]/80">
                  <span className="text-[#B00000] font-bebas">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-[3px] border-[#0A0A0A] pt-6">
            <h3 className="font-bebas text-3xl tracking-[0.1em] text-[#0A0A0A] mb-4">DESPUÉS DEL TATUAJE</h3>
            <ul className="space-y-3">
              {CARE_AFTER.map((c) => (
                <li key={c} className="flex gap-3 font-inter font-light text-sm md:text-base text-[#0A0A0A]/80">
                  <span className="text-[#B00000] font-bebas">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
