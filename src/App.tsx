import { useState } from 'react'
import logoImg from '@/imports/image.png'

const NAV_LINKS = ['Inicio', 'Artistas', 'Galería', 'Contacto']

const GALLERY_ITEMS = [
  {
    url: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&h=750&fit=crop&auto=format',
    label: 'TRADICIONAL',
    alt: 'Tattoo artist working with black ink needle',
    tall: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1552627019-947c3789ffb5?w=600&h=450&fit=crop&auto=format',
    label: 'FINELINE',
    alt: 'Grayscale close up of tattoo session',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1605647533135-51b5906087d0?w=600&h=450&fit=crop&auto=format',
    label: 'NEO-JAPONÉS',
    alt: 'Man with heavy black tattoos on arm',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=750&fit=crop&auto=format',
    label: 'BLACKWORK',
    alt: 'Close-up of tattooing on arm',
    tall: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1567071208639-716c1009517d?w=600&h=450&fit=crop&auto=format',
    label: 'DOTWORK',
    alt: 'Flower tattoo in progress on leg',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1575495407752-bfb6fb0518bf?w=600&h=450&fit=crop&auto=format',
    label: 'TRIBAL',
    alt: 'Man with full body black tattoos lying in plants',
    tall: false,
  },
]

const BOOKING_ITEMS = [
  {
    id: 0,
    title: 'PIEZAS PEQUEÑAS',
    size: 'hasta 5cm',
    price: 'desde €80',
    detail:
      'Ideal para primeras piezas o detalles precisos. Incluye consulta previa, diseño personalizado y una sesión de retoque.',
  },
  {
    id: 1,
    title: 'PIEZAS MEDIANAS',
    size: '5–15cm',
    price: 'desde €180',
    detail:
      'El rango donde el arte se despliega. Diseño exclusivo adaptado a tu anatomía. Tiempo estimado: 2–4 horas.',
  },
  {
    id: 2,
    title: 'PROYECTOS GRANDES',
    size: '+15cm / mangas',
    price: 'presupuesto',
    detail:
      'Manoslevas, espaldas completas, proyectos a largo plazo. Requieren sesiones múltiples y planificación en conjunto.',
  },
]

