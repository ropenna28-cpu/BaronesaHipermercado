'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/store';

const links = [
  { href: '/produtos', label: 'Produtos' },
  { href: '/ofertas', label: 'Ofertas' },
  { href: '/categorias', label: 'Categorias' },
  { href: '/discos', label: 'CDs & DVDs' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const count = useCart((s) => s.count());

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-8">
        <button
          className="md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-ink">
          Baronesa
        </Link>

        <nav className="ml-6 hidden gap-6 font-body text-sm text-ink/80 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-3 py-1.5 md:flex md:w-72">
          <Search size={16} className="text-ink/50" />
          <input
            type="search"
            placeholder="Buscar produtos, marcas, discos..."
            className="w-full bg-transparent font-body text-sm outline-none placeholder:text-ink/40"
          />
        </div>

        <Link href="/login" aria-label="Minha conta" className="ml-2 text-ink/80 hover:text-ink">
          <User size={20} />
        </Link>
        <Link href="/carrinho" aria-label="Carrinho" className="relative text-ink/80 hover:text-ink">
          <ShoppingCart size={20} />
          {count > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-disc bg-gold text-[10px] font-semibold text-ink">
              {count}
            </span>
          )}
        </Link>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-ink/10 px-4 py-4 font-body text-sm md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
