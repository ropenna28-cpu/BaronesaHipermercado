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
  title: 'Baronesa — Desde 1998',
  description:
    'Baronesa: quase três décadas servindo a região com frescor, variedade e uma paixão por música que virou tradição.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
