import Link from 'next/link';
import GrooveDivider from './GrooveDivider';

const columns = [
  {
    title: 'Institucional',
    links: [
      { href: '/quem-somos', label: 'Quem Somos' },
      { href: '/trabalhe-conosco', label: 'Trabalhe Conosco' },
      { href: '/blog', label: 'Blog' },
      { href: '/eventos', label: 'Eventos' },
    ],
  },
  {
    title: 'Ajuda',
    links: [
      { href: '/faq', label: 'Perguntas Frequentes' },
      { href: '/contato', label: 'Fale Conosco' },
      { href: '/politica/trocas', label: 'Trocas e Devoluções' },
      { href: '/politica/entregas', label: 'Entregas' },
    ],
  },
  {
    title: 'Minha Conta',
    links: [
      { href: '/login', label: 'Entrar' },
      { href: '/cadastro', label: 'Criar Conta' },
      { href: '/clube-de-ofertas', label: 'Clube de Ofertas' },
      { href: '/cartao-fidelidade', label: 'Cartão Fidelidade' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/politica/privacidade', label: 'Privacidade' },
      { href: '/politica/cookies', label: 'Cookies' },
      { href: '/politica/lgpd', label: 'LGPD' },
      { href: '/politica/termos', label: 'Termos de Uso' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <GrooveDivider tone="paper" label="Baronesa" />
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <p className="font-display text-2xl">Baronesa</p>
            <p className="mt-3 max-w-xs font-body text-sm text-paper/70">
              Hipermercado completo — do hortifruti à sua próxima trilha sonora.
              Frescor todos os dias, curadoria toda semana.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-paper/50">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-paper/80">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-paper/15 pt-6 font-body text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Baronesa Hipermercado. Todos os direitos reservados.</p>
          <p>CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
