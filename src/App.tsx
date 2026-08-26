import { useState } from 'react'
import logoImg from '@/imports/image.png'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Styles from './components/Styles'
import Studio from './components/Studio'
import Artists from './components/Artists'
import CustomDesign from './components/CustomDesign'
import Care from './components/Care'
import Booking from './components/Booking'
import Contact from './components/Contact'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Estilos', href: '#estilos' },
  { label: 'Artistas', href: '#artistas' },
  { label: 'Cuidados', href: '#cuidados' },
  { label: 'Contacto', href: '#contacto' },
]

export default function App() {
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
              key={link.label}
              href={link.href}
              className="nav-link text-xs font-inter tracking-[0.2em] uppercase text-[#5A5A5A] hover:text-[#F7F5F0] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservar"
            className="text-xs font-inter tracking-[0.2em] uppercase text-[#F7F5F0] border border-[#F7F5F0] px-4 py-1 hover:bg-[#F7F5F0] hover:text-[#0A0A0A] transition-colors duration-200"
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
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-bebas text-5xl tracking-widest text-[#F7F5F0] hover:text-[#B00000] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservar"
            onClick={() => setMenuOpen(false)}
            className="mt-4 font-bebas text-3xl tracking-widest px-8 py-3 border-2 border-[#B00000] text-[#B00000]"
          >
            RESERVAR
          </a>
        </div>
      )}

      {/* ─── SECCIONES ───────────────────────────────────────── */}
      <main>
        <Hero />
        <Portfolio />
        <Styles />
        <Studio />
        <Artists />
        <CustomDesign />
        <Care />
        <Booking />
        <Contact />
      </main>

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
