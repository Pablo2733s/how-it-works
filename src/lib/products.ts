import ring1 from "@/assets/product-ring-1.jpg";
import ring2 from "@/assets/product-ring-2.jpg";
import necklace1 from "@/assets/product-necklace-1.jpg";
import necklace2 from "@/assets/product-necklace-2.jpg";
import bracelet1 from "@/assets/product-bracelet-1.jpg";
import bracelet2 from "@/assets/product-bracelet-2.jpg";
import earrings1 from "@/assets/product-earrings-1.jpg";
import earrings2 from "@/assets/product-earrings-2.jpg";

export interface Product {
  id: string;
  name: string;
  category: "Anéis" | "Colares" | "Pulseiras" | "Brincos";
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  { id: "1", name: "Anel Solitário Aurum", category: "Anéis", price: 189, oldPrice: 249, image: ring1, badge: "Novo" },
  { id: "2", name: "Colar Pérola Lumière", category: "Colares", price: 219, image: necklace1 },
  { id: "3", name: "Pulseira Riviera Dourada", category: "Pulseiras", price: 159, oldPrice: 199, image: bracelet1 },
  { id: "4", name: "Argolas Clássicas Étoile", category: "Brincos", price: 129, image: earrings1, badge: "Best Seller" },
  { id: "5", name: "Trio de Anéis Perle", category: "Anéis", price: 269, image: ring2 },
  { id: "6", name: "Colar Triplo Constelle", category: "Colares", price: 299, oldPrice: 379, image: necklace2, badge: "-20%" },
  { id: "7", name: "Bracelete Cravejado Royale", category: "Pulseiras", price: 349, image: bracelet2 },
  { id: "8", name: "Brincos Pendentes Perla", category: "Brincos", price: 199, image: earrings2 },
];

export const formatPrice = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
