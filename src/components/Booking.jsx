import { useState } from 'react'

const BOOKING_ITEMS = [
  {
    id: 0,
    title: 'PIEZAS PEQUEÑAS',
    size: 'hasta 5cm',
    price: 'desde €80',
    detail: 'Ideal para primeras piezas o detalles precisos. Incluye consulta previa, diseño personalizado y una sesión de retoque.',
  },
  {
    id: 1,
    title: 'PIEZAS MEDIANAS',
    size: '5–15cm',
    price: 'desde €180',
    detail: 'El rango donde el arte se despliega. Diseño exclusivo adaptado a tu anatomía. Tiempo estimado: 2–4 horas.',
  },
  {
    id: 2,
    title: 'PROYECTOS GRANDES',
    size: '+15cm / mangas',
    price: 'presupuesto',
    detail: 'Mangas, espaldas completas, proyectos a largo plazo. Requieren sesiones múltiples y planificación en conjunto.',
  },
]

export default function Booking() {
  const [open, setOpen] = useState(null)
  const [sent, setSent] = useState(false)

  return (
    <section id="reservar" className="px-6 md:px-16 py-20 md:py-32 bg-[#F7F5F0]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— Tarifas y citas</p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#0A0A0A]">AGENDAR CITA</h2>
        </div>

        {/* Tarifas */}
        <div className="space-y-0">
          {BOOKING_ITEMS.map((item, idx) => (
            <div key={item.id} className="border-t-[3px] border-[#0A0A0A] last:border-b-[3px]">
              <button
                className="w-full flex items-center justify-between px-0 py-6 text-left group"
                onClick={() => setOpen(open === item.id ? null : item.id)}
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="font-inter text-xs text-[#5A5A5A] font-light tracking-widest w-5">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-bebas text-2xl md:text-4xl tracking-[0.1em] text-[#0A0A0A]">{item.title}</span>
                  <span className="hidden md:block font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">{item.size}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-bebas text-xl md:text-2xl tracking-widest text-[#B00000]">{item.price}</span>
                  <span
                    className="font-bebas text-2xl text-[#0A0A0A] transition-transform duration-300 block"
                    style={{ transform: open === item.id ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </div>
              </button>

              <div
                className="accordion-content"
                style={{ maxHeight: open === item.id ? '200px' : '0', paddingBottom: open === item.id ? '1.5rem' : '0' }}
              >
                <p className="font-inter text-sm leading-relaxed text-[#0A0A0A]/70 pl-9 md:pl-16 pr-8">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[#0A0A0A]/20 pt-10">
          <h3 className="font-bebas text-3xl tracking-[0.1em] text-[#0A0A0A] mb-6">SOLICITAR CITA</h3>

          {sent ? (
            <div className="border border-[#B00000] p-6 bg-[#0A0A0A]">
              <p className="font-bebas text-2xl tracking-[0.1em] text-[#F7F5F0]">SOLICITUD ENVIADA</p>
              <p className="font-inter font-light text-sm text-[#5A5A5A] mt-2">Te confirmaremos fecha y hora por email.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <label className="block">
                <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Nombre</span>
                <input required type="text" placeholder="Tu nombre" className="mt-1 w-full bg-transparent border-b border-[#0A0A0A]/40 py-3 font-inter text-[#0A0A0A] outline-none focus:border-[#B00000] placeholder-[#5A5A5A]" />
              </label>
              <label className="block">
                <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Email</span>
                <input required type="email" placeholder="tu@correo.com" className="mt-1 w-full bg-transparent border-b border-[#0A0A0A]/40 py-3 font-inter text-[#0A0A0A] outline-none focus:border-[#B00000] placeholder-[#5A5A5A]" />
              </label>
              <label className="block">
                <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Fecha preferida</span>
                <input required type="date" className="mt-1 w-full bg-transparent border-b border-[#0A0A0A]/40 py-3 font-inter text-[#0A0A0A] outline-none focus:border-[#B00000]" />
              </label>
              <label className="block">
                <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Estilo</span>
                <select className="mt-1 w-full bg-transparent border-b border-[#0A0A0A]/40 py-3 font-inter text-[#0A0A0A] outline-none focus:border-[#B00000]">
                  <option>Tradicional</option>
                  <option>Fine Line</option>
                  <option>Neo-Japonés</option>
                  <option>Blackwork</option>
                  <option>Dotwork</option>
                  <option>Tribal</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Mensaje</span>
                <textarea rows={3} placeholder="Cuéntanos qué quieres tatuarte…" className="mt-1 w-full bg-transparent border-b border-[#0A0A0A]/40 py-3 font-inter text-[#0A0A0A] outline-none focus:border-[#B00000] placeholder-[#5A5A5A] resize-none" />
              </label>
              <button type="submit" className="md:col-span-2 justify-self-start font-bebas text-lg tracking-[0.3em] px-10 py-4 bg-[#0A0A0A] text-[#F7F5F0] hover:bg-[#B00000] transition-colors duration-300">
                RESERVAR CITA
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
