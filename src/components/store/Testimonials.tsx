import { Star } from "lucide-react";

const reviews = [
  {
    name: "Mariana Costa",
    city: "São Paulo, SP",
    text: "Comprei o colar Lumière e fiquei encantada. A qualidade é impecável e o atendimento foi incrível. Recebi muitos elogios!",
  },
  {
    name: "Ana Beatriz Souza",
    city: "Rio de Janeiro, RJ",
    text: "As argolas Étoile são meu acessório favorito. Uso todos os dias há meses e continuam como novas. Recomendo demais!",
  },
  {
    name: "Juliana Mendes",
    city: "Belo Horizonte, MG",
    text: "A Aurea superou minhas expectativas. Embalagem sofisticada, entrega rápida e peças que parecem joias finas de verdade.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-xs tracking-luxury uppercase text-primary mb-4 inline-block">Depoimentos</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Quem usa, <em className="text-gold not-italic">se apaixona</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card p-10 border border-border hover-lift">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-serif text-lg text-foreground/90 leading-relaxed mb-8 italic">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-secondary font-serif text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
