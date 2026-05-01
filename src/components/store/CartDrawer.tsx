import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export function CartDrawer() {
  const { items, isOpen, setOpen, removeItem, updateQty, total, clear } = useCart();

  const checkout = () => {
    toast.success("Pedido enviado!", { description: "Em instantes você será redirecionado para o pagamento." });
    clear();
    setOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl text-left">Sua Sacola</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 text-muted-foreground">
            <ShoppingBag className="w-12 h-12 text-primary/50" />
            <p>Sua sacola está vazia</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4 space-y-4">
              {items.map((it) => (
                <div key={it.id} className="flex gap-4 pb-4 border-b border-border">
                  <img src={it.image} alt={it.name} className="w-20 h-20 object-cover bg-muted" />
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base truncate">{it.name}</p>
                    <p className="text-xs text-muted-foreground mb-2">{it.category}</p>
                    <p className="text-sm font-medium">{formatPrice(it.price)}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border">
                        <button onClick={() => updateQty(it.id, it.quantity - 1)} className="px-2 py-1 hover:bg-muted">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{it.quantity}</span>
                        <button onClick={() => updateQty(it.id, it.quantity + 1)} className="px-2 py-1 hover:bg-muted">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button onClick={() => removeItem(it.id)} className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm tracking-luxury uppercase text-muted-foreground">Total</span>
                <span className="font-serif text-2xl">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-muted-foreground text-right">ou 6x de {formatPrice(total / 6)} sem juros</p>
              <button
                onClick={checkout}
                className="w-full bg-secondary text-background py-4 text-xs tracking-luxury uppercase hover:bg-primary transition-colors"
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
