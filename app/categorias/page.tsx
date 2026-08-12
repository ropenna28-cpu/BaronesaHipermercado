import Link from 'next/link';
import { categories } from '@/lib/data';

export default function CategoriasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <h1 className="font-display text-4xl text-ink">Categorias</h1>
      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/categorias/${c.slug}`}
            className="group overflow-hidden rounded-2xl border border-ink/10 bg-white/50 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
          >
            <div className="aspect-[4/3] bg-sage/10 transition group-hover:bg-gold/15" />
            <div className="p-4">
              <p className="font-display text-lg text-ink">{c.name}</p>
              <p className="font-body text-xs text-ink/50">{c.productCount} produtos</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
