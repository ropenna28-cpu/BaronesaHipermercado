'use client';

import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/store';

export default function AddToCartButton({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  return (
    <button
      onClick={() => add(product)}
      className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold text-paper transition hover:bg-gold hover:text-ink"
    >
      <ShoppingCart size={16} /> Adicionar ao carrinho
    </button>
  );
}
