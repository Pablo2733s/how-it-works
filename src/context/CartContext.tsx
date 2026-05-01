import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { Product } from "@/lib/products";

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (p: Product) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, q: number) => void;
  clear: () => void;
  isOpen: boolean;
  setOpen: (b: boolean) => void;
  count: number;
  total: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  const addItem = (p: Product) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === p.id);
      if (found) return prev.map((i) => (i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i));
      return [...prev, { ...p, quantity: 1 }];
    });
    setOpen(true);
  };
  const removeItem = (id: string) => setItems((p) => p.filter((i) => i.id !== id));
  const updateQty = (id: string, q: number) =>
    setItems((p) => (q <= 0 ? p.filter((i) => i.id !== id) : p.map((i) => (i.id === id ? { ...i, quantity: q } : i))));
  const clear = () => setItems([]);

  const { count, total } = useMemo(() => {
    const c = items.reduce((a, i) => a + i.quantity, 0);
    const t = items.reduce((a, i) => a + i.quantity * i.price, 0);
    return { count: c, total: t };
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, isOpen, setOpen, count, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
