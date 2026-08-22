export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden border-t border-gris-metal/30 bg-tinta-black pt-20 pb-10 text-papel-cream"
    >
      {/* Gotas de tinta dispersas en la parte superior */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-16">
        <InkDrop className="absolute left-[12%] top-5 h-4 w-3" />
        <InkDrop className="absolute left-[45%] top-2 h-5 w-4 opacity-80" />
        <InkDrop className="absolute left-[78%] top-7 h-3 w-2.5 opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-5 text-center md:px-20">
        <p className="font-inter text-xs uppercase tracking-[0.2em] text-papel-cream">
          TINTA NEGRA · Estudio privado · Cita previa obligatoria
        </p>
      </div>
    </footer>
  )
}

function InkDrop({ className = '' }) {
  return (
    <svg viewBox="0 0 12 16" className={className} fill="#F7F5F0" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0 C6 0 12 8 12 11 C12 14.3 9.3 16 6 16 C2.7 16 0 14.3 0 11 C0 8 6 0 6 0 Z" />
    </svg>
  )
}
