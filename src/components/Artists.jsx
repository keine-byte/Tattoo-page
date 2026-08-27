import artistPhoto from '@/imports/tatuajes/Artist.png'

export default function Artists() {
  return (
    <section id="artistas" className="px-6 md:px-16 py-20 md:py-32">
      <div className="mb-12">
        <p className="font-inter font-light text-xs tracking-[0.3em] uppercase text-[#B00000] mb-3">— El artista</p>
        <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.05em] text-[#F7F5F0]">ARTISTA</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-5xl">
        <div className="group relative overflow-hidden border border-[#5A5A5A]/20">
          <img
            src={artistPhoto}
            alt="Luis Berrio, tatuador"
            className="w-full h-[400px] md:h-[520px] object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#B00000]" />
        </div>

        <div>
          <h3 className="font-bebas text-4xl md:text-5xl tracking-[0.08em] text-[#F7F5F0]">LUIS BERRIO</h3>
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#B00000] mt-3">Tradicional Minimalista</p>
          <div className="mt-5 w-16 h-px bg-[#B00000]" />
          <p className="font-inter font-light text-sm md:text-base leading-relaxed text-[#5A5A5A] mt-5">
            Especialista en tatuajes minimalistas que destaca por sus trazos y líneas limpias y delicadas.
          </p>
          <div className="mt-8 inline-block border-l-2 border-[#B00000] pl-4">
            <p className="font-bebas text-3xl tracking-widest text-[#F7F5F0]">7</p>
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">Años de experiencia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
