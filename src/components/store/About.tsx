import lifestyle from "@/assets/lifestyle-1.jpg";

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-muted">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={lifestyle}
            alt="Modelo usando colar e brincos dourados"
            loading="lazy"
            width={1080}
            height={1500}
            className="w-full h-[600px] object-cover shadow-luxury"
          />
          <div className="absolute -bottom-6 -right-6 bg-secondary text-background p-8 hidden md:block">
            <p className="font-serif text-4xl text-primary">10+</p>
            <p className="text-xs tracking-luxury uppercase text-background/70 mt-1">Anos de tradição</p>
          </div>
        </div>

        <div>
          <span className="text-xs tracking-luxury uppercase text-primary mb-4 inline-block">Sobre a Aurea</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
            Joias que contam <em className="text-gold not-italic">sua história</em>
          </h2>

          <p className="text-foreground/75 leading-relaxed mb-6">
            Nascida do desejo de democratizar o luxo, a Aurea cria semi joias que unem
            elegância atemporal e qualidade superior. Cada peça é folheada a ouro 18k
            por artesãos brasileiros, garantindo durabilidade e brilho duradouro.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-10">
            Acreditamos que estilo, confiança e elegância caminham juntos. Por isso,
            criamos joias para mulheres e homens que entendem o poder transformador
            de um detalhe bem escolhido.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <p className="font-serif text-3xl text-primary mb-1">50k+</p>
              <p className="text-xs tracking-wider uppercase text-muted-foreground">Clientes</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-primary mb-1">4.9</p>
              <p className="text-xs tracking-wider uppercase text-muted-foreground">Avaliação</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-primary mb-1">1 ano</p>
              <p className="text-xs tracking-wider uppercase text-muted-foreground">Garantia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
