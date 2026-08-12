'use client';

import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/store';

export default function CarrinhoPage() {
  const { lines, setQuantity, remove, total } = useCart();

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center md:px-8">
        <h1 className="font-display text-3xl text-ink">Seu carrinho está vazio</h1>
        <p className="mt-2 font-body text-ink/60">Que tal começar pelas ofertas do dia?</p>
        <Link
          href="/ofertas"
          className="mt-6 inline-block rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold text-paper hover:bg-gold hover:text-ink"
        >
          Ver ofertas
        </Link>
      </div>
    );
  }

  const frete = 9.9;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-8">
      <h1 className="font-display text-4xl text-ink">Seu carrinho</h1>

      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_320px]">
        <ul className="space-y-4">
          {lines.map((line) => (
            <li
              key={line.product.id}
              className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white/50 p-4"
            >
              <div className="h-20 w-20 shrink-0 rounded-xl bg-ink/5" />
              <div className="flex-1">
                <p className="font-display text-lg text-ink">{line.product.name}</p>
                <p className="font-body text-sm text-ink/50">
                  R$ {line.product.price.toFixed(2)} /{line.product.unit}
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-ink/15 px-2 py-1">
                <button
                  onClick={() => setQuantity(line.product.id, Math.max(1, line.quantity - 1))}
                  aria-label="Diminuir quantidade"
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center font-body text-sm">{line.quantity}</span>
                <button
                  onClick={() => setQuantity(line.product.id, line.quantity + 1)}
                  aria-label="Aumentar quantidade"
                >
                  <Plus size={14} />
                </button>
              </div>
              <p className="w-24 text-right font-display text-lg text-ink">
                R$ {(line.product.price * line.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => remove(line.product.id)}
                aria-label="Remover item"
                className="text-ink/30 hover:text-wine"
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>

        <div className="h-fit rounded-2xl border border-ink/10 bg-white/50 p-6">
          <p className="font-display text-xl text-ink">Resumo do pedido</p>
          <div className="mt-4 space-y-2 font-body text-sm text-ink/70">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>R$ {total().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Frete</span>
              <span>R$ {frete.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex gap-2">
              <input
                placeholder="Cupom de desconto"
                className="flex-1 rounded-full border border-ink/15 px-3 py-2 text-sm"
              />
              <button className="rounded-full border border-ink/15 px-4 text-sm">Aplicar</button>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-ink/10 pt-4 font-display text-lg text-ink">
            <span>Total</span>
            <span>R$ {(total() + frete).toFixed(2)}</span>
          </div>
          <Link
            href="/checkout"
            className="mt-6 block rounded-full bg-ink py-3 text-center font-body text-sm font-semibold text-paper hover:bg-gold hover:text-ink"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}
