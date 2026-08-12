import Link from 'next/link';
import { discs } from '@/lib/data';
import GrooveDivider from '@/components/GrooveDivider';

const genres = Array.from(new Set(discs.map((d) => d.genre)));
const decades = Array.from(new Set(discs.map((d) => d.decade)));

export default function DiscosPage() {
  return (
    <div>
      <div className="bg-ink py-16 text-paper">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">O diferencial Baronesa</p>
          <h1 className="mt-2 font-display text-5xl">CDs, DVDs & Vinis</h1>
          <p className="mt-3 max-w-lg font-body text-paper/70">
            Um acervo curado dentro do hipermercado: lançamentos, clássicos e
            colecionáveis. Busque por artista, gênero ou década.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="mb-8 flex flex-wrap gap-3">
          <input
            type="search"
            placeholder="Buscar por artista..."
            className="rounded-full border border-ink/15 bg-white px-4 py-2 font-body text-sm"
          />
          <select className="rounded-full border border-ink/15 bg-white px-4 py-2 font-body text-sm">
            <option>Gênero</option>
            {genres.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
          <select className="rounded-full border border-ink/15 bg-white px-4 py-2 font-body text-sm">
            <option>Década</option>
            {decades.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <select className="rounded-full border border-ink/15 bg-white px-4 py-2 font-body text-sm">
            <option>Formato</option>
            <option>Vinil</option>
            <option>CD</option>
            <option>DVD</option>
            <option>Blu-ray</option>
          </select>
        </div>

        <GrooveDivider label="Acervo" />

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {discs.map((d) => (
            <Link
              key={d.id}
              href={`/discos/${d.slug}`}
              className="group rounded-2xl border border-ink/10 bg-ink p-4 text-paper transition hover:-translate-y-1"
            >
              <div className="mb-3 aspect-square rounded-disc bg-paper/10 transition group-hover:rounded-xl" />
              <p className="font-body text-[11px] uppercase tracking-wide text-gold">
                {d.format} · {d.decade}
              </p>
              <p className="mt-1 font-display text-base leading-snug">{d.title}</p>
              <p className="font-body text-xs text-paper/60">{d.artist}</p>
              <p className="mt-2 font-display text-lg">R$ {d.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
