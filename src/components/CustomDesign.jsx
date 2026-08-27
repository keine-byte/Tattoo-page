import { useState } from 'react'

export default function CustomDesign() {
  const [sent, setSent] = useState(false)

  return (
    <section id="disenos" className="px-6 md:px-16 py-20 md:py-32 bg-[#F7F5F0]">
      <div className="max-w-3xl">
        <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— Tu idea, tu diseño</p>
        <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#0A0A0A] mb-6">
          DISEÑOS<br />PERSONALIZADOS
        </h2>
        <p className="font-inter font-light text-sm md:text-base leading-relaxed text-[#0A0A0A]/70 mb-10 max-w-2xl">
          Describe tu propuesta y adjunta referencias. Nos pondremos en contacto para darle forma antes de agendar tu cita.
        </p>
      </div>

      {sent ? (
        <div className="border border-[#B00000] p-6 max-w-xl bg-[#0A0A0A]">
          <p className="font-bebas text-2xl tracking-[0.1em] text-[#F7F5F0]">IDEA ENVIADA</p>
          <p className="font-inter font-light text-sm text-[#5A5A5A] mt-2">
            Gracias. Te contactaremos en 24–48h para revisar tu propuesta.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl"
        >
          <label className="block">
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Nombre</span>
            <input
              required
              type="text"
              placeholder="Tu nombre"
              className="mt-1 w-full bg-transparent border-b border-[#0A0A0A]/40 py-3 font-inter text-[#0A0A0A] outline-none focus:border-[#B00000] placeholder-[#5A5A5A]"
            />
          </label>

          <label className="block">
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Email</span>
            <input
              required
              type="email"
              placeholder="tu@correo.com"
              className="mt-1 w-full bg-transparent border-b border-[#0A0A0A]/40 py-3 font-inter text-[#0A0A0A] outline-none focus:border-[#B00000] placeholder-[#5A5A5A]"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Estilo preferido</span>
            <select className="mt-1 w-full bg-transparent border-b border-[#0A0A0A]/40 py-3 font-inter text-[#0A0A0A] outline-none focus:border-[#B00000]">
              <option>Tradicional Minimalista</option>
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Describe tu idea</span>
            <textarea
              required
              rows={4}
              placeholder="Tamaño, zona del cuerpo, colores, significado…"
              className="mt-1 w-full bg-transparent border-b border-[#0A0A0A]/40 py-3 font-inter text-[#0A0A0A] outline-none focus:border-[#B00000] placeholder-[#5A5A5A] resize-none"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Adjunta referencias (imágenes)</span>
            <input
              type="file"
              accept="image/*"
              multiple
              className="mt-2 w-full font-inter text-sm text-[#5A5A5A] file:mr-4 file:px-4 file:py-2 file:border file:border-[#0A0A0A] file:bg-transparent file:font-inter file:text-xs file:uppercase file:tracking-[0.15em] file:text-[#0A0A0A] hover:file:bg-[#0A0A0A] hover:file:text-[#F7F5F0] file:cursor-pointer"
            />
          </label>

          <button
            type="submit"
            className="md:col-span-2 justify-self-start font-bebas text-lg tracking-[0.3em] px-10 py-4 bg-[#0A0A0A] text-[#F7F5F0] hover:bg-[#B00000] transition-colors duration-300"
          >
            ENVIAR PROPUESTA
          </button>
        </form>
      )}
    </section>
  )
}
