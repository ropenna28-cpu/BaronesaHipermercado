import Link from 'next/link';
import { ArrowRight, Truck, ShieldCheck, Wifi, Disc3 } from 'lucide-react';
import GrooveDivider from '@/components/GrooveDivider';
import ProductCard from '@/components/ProductCard';
import { categories, offers, products, discs } from '@/lib/data';

const services = [
  { icon: Truck, title: 'Entrega em casa', desc: 'Receba seu pedido em até 2 horas.' },
  { icon: ShieldCheck, title: 'Compra garantida', desc: 'Troca fácil em até 7 dias.' },
  { icon: Wifi, title: 'Wi-Fi grátis', desc: 'Em todas as nossas lojas físicas.' },
  { icon: Disc3, title: 'Loja de discos', desc: 'Vinis, CDs e DVDs selecionados.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — the thesis: a hypermarket with a record store's soul */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-disc border border-paper/10 bg-grooves" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-disc border-8 border-paper/5" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-gold">
              Ofertas desta semana
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
              Do hortifruti à sua próxima trilha sonora.
            </h1>
            <p className="mt-5 max-w-md font-body text-paper/70">
              O Baronesa é hipermercado completo — e também a maior loja de discos
              da região. Frescor todos os dias, curadoria musical toda semana.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/ofertas"
                className="rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition hover:bg-gold-light"
              >
                Ver ofertas do dia
              </Link>
              <Link
                href="/discos"
                className="rounded-full border border-paper/30 px-6 py-3 font-body text-sm font-semibold text-paper transition hover:bg-paper/10"
              >
                Explorar a loja de discos
              </Link>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Categorias */}
        <section className="py-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-3xl text-ink">Categorias</h2>
            <Link href="/categorias" className="flex items-center gap-1 font-body text-sm text-ink/60 hover:text-ink">
              Ver todas <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {categories.slice(0, 10).map((c) => (
              <Link
                key={c.slug}
                href={`/categorias/${c.slug}`}
                className="group rounded-2xl border border-ink/10 bg-white/50 p-5 text-center transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
              >
                <div className="mx-auto mb-3 h-14 w-14 rounded-disc bg-sage/15 transition group-hover:bg-gold/25" />
                <p className="font-body text-sm font-medium text-ink">{c.name}</p>
              </Link>
            ))}
          </div>
        </section>

        <GrooveDivider label="Ofertas do dia" />

        {/* Ofertas do dia */}
        <section className="py-12">
          <h2 className="mb-6 font-display text-3xl text-ink">Ofertas do dia</h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {offers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Destaques da semana / mais vendidos */}
        <section className="py-12">
          <h2 className="mb-6 font-display text-3xl text-ink">Mais vendidos da semana</h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <GrooveDivider label="Diferencial Baronesa" />

        {/* Loja de discos — o diferencial */}
        <section className="py-12">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-wine">Só aqui</p>
              <h2 className="font-display text-3xl text-ink">A loja de discos do Baronesa</h2>
            </div>
            <Link href="/discos" className="flex items-center gap-1 font-body text-sm text-ink/60 hover:text-ink">
              Ver acervo completo <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {discs.map((d) => (
              <Link
                key={d.id}
                href={`/discos/${d.slug}`}
                className="group rounded-2xl border border-ink/10 bg-ink p-4 text-paper transition hover:-translate-y-1"
              >
                <div className="mb-3 aspect-square rounded-disc bg-paper/10 transition group-hover:rounded-xl" />
                <p className="font-body text-[11px] uppercase tracking-wide text-gold">{d.format} · {d.decade}</p>
                <p className="mt-1 font-display text-sm leading-snug">{d.title}</p>
                <p className="font-body text-xs text-paper/60">{d.artist}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Serviços */}
        <section className="py-16">
          <h2 className="mb-6 font-display text-3xl text-ink">Serviços</h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-ink/10 bg-white/50 p-6">
                <s.icon size={22} className="text-wine" />
                <p className="mt-3 font-display text-lg text-ink">{s.title}</p>
                <p className="font-body text-sm text-ink/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mb-20 rounded-3xl bg-sage/10 px-6 py-12 text-center md:px-16">
          <h2 className="font-display text-3xl text-ink">Não perca nenhuma oferta</h2>
          <p className="mx-auto mt-2 max-w-md font-body text-sm text-ink/60">
            Cadastre seu e-mail e receba promoções, receitas e lançamentos da loja de discos.
          </p>
          <form className="mx-auto mt-6 flex max-w-md gap-2">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 rounded-full border border-ink/15 bg-white px-4 py-3 font-body text-sm outline-none"
            />
            <button className="rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold text-paper hover:bg-gold hover:text-ink">
              Assinar
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
