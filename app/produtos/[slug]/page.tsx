import { notFound } from 'next/navigation';
import { Star, Heart, Share2, Truck } from 'lucide-react';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import AddToCartButton from '@/components/AddToCartButton';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="aspect-square rounded-3xl bg-ink/5" />

        <div>
          <p className="font-body text-xs uppercase tracking-wide text-ink/40">{product.brand}</p>
          <h1 className="mt-1 font-display text-3xl text-ink">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2 font-body text-sm text-ink/60">
            <Star size={14} className="fill-gold text-gold" />
            {product.rating} · {product.reviewCount} avaliações
          </div>

          <div className="mt-6">
            {product.oldPrice && (
              <p className="font-body text-sm text-ink/40 line-through">
                R$ {product.oldPrice.toFixed(2)}
              </p>
            )}
            <p className="font-display text-4xl text-ink">
              R$ {product.price.toFixed(2)}
              <span className="ml-2 font-body text-sm text-ink/50">/{product.unit}</span>
            </p>
            {product.oldPrice && (
              <p className="mt-1 font-body text-sm text-sage">
                Economia de R$ {(product.oldPrice - product.price).toFixed(2)}
              </p>
            )}
          </div>

          <p className="mt-6 font-body text-sm leading-relaxed text-ink/70">{product.description}</p>

          <div className="mt-4 font-body text-sm text-ink/60">
            {product.stock > 0 ? `${product.stock} unidades em estoque` : 'Fora de estoque'}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <AddToCartButton product={product} />
            <button className="flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-body text-sm">
              <Heart size={16} /> Favoritar
            </button>
            <button className="flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-body text-sm">
              <Share2 size={16} /> Compartilhar
            </button>
          </div>

          <div className="mt-6 flex items-center gap-2 font-body text-sm text-ink/60">
            <Truck size={16} /> Entrega estimada em 1–2 horas para sua região
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-ink">Informações nutricionais</h2>
          <p className="mt-2 font-body text-sm text-ink/60">
            Informações nutricionais completas disponíveis na embalagem do produto.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-ink">Perguntas e respostas</h2>
          <p className="mt-2 font-body text-sm text-ink/60">
            Ainda não há perguntas sobre este produto. Seja o primeiro a perguntar.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-display text-2xl text-ink">Produtos relacionados</h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
