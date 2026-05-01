import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success("Adicionado ao carrinho", { description: product.name });
  };

  return (
    <div className="group relative">
      <div className="relative overflow-hidden bg-muted aspect-square mb-5">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="product-card-image w-full h-full object-cover"
        />

        {product.badge && (
          <span className="absolute top-4 left-4 bg-secondary text-background text-[10px] tracking-luxury uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-all duration-500" />

        <button
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 bg-secondary text-background py-4 text-xs tracking-luxury uppercase font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center gap-2 hover:bg-primary"
        >
          <ShoppingBag className="w-4 h-4" />
          Adicionar
        </button>
      </div>

      <div className="text-center">
        <p className="text-[10px] tracking-luxury uppercase text-muted-foreground mb-1.5">{product.category}</p>
        <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-3">
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>
          )}
          <span className="text-base font-medium text-foreground">{formatPrice(product.price)}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">ou 6x de {formatPrice(product.price / 6)} sem juros</p>
      </div>
    </div>
  );
}
