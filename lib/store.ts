import { create } from 'zustand';
import { Product } from './types';

export type CartLine = {
  product: Product;
  quantity: number;
};

type CartState = {
  lines: CartLine[];
  add: (product: Product, quantity?: number) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  total: () => number;
  count: () => number;
};

export const useCart = create<CartState>((set, get) => ({
  lines: [],
  add: (product, quantity = 1) =>
    set((state) => {
      const existing = state.lines.find((l) => l.product.id === product.id);
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.product.id === product.id ? { ...l, quantity: l.quantity + quantity } : l
          ),
        };
      }
      return { lines: [...state.lines, { product, quantity }] };
    }),
  remove: (productId) =>
    set((state) => ({ lines: state.lines.filter((l) => l.product.id !== productId) })),
  setQuantity: (productId, quantity) =>
    set((state) => ({
      lines: state.lines.map((l) => (l.product.id === productId ? { ...l, quantity } : l)),
    })),
  clear: () => set({ lines: [] }),
  total: () => get().lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0),
  count: () => get().lines.reduce((sum, l) => sum + l.quantity, 0),
}));
