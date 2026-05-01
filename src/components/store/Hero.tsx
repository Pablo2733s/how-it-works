import heroImg from "@/assets/hero-jewelry.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Coleção de joias douradas em seda preta"
          className="w-full h-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-xs tracking-luxury uppercase text-primary-glow">Nova Coleção 2026</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-[1.05] mb-8">
            Elegância que <br />
            <em className="text-gold not-italic">transforma</em> <br />
            seu estilo.
          </h1>

          <p className="text-base md:text-lg text-background/75 max-w-lg mb-10 leading-relaxed font-light">
            Semi joias artesanais folheadas a ouro 18k. Peças atemporais, criadas para
            quem entende que verdadeiro luxo está nos detalhes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center px-10 py-4 bg-gold text-secondary text-sm tracking-luxury uppercase font-medium hover:shadow-gold transition-all duration-500 hover:scale-[1.02]"
            >
              Comprar Agora
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-10 py-4 border border-background/30 text-background text-sm tracking-luxury uppercase font-medium hover:border-primary hover:text-primary-glow transition-all duration-500"
            >
              Nossa História
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-luxury uppercase text-background/60">Descubra</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
