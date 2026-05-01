import { Gem, Truck, ShieldCheck, CreditCard } from "lucide-react";

const items = [
  { icon: Gem, title: "Qualidade Premium", desc: "Folheado a ouro 18k com garantia de 1 ano" },
  { icon: Truck, title: "Entrega Brasil", desc: "Frete grátis para todo o território nacional" },
  { icon: ShieldCheck, title: "Compra Segura", desc: "Site protegido e dados criptografados" },
  { icon: CreditCard, title: "Parcelamento", desc: "Em até 6x sem juros no cartão" },
];

export function Benefits() {
  return (
    <section className="py-20 bg-secondary text-background">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {items.map((it) => (
            <div key={it.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-5 border border-primary/40 rounded-full group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <it.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-xl mb-2">{it.title}</h3>
              <p className="text-sm text-background/60 max-w-[200px] mx-auto leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
