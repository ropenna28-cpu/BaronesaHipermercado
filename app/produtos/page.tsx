import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/data';

export default function ProdutosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <h1 className="font-display text-4xl text-ink">Produtos</h1>
      <p className="mt-2 font-body text-ink/60">{products.length} produtos encontrados</p>

      <div className="mt-8 grid gap-8 md:grid-cols-[220px_1fr]">
        <aside className="space-y-6">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
              Categorias
            </p>
            <ul className="mt-3 space-y-2 font-body text-sm text-ink/70">
              {categories.map((c) => (
                <li key={c.slug}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-gold" />
                    {c.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
              Faixa de preço
            </p>
            <input type="range" className="mt-3 w-full accent-gold" />
          </div>
        </aside>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <select className="rounded-full border border-ink/15 bg-white px-4 py-2 font-body text-sm">
              <option>Relevância</option>
              <option>Menor preço</option>
              <option>Maior preço</option>
              <option>Mais avaliados</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
