import { notFound } from 'next/navigation';
import { categories, products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  const items = products.filter((p) => p.category === category.slug);

  return (
    <div>
      <div className="bg-ink py-14 text-paper">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">Categoria</p>
          <h1 className="mt-2 font-display text-4xl">{category.name}</h1>
          <p className="mt-2 max-w-xl font-body text-paper/70">{category.description}</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        {items.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="font-body text-ink/60">
            Novos produtos desta categoria chegam em breve. Volte para conferir.
          </p>
        )}
      </div>
    </div>
  );
}
