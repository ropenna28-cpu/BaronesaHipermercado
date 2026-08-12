import ProductCard from '@/components/ProductCard';
import { offers } from '@/lib/data';

export default function OfertasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-wine">Válido até domingo</p>
      <h1 className="mt-1 font-display text-4xl text-ink">Ofertas do dia</h1>
      <p className="mt-2 font-body text-ink/60">{offers.length} produtos em promoção</p>
      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {offers.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
