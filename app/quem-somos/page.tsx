import GrooveDivider from '@/components/GrooveDivider';

const timeline = [
  { year: '1987', text: 'Abertura da primeira loja Baronesa, um mercado de bairro.' },
  { year: '2001', text: 'Inauguração da primeira unidade em formato hipermercado.' },
  { year: '2014', text: 'Criação da loja de discos, o diferencial que nos define até hoje.' },
  { year: '2026', text: 'Lançamento da nova experiência de compra online.' },
];

export default function QuemSomosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-8">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-wine">Nossa história</p>
      <h1 className="mt-2 font-display text-4xl text-ink">Quem Somos</h1>
      <p className="mt-4 font-body leading-relaxed text-ink/70">
        O Baronesa nasceu como um mercado de bairro e cresceu junto com a
        comunidade que serve. Hoje somos um hipermercado completo — e também
        um ponto de encontro para quem ama música.
      </p>

      <GrooveDivider label="Linha do tempo" />

      <ol className="mt-8 space-y-6">
        {timeline.map((t) => (
          <li key={t.year} className="flex gap-6">
            <span className="w-16 shrink-0 font-display text-xl text-gold">{t.year}</span>
            <p className="font-body text-ink/70">{t.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-8 sm:grid-cols-3">
        <div>
          <h2 className="font-display text-xl text-ink">Missão</h2>
          <p className="mt-2 font-body text-sm text-ink/60">
            Levar frescor, variedade e cultura para o dia a dia de cada família.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Visão</h2>
          <p className="mt-2 font-body text-sm text-ink/60">
            Ser a rede preferida por unir o essencial ao que encanta.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Valores</h2>
          <p className="mt-2 font-body text-sm text-ink/60">
            Qualidade, comunidade, curadoria e respeito ao cliente.
          </p>
        </div>
      </div>
    </div>
  );
}
