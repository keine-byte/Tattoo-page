const ARTISTS = [
  {
    name: 'EZRA VOSS',
    style: 'Blackwork · Tribal',
    experience: '12 años de experiencia',
    specialty: 'Especialista en blackwork de alto contraste y geometría sagrada.',
    photo: 'https://images.unsplash.com/photo-1616879564267-a336232e3a95?w=500&h=600&fit=crop&auto=format',
    alt: 'Tattoo artist',
  },
  {
    name: 'LUNA REYES',
    style: 'Fineline · Dotwork',
    experience: '8 años de experiencia',
    specialty: 'Trazo fino de precisión y sombreado puntillista orgánico.',
    photo: 'https://images.unsplash.com/photo-1552627019-947c3789ffb5?w=500&h=600&fit=crop&auto=format',
    alt: 'Tattoo artist in action',
  },
  {
    name: 'MARCOS VAL',
    style: 'Neo-Japonés · Flash',
    experience: '10 años de experiencia',
    specialty: 'Color saturado y composición tradicional japonesa.',
    photo: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=600&fit=crop&auto=format',
    alt: 'Tattooing close-up',
  },
]

export default function Artists() {
  return (
    <section id="artistas" className="px-6 md:px-16 py-20 md:py-32">
      <div className="mb-12">
        <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— Nuestro equipo</p>
        <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#F7F5F0]">ARTISTAS</h2>
        <p className="mt-4 max-w-2xl font-inter font-light text-sm md:text-base leading-relaxed text-[#5A5A5A]">
          Conoce la experiencia, especialidad y trayectoria de cada profesional del estudio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {ARTISTS.map((artist) => (
          <div key={artist.name} className="group relative overflow-hidden border border-[#5A5A5A]/20 bg-[#0A0A0A]">
            <img
              src={artist.photo}
              alt={artist.alt}
              loading="lazy"
              className="w-full h-80 md:h-96 object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="p-5 bg-[#0A0A0A] border-t border-[#5A5A5A]/20">
              <h3 className="font-bebas text-2xl tracking-[0.12em] text-[#F7F5F0]">{artist.name}</h3>
              <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A] mt-1">{artist.style}</p>
              <p className="font-inter text-xs tracking-[0.15em] uppercase text-[#B00000] mt-3">{artist.experience}</p>
              <p className="font-inter font-light text-sm leading-relaxed text-[#5A5A5A] mt-2">{artist.specialty}</p>
            </div>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#B00000] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
          </div>
        ))}
      </div>
    </section>
  )
}