export default function App() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F7F5F0] overflow-x-hidden">

      {/* ─── NAV ─────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#5A5A5A]/20">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Tinta Negra Tattoo logo" className="h-9 w-9 object-contain" />
          <span className="font-bebas text-xl tracking-widest text-[#F7F5F0]">TINTA NEGRA</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="nav-link text-xs font-inter font-600 tracking-[0.2em] uppercase text-[#5A5A5A] hover:text-[#F7F5F0] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#booking"
            className="text-xs font-inter font-600 tracking-[0.2em] uppercase px-5 py-2.5 border border-[#F7F5F0] text-[#F7F5F0] hover:bg-[#F7F5F0] hover:text-[#0A0A0A] transition-all duration-200"
          >
            RESERVAR
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#F7F5F0] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-[#F7F5F0] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#F7F5F0] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-start justify-center px-12 gap-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-bebas text-5xl tracking-widest text-[#F7F5F0] hover:text-[#B00000] transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-4 font-bebas text-3xl tracking-widest px-8 py-3 border-2 border-[#B00000] text-[#B00000]"
          >
            RESERVAR
          </a>
        </div>
      )}

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 md:pb-32 torn-edge overflow-hidden">
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
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(176,0,0,0.18) 0%, transparent 70%)' }} />

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
            {/* TINTA */}
            <h1 className="font-bebas text-[clamp(5rem,18vw,18rem)] leading-[0.88] tracking-[0.04em] text-[#F7F5F0] select-none">
              TINTA
            </h1>

            {/* NEGRa — with quirky kerning on final 'a' */}
            <div className="flex items-baseline leading-[0.88] -mt-2 md:-mt-4">
              <span className="font-bebas text-[clamp(5rem,18vw,18rem)] text-[#F7F5F0] tracking-[0.04em]">NEGR</span>
              <span
                className="font-bebas text-[clamp(3.5rem,12vw,12rem)] text-[#B00000] ml-2 md:ml-4"
                style={{ marginBottom: '-0.05em' }}
              >
                a
              </span>
            </div>

            {/* TATTOO — shifted right */}
            <div className="self-end -mt-1 md:-mt-2 mr-0 md:mr-0">
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
              href="#galeria"
              className="font-bebas text-lg md:text-xl tracking-[0.3em] px-10 py-4 bg-[#F7F5F0] text-[#0A0A0A] hover:bg-[#B00000] hover:text-[#F7F5F0] transition-colors duration-300"
            >
              VER FLASH
            </a>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────────────────── */}
      <section id="galeria" className="px-6 md:px-16 py-20 md:py-32">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">
              — Trabajo reciente
            </p>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#F7F5F0]">GALERÍA</h2>
          </div>
          <div className="hidden md:block w-48 border-t border-dashed border-[#5A5A5A]/40" style={{ marginBottom: '0.6rem' }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`gallery-item relative overflow-hidden border border-[#5A5A5A]/30 cursor-pointer group ${item.tall ? 'row-span-2' : ''}`}
              style={{ minHeight: item.tall ? '400px' : '220px' }}
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                style={{ display: 'block' }}
              />
              <div className="gallery-overlay absolute inset-0 bg-[#0A0A0A]/80 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <span className="font-bebas text-xl md:text-2xl tracking-[0.3em] text-[#F7F5F0] border border-[#F7F5F0]/40 px-4 py-2">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EL ESTUDIO ───────────────────────────────────────── */}
      <section className="relative px-6 md:px-16 py-20 md:py-32 bg-[#F7F5F0] overflow-hidden">
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
          {/* Left: studio photo */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1760877611905-0f885a3ce551?w=800&h=700&fit=crop&auto=format"
              alt="Tattoo and piercing shop interior with ornate signage"
              className="w-full h-[400px] md:h-[560px] object-cover filter contrast-125 grayscale"
            />
            {/* Corner accent */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#B00000]" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#0A0A0A]" />
          </div>

          {/* Right: copy */}
          <div className="text-[#0A0A0A]">
            <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-4">
              — Sobre nosotros
            </p>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.04em] leading-[0.9] mb-6">
              TINTA<br />NEGRA
            </h2>

            {/* Decorative brush-stroke SVG line */}
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

      {/* ─── ARTISTAS ─────────────────────────────────────────── */}
      <section id="artistas" className="px-6 md:px-16 py-20 md:py-32">
        <div className="mb-12">
          <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— Nuestro equipo</p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#F7F5F0]">ARTISTAS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { name: 'EZRA VOSS', style: 'Blackwork · Tribal', photo: 'https://images.unsplash.com/photo-1616879564267-a336232e3a95?w=500&h=600&fit=crop&auto=format', alt: 'Tattoo artist' },
            { name: 'LUNA REYES', style: 'Fineline · Dotwork', photo: 'https://images.unsplash.com/photo-1552627019-947c3789ffb5?w=500&h=600&fit=crop&auto=format', alt: 'Tattoo artist in action' },
            { name: 'MARCOS VAL', style: 'Neo-Japonés · Flash', photo: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=600&fit=crop&auto=format', alt: 'Tattooing close-up' },
          ].map((artist) => (
            <div key={artist.name} className="group relative overflow-hidden border border-[#5A5A5A]/20">
              <img
                src={artist.photo}
                alt={artist.alt}
                className="w-full h-80 md:h-96 object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-5 bg-[#0A0A0A] border-t border-[#5A5A5A]/20">
                <h3 className="font-bebas text-2xl tracking-[0.12em] text-[#F7F5F0]">{artist.name}</h3>
                <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A] mt-1">{artist.style}</p>
              </div>
              {/* red accent top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#B00000] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── BOOKING / PRECIOS ────────────────────────────────── */}
      <section id="booking" className="px-6 md:px-16 py-20 md:py-32 bg-[#F7F5F0]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— Tarifas</p>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#0A0A0A]">RESERVAR</h2>
          </div>

          <div className="space-y-0">
            {BOOKING_ITEMS.map((item, idx) => (
              <div key={item.id} className="border-t-[3px] border-[#0A0A0A] last:border-b-[3px]">
                <button
                  className="w-full flex items-center justify-between px-0 py-6 text-left group"
                  onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-inter text-xs text-[#5A5A5A] font-light tracking-widest w-5">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-bebas text-2xl md:text-4xl tracking-[0.1em] text-[#0A0A0A]">
                      {item.title}
                    </span>
                    <span className="hidden md:block font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">
                      {item.size}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-bebas text-xl md:text-2xl tracking-widest text-[#B00000]">{item.price}</span>
                    <span className="font-bebas text-2xl text-[#0A0A0A] transition-transform duration-300 block"
                      style={{ transform: openAccordion === item.id ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </div>
                </button>

                <div
                  className="accordion-content"
                  style={{ maxHeight: openAccordion === item.id ? '200px' : '0', paddingBottom: openAccordion === item.id ? '1.5rem' : '0' }}
                >
                  <p className="font-inter text-sm leading-relaxed text-[#0A0A0A]/70 pl-9 md:pl-16 pr-8">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="font-bebas text-lg tracking-[0.3em] px-10 py-4 bg-[#0A0A0A] text-[#F7F5F0] hover:bg-[#B00000] transition-colors duration-300 text-center"
            >
              SOLICITAR CITA
            </a>
            <a
              href="#"
              className="font-bebas text-lg tracking-[0.3em] px-10 py-4 border-[3px] border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F7F5F0] transition-colors duration-300 text-center"
            >
              VER PORTFOLIO
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT STRIP ────────────────────────────────────── */}
      <section className="relative px-6 md:px-16 py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1781625007769-f7292a6ead63?w=1440&h=600&fit=crop&auto=format')`,
            filter: 'brightness(0.08) contrast(1.5)',
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-4">— Contacto</p>
          <h2 className="font-bebas text-5xl md:text-8xl tracking-[0.04em] leading-[0.9] text-[#F7F5F0] mb-8">
            CUÉNTANOS<br />TU IDEA
          </h2>
          <p className="font-inter font-light text-sm tracking-[0.1em] text-[#5A5A5A] mb-10 max-w-md">
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
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="px-6 md:px-16 py-8 border-t border-[#5A5A5A]/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">
            TINTA NEGRA · Estudio privado · Cita previa obligatoria
          </p>
          <div className="flex items-center gap-2">
            <span className="font-inter text-xs tracking-widest text-[#5A5A5A]/50 uppercase">©2025</span>
            <span className="w-4 border-t border-[#B00000]" />
            <span className="font-inter text-xs tracking-widest text-[#5A5A5A]/50 uppercase">Todos los derechos reservados</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
