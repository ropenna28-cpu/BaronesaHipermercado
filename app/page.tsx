import Image from 'next/image';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Reveal from '@/components/Reveal';
import GrooveDivider from '@/components/GrooveDivider';

const timeline = [
  {
    year: '1998',
    image: '/historia/mercado-1998.jpg',
    text: 'A loja original abre as portas na região, cercada por pouco mais que estradas e horizonte aberto — um mercado do tamanho da confiança que a vizinhança depositou nele.',
  },
  {
    year: '2016',
    image: '/historia/mercado-2016.jpg',
    text: 'Quase duas décadas depois, o Baronesa já é uma referência de bairro: mais lojas ao redor, mais gente, e um estacionamento raramente vazio.',
  },
];

const diferenciais = [
  { title: 'Hortifruti', desc: 'Frutas, legumes e verduras selecionados todos os dias, direto do produtor.' },
  { title: 'Açougue', desc: 'Cortes nobres e o atendimento de quem entende de carne há décadas.' },
  { title: 'Padaria', desc: 'Pão saindo do forno a cada hora, do jeito que a casa merece.' },
  { title: 'Adega', desc: 'Vinhos, espumantes e rótulos que vão além do óbvio.' },
  { title: 'Loja de Discos', desc: 'Vinis, CDs e DVDs — o canto do Baronesa que não é sobre compras, é sobre paixão.' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink text-paper">
        <div
          aria-hidden
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              'radial-gradient(circle at 78% 20%, rgba(217,164,65,0.18), transparent 45%), radial-gradient(circle at 15% 85%, rgba(110,42,61,0.25), transparent 50%)',
          }}
        />
        <div
          aria-hidden
          className="absolute right-[-140px] top-[-140px] h-[520px] w-[520px] rounded-disc border border-paper/10"
        />
        <div
          aria-hidden
          className="absolute right-[-60px] top-[-60px] h-[300px] w-[300px] rounded-disc border border-paper/10"
        />

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-40 md:px-8">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">Desde 1998</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            Quase três décadas abastecendo a região.
          </h1>
          <p className="mt-6 max-w-lg font-body text-paper/70">
            O Baronesa começou pequeno e cresceu junto com o bairro. Esta é a
            história de um mercado que virou ponto de encontro — e, no meio do
            caminho, também virou loja de discos.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* História */}
        <section id="historia" className="py-24 md:py-32">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-wine">Nossa jornada</p>
            <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">História</h2>
          </Reveal>

          <div className="mt-16 space-y-24">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={0.1}>
                <div
                  className={`grid items-center gap-8 md:grid-cols-2 ${
                    i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink/10 shadow-xl shadow-ink/10">
                    <Image
                      src={t.image}
                      alt={`Vista aérea do Baronesa em ${t.year}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div>
                    <span className="font-display text-6xl text-gold">{t.year}</span>
                    <p className="mt-4 max-w-md font-body leading-relaxed text-ink/70">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <GrooveDivider label="O que nos define" />

        {/* Diferenciais */}
        <section id="diferenciais" className="py-24 md:py-32">
          <Reveal>
            <h2 className="font-display text-4xl text-ink md:text-5xl">Diferenciais</h2>
            <p className="mt-3 max-w-lg font-body text-ink/60">
              Cinco departamentos que carregam a identidade do Baronesa — cada
              um com sua própria curadoria.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white/50 p-7 transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg hover:shadow-ink/5">
                  <span className="font-display text-3xl text-wine">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink">{d.title}</h3>
                  <p className="mt-2 font-body text-sm text-ink/60">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <GrooveDivider label="Registros" />

        {/* Galeria */}
        <section id="galeria" className="py-24 md:py-32">
          <Reveal>
            <h2 className="font-display text-4xl text-ink md:text-5xl">Galeria</h2>
            <p className="mt-3 max-w-lg font-body text-ink/60">
              Duas décadas vistas de cima — o mesmo endereço, transformado.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {timeline.map((t) => (
              <Reveal key={t.year}>
                <div className="group relative aspect-video overflow-hidden rounded-3xl">
                  <Image
                    src={t.image}
                    alt={`Vista aérea do Baronesa em ${t.year}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 font-display text-2xl text-paper">
                    {t.year}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* Localização / Contato */}
      <section id="localizacao" className="bg-ink py-24 text-paper md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">Venha nos visitar</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Localização</h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <Reveal className="space-y-5 font-body text-sm text-paper/75">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-gold" /> Av. Principal, 1200 — Centro
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-gold" /> (11) 4000-0000
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 text-gold" /> Seg–sáb, 7h às 22h · Dom, 8h às 20h
              </div>
              <div className="flex gap-4 pt-2">
                <a href="#" aria-label="Instagram" className="text-paper/60 hover:text-gold">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="Facebook" className="text-paper/60 hover:text-gold">
                  <Facebook size={20} />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="aspect-video rounded-3xl border border-paper/10 bg-paper/5" />
            </Reveal>
          </div>

          <div className="mt-20 flex flex-col gap-2 border-t border-paper/10 pt-6 font-body text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Baronesa. Desde 1998.</p>
            <p>CNPJ 00.000.000/0001-00</p>
          </div>
        </div>
      </section>
    </>
  );
}
