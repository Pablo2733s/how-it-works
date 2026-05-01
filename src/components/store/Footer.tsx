import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-secondary text-background pt-20 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
          <div className="md:col-span-1">
            <p className="font-serif text-3xl mb-2">Aurea</p>
            <p className="text-xs tracking-luxury uppercase text-primary mb-6">Semi Joias</p>
            <p className="text-sm text-background/60 leading-relaxed mb-6">
              Elegância atemporal para celebrar a sua singularidade.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-luxury uppercase text-primary mb-5">Navegação</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#home" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Produtos</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-luxury uppercase text-primary mb-5">Políticas</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Garantia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-luxury uppercase text-primary mb-5">Contato</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-3"><Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" /> contato@aureajoias.com.br</li>
              <li className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" /> (11) 99999-9999</li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" /> São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">© 2026 Aurea Semi Joias. Todos os direitos reservados.</p>
          <p className="text-xs text-background/50">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
