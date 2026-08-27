const HOURS = [
  { day: 'Martes – Viernes', time: '8:00 – 12:00 - 14:00 - 19:00' },
  { day: 'Sábado - Domingo', time: '8:00 – 12:00 - 14:00 - 19:00' },
]

export default function Contact() {
  return (
    <section id="contacto" className="relative px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1781625007769-f7292a6ead63?w=1440&h=600&fit=crop&auto=format')`,
          filter: 'brightness(0.08) contrast(1.5)',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contacto */}
        <div>
          <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-4">— Contacto</p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.04em] leading-[0.9] text-[#F7F5F0] mb-6">
            CUÉNTANOS<br />TU IDEA
          </h2>
          <p className="font-inter font-light text-sm tracking-[0.1em] text-[#5A5A5A] mb-8 max-w-md">
            Cada tatuaje comienza con una conversación. Escríbenos y cuéntanos qué llevas en mente — o simplemente trae una referencia. Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-0 border-b border-[#5A5A5A]/40 max-w-md">
            <input
              type="email"
              placeholder="tu@correo.com"
              className="flex-1 bg-transparent border-0 outline-none font-inter text-sm text-[#F7F5F0] placeholder-[#5A5A5A] py-3 pr-4"
            />
            <button className="font-bebas text-sm tracking-[0.3em] text-[#B00000] hover:text-[#F7F5F0] transition-colors duration-200 py-3 whitespace-nowrap">
              ENVIAR →
            </button>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/tinta_negra_tattoo_13?igsh=ZmprYWQyOGs3aGIy' },
              { label: 'WhatsApp', href: 'https://wa.me/573002441004' },
              { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100078020472130' },
              { label: 'Email', href: 'mailto:diegoberrio1630@gmail.com' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-bebas text-sm tracking-[0.3em] text-[#F7F5F0] border border-[#5A5A5A]/40 px-4 py-2 hover:border-[#B00000] hover:text-[#B00000] transition-colors duration-200"
              >
                {s.label.toUpperCase()} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Ubicación y horarios */}
        <div className="lg:pt-16">
          <div className="border border-[#5A5A5A]/30 p-6 mb-4">
            <p className="font-bebas text-lg tracking-[0.2em] text-[#B00000] mb-2">UBICACIÓN</p>
            <p className="font-inter font-light text-sm leading-relaxed text-[#F7F5F0]">
              Barrio El Porvenir, Sincelejo - Sucre<br />100001 Sincelejo, Colombia<br />CRA 37 # 13-94
            </p>
          </div>

          <div className="border border-[#5A5A5A]/30 p-6">
            <p className="font-bebas text-lg tracking-[0.2em] text-[#B00000] mb-3">HORARIOS</p>
            <ul className="space-y-2">
              {HOURS.map((h) => (
                <li key={h.day} className="flex items-baseline justify-between gap-4 border-b border-[#5A5A5A]/20 pb-2 last:border-0 last:pb-0">
                  <span className="font-inter text-sm text-[#5A5A5A]">{h.day}</span>
                  <span className="font-inter text-sm text-[#F7F5F0]">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
