import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartLine = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  currency: 'UGX';
  image?: string;
  quantity: number;
};

type CartState = {
  items: CartLine[];
  addItem: (item: Omit<CartLine, 'quantity'>, quantity?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(persist((set) => ({
  items: [],
  addItem: (item, quantity = 1) => set((state) => {
    const existing = state.items.find((line) => line.id === item.id);
    if (existing) return { items: state.items.map((line) => line.id === item.id ? { ...line, quantity: line.quantity + quantity } : line) };
    return { items: [...state.items, { ...item, quantity }] };
  }),
  removeItem: (id) => set((state) => ({ items: state.items.filter((line) => line.id !== id) })),
  setQuantity: (id, quantity) => set((state) => ({ items: quantity <= 0 ? state.items.filter((line) => line.id !== id) : state.items.map((line) => line.id === id ? { ...line, quantity } : line) })),
  clear: () => set({ items: [] }),
}), { name: 'amaal-cart-v1' }));
