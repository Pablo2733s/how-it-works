import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

const categories = ["Todos", "Anéis", "Colares", "Pulseiras", "Brincos"] as const;

export function Products() {
  const [active, setActive] = useState<(typeof categories)[number]>("Todos");
  const filtered = active === "Todos" ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-xs tracking-luxury uppercase text-primary mb-4 inline-block">Coleção Exclusiva</span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4">
            Peças <em className="text-gold not-italic">selecionadas</em>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada joia é cuidadosamente elaborada para celebrar momentos únicos da sua vida.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-1 mb-14">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-6 py-2.5 text-xs tracking-luxury uppercase transition-all duration-300 ${
                active === c
                  ? "text-secondary border-b-2 border-primary"
                  : "text-muted-foreground border-b-2 border-transparent hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contato"
            className="inline-block text-xs tracking-luxury uppercase text-foreground border-b border-primary pb-1 hover:text-primary transition-colors"
          >
            Ver Coleção Completa
          </a>
        </div>
      </div>
    </section>
  );
}
