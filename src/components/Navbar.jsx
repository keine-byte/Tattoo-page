import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Artistas', href: '#estudio' },
  { label: 'Flash', href: '#flash' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Bloquea el scroll del body mientras el drawer está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Cierra el drawer con la tecla Escape.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-tinta-black/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-20">
        {/* Logo */}
        <a href="#inicio" className="font-bebas text-[20px] tracking-[0.15em] text-white">
          TINTA NEGRA
        </a>

        {/* Menú desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link font-inter text-sm font-semibold uppercase tracking-[0.15em] text-gris-metal transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="border border-white px-4 py-1 font-inter text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:bg-white hover:text-tinta-black"
          >
            RESERVAR
          </a>
        </nav>

        {/* Botón hamburguesa (mobile) */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="-mr-2 p-2 text-white md:hidden"
        >
          <Menu size={26} strokeWidth={1.5} />
        </button>
      </div>

      {/* Drawer lateral (mobile) */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-tinta-black/90 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Panel lateral */}
        <aside
          className={`absolute right-0 top-0 flex h-full w-3/4 max-w-xs flex-col border-l border-gris-metal/30 bg-tinta-black px-8 py-8 transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-12 flex items-center justify-between">
            <span className="font-bebas text-lg tracking-[0.15em] text-white">TINTA NEGRA</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="p-1 text-white"
            >
              <X size={26} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-bebas text-4xl tracking-[0.1em] text-papel-cream transition-colors duration-200 hover:text-sangre-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block self-start border border-white px-4 py-2 font-inter text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:bg-white hover:text-tinta-black"
            >
              RESERVAR
            </a>
          </nav>
        </aside>
      </div>
    </header>
  )
}
