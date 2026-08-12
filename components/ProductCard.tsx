'use client';

import Link from 'next/link';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/store';

export default function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const discount = product.oldPrice
    ? Math.round(100 - (product.price / product.oldPrice) * 100)
    : null;

  return (
    <div className="group relative flex flex-col rounded-2xl border border-ink/10 bg-white/60 p-4 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
      {discount && (
        <span className="absolute left-4 top-4 rounded-full bg-wine px-2 py-1 font-body text-[11px] font-semibold text-paper">
          -{discount}%
        </span>
      )}
      <button
        aria-label="Favoritar"
        className="absolute right-4 top-4 text-ink/30 transition hover:text-wine"
      >
        <Heart size={18} />
      </button>

      <Link href={`/produtos/${product.slug}`} className="mt-6 flex flex-1 flex-col">
        <div className="mb-3 aspect-square w-full rounded-xl bg-ink/5" />
        <p className="font-body text-xs uppercase tracking-wide text-ink/40">{product.brand}</p>
        <h3 className="mt-1 font-display text-lg leading-snug text-ink">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1 font-body text-xs text-ink/50">
          <Star size={12} className="fill-gold text-gold" />
          {product.rating} ({product.reviewCount})
        </div>
      </Link>

      <div className="mt-3 flex items-end justify-between">
        <div>
          {product.oldPrice && (
            <p className="font-body text-xs text-ink/40 line-through">
              R$ {product.oldPrice.toFixed(2)}
            </p>
          )}
          <p className="font-display text-xl text-ink">
            R$ {product.price.toFixed(2)}
            <span className="ml-1 font-body text-xs text-ink/50">/{product.unit}</span>
          </p>
        </div>
        <button
          onClick={() => add(product)}
          aria-label={`Adicionar ${product.name} ao carrinho`}
          className="rounded-full bg-ink p-2.5 text-paper transition hover:bg-gold hover:text-ink"
        >
          <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
}
