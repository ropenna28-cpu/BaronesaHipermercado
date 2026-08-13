'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#historia', label: 'História' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#localizacao', label: 'Localização' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-paper/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4 md:px-8">
        <a href="#top" className="font-display text-xl tracking-tight text-paper">
          Baronesa
        </a>
        <nav className="ml-auto hidden gap-8 font-body text-sm text-paper/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="ml-auto text-paper md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t border-paper/10 px-4 py-4 font-body text-sm text-paper/80 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
