import type { Metadata } from 'next';
import { Fraunces, Work_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT', 'WONK'],
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-worksans',
});

export const metadata: Metadata = {
  title: 'Hipermercado Baronesa — Pouso Alegre, MG desde 1998',
  description:
    'Hipermercado Baronesa: adega, lanchonete, mídia & informática, rotisseria, padaria e a loja de discos mais completa da região, em Pouso Alegre e região.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
