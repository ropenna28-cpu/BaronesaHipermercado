import type { Metadata } from 'next';
import { Fraunces, Work_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  title: 'Baronesa — Hipermercado',
  description:
    'Baronesa: hipermercado completo com hortifruti, açougue, adega, padaria e a maior loja de CDs, DVDs e vinis da região.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
