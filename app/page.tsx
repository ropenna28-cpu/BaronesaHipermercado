import Image from 'next/image';
import { MapPin, Phone, MessageCircle, Clock, Instagram, Facebook, Wine, Wifi, Disc3, Croissant, Soup, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Reveal from '@/components/Reveal';
import GrooveDivider from '@/components/GrooveDivider';
import VinylDisc from '@/components/VinylDisc';
import StatCounter from '@/components/StatCounter';
import WhatsappButton from '@/components/WhatsappButton';

const anos = new Date().getFullYear() - 1998;

const timeline = [
  {
    year: '1998',
    image: '/historia/mercado-1998.jpg',
    text: 'A loja original abre as portas em Pouso Alegre, cercada por pouco mais que estradas e horizonte aberto — um mercado do tamanho da confiança que a região depositou nele.',
  },
  {
    year: '2016',
    image: '/historia/mercado-2016.jpg',
    text: 'Quase duas décadas depois, o Baronesa já é referência regional: mais lojas ao redor, mais gente, e um estacionamento raramente vazio.',
  },
];

const setores = [
  { icon: Wine, title: 'Adega', desc: 'Vinhos nacionais e importados, selecionados para todos os paladares.' },
  { icon: Disc3, title: 'Loja de CDs & DVDs', desc: 'A mais completa da região — vinis, CDs, DVDs e lançamentos.' },
  { icon: Cpu, title: 'Mídia & Informática', desc: 'Grande variedade em produtos de tecnologia e informática.' },
  { icon: Wifi, title: 'Lanchonete', desc: 'Um espaço com TV e internet para tomar um café com calma.' },
  { icon: Soup, title: 'Rotisseria', desc: 'Pratos prontos e práticos para o dia a dia da sua família.' },
  { icon: Croissant, title: 'Padaria', desc: 'Pão saindo do forno a cada hora, do jeito que a casa merece.' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <WhatsappButton />

      {/* Hero */}
      <section id="top" className="relative flex min-h-[100vh] items-center overflow-hidden bg-ink text-paper">
        <div
          aria-hidden
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              'radial-gradient(circle at 78% 20%, rgba(217,164,65,0.16), transparent 45%), radial-gradient(circle at 10% 90%, rgba(110,42,61,0.22), transparent 50%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 pt-24 md:grid-cols-[1.15fr_0.85fr] md:px-8">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">
              Pouso Alegre &amp; região · Desde 1998
            </p>
            <h1 className="mt-5 max-w-2xl font-display text-5xl leading-[1.03] md:text-7xl">
              {anos} anos abastecendo a região.
            </h1>
            <p className="mt-6 max-w-md font-body text-paper/70">
              O Baronesa começou pequeno e cresceu junto com Pouso Alegre.
              Hoje é hipermercado, adega, lanchonete e a loja de discos mais
              completa da região — tudo num só endereço.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#historia"
                className="rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition hover:bg-gold-light"
              >
                Conhecer a história
              </a>
              <a
                href="#localizacao"
                className="rounded-full border border-paper/25 px-6 py-3 font-body text-sm font-semibold text-paper transition hover:bg-paper/10"
              >
                Como chegar
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <VinylDisc />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink to-transparent" />
      </section>

      {/* Stats */}
      <section className="border-y border-paper/10 bg-ink-light">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
          <StatCounter value={anos} label="Anos de história" />
          <StatCounter value={6} label="Setores especializados" />
          <StatCounter value={1} label="Loja de discos regional" />
          <StatCounter value={7} suffix="d/7" label="Atendimento por semana" />
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

          <Reveal delay={0.15}>
            <blockquote className="mt-20 border-l-2 border-gold py-2 pl-6 font-display text-2xl leading-snug text-ink/80 md:text-3xl">
              "Buscamos sempre fazer o melhor para atender com qualidade e
              conforto."
            </blockquote>
          </Reveal>
        </section>

        <GrooveDivider label="O que nos define" />

        {/* Setores */}
        <section id="diferenciais" className="py-24 md:py-32">
          <Reveal>
            <h2 className="font-display text-4xl text-ink md:text-5xl">Setores</h2>
            <p className="mt-3 max-w-lg font-body text-ink/60">
              Seis frentes especializadas, cada uma com sua própria curadoria
              — é isso que faz do Baronesa mais que um hipermercado.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {setores.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white/50 p-7 transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg hover:shadow-ink/5">
                  <s.icon size={24} className="text-wine" />
                  <h3 className="mt-4 font-display text-xl text-ink">{s.title}</h3>
                  <p className="mt-2 font-body text-sm text-ink/60">{s.desc}</p>
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
                <MapPin size={18} className="mt-0.5 text-gold" /> Pouso Alegre — MG e região
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-gold" /> (35) 3429-6802
              </div>
              <a
                href="https://wa.me/5535988620301"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold"
              >
                <MessageCircle size={18} className="mt-0.5 text-gold" /> WhatsApp: (35) 98862-0301
              </a>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 text-gold" /> Consulte os horários por loja
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
            <p>© {new Date().getFullYear()} Hipermercado Baronesa. Desde 1998.</p>
            <p>Pouso Alegre — MG</p>
          </div>
        </div>
      </section>
    </>
  );
}
