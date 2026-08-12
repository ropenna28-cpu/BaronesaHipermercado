import { Product, Category, Disc } from './types';

export const categories: Category[] = [
  { slug: 'hortifruti', name: 'Hortifruti', description: 'Frutas, verduras e legumes frescos, direto do produtor.', image: '/categoria-hortifruti.jpg', productCount: 214 },
  { slug: 'padaria', name: 'Padaria', description: 'Pães, bolos e doces de produção própria, todos os dias.', image: '/categoria-padaria.jpg', productCount: 86 },
  { slug: 'acougue', name: 'Açougue', description: 'Cortes bovinos, suínos, frango e opções para churrasco.', image: '/categoria-acougue.jpg', productCount: 132 },
  { slug: 'frios', name: 'Frios & Laticínios', description: 'Queijos, embutidos e laticínios selecionados.', image: '/categoria-frios.jpg', productCount: 158 },
  { slug: 'bebidas', name: 'Bebidas', description: 'Sucos, refrigerantes, águas e isotônicos.', image: '/categoria-bebidas.jpg', productCount: 176 },
  { slug: 'adega', name: 'Adega', description: 'Vinhos, espumantes, whisky, gin e cervejas especiais.', image: '/categoria-adega.jpg', productCount: 240 },
  { slug: 'limpeza', name: 'Limpeza', description: 'Tudo para a casa impecável.', image: '/categoria-limpeza.jpg', productCount: 190 },
  { slug: 'higiene', name: 'Higiene & Beleza', description: 'Cuidado pessoal para toda a família.', image: '/categoria-higiene.jpg', productCount: 205 },
  { slug: 'pet-shop', name: 'Pet Shop', description: 'Ração, petiscos e acessórios para seu pet.', image: '/categoria-pet.jpg', productCount: 98 },
  { slug: 'bebe', name: 'Bebê', description: 'Fraldas, higiene e alimentação infantil.', image: '/categoria-bebe.jpg', productCount: 74 },
  { slug: 'congelados', name: 'Congelados', description: 'Praticidade sem abrir mão do sabor.', image: '/categoria-congelados.jpg', productCount: 112 },
  { slug: 'mercearia', name: 'Mercearia', description: 'Itens essenciais para o dia a dia.', image: '/categoria-mercearia.jpg', productCount: 320 },
  { slug: 'importados', name: 'Importados', description: 'Seleção especial de produtos de fora.', image: '/categoria-importados.jpg', productCount: 64 },
  { slug: 'utilidades', name: 'Utilidades', description: 'Casa, cozinha e organização.', image: '/categoria-utilidades.jpg', productCount: 140 },
  { slug: 'discos', name: 'CDs & DVDs', description: 'A loja de discos do Baronesa: vinis, CDs, DVDs e Blu-ray.', image: '/categoria-discos.jpg', productCount: 310 },
];

export const products: Product[] = [
  { id: 'p1', slug: 'tomate-italiano-kg', name: 'Tomate Italiano', category: 'hortifruti', brand: 'Baronesa Hortifruti', price: 7.99, oldPrice: 9.49, unit: 'kg', image: '/produto-tomate.jpg', stock: 120, rating: 4.6, reviewCount: 82, description: 'Tomates selecionados, colhidos no ponto certo de maturação.', tags: ['oferta'] },
  { id: 'p2', slug: 'pao-frances-unidade', name: 'Pão Francês', category: 'padaria', brand: 'Padaria Baronesa', price: 0.89, unit: 'unidade', image: '/produto-pao.jpg', stock: 500, rating: 4.8, reviewCount: 340, description: 'Assado a cada hora, crocante por fora e macio por dentro.' },
  { id: 'p3', slug: 'picanha-bovina-kg', name: 'Picanha Bovina', category: 'acougue', brand: 'Açougue Baronesa', price: 59.9, oldPrice: 69.9, unit: 'kg', image: '/produto-picanha.jpg', stock: 40, rating: 4.9, reviewCount: 156, description: 'Corte nobre, maturado, ideal para churrasco.', tags: ['oferta'] },
  { id: 'p4', slug: 'queijo-minas-500g', name: 'Queijo Minas Frescal', category: 'frios', brand: 'Laticínios Serra Azul', price: 18.5, unit: '500g', image: '/produto-queijo.jpg', stock: 60, rating: 4.7, reviewCount: 74, description: 'Queijo fresco, macio, produzido artesanalmente.' },
  { id: 'p5', slug: 'vinho-tinto-malbec', name: 'Vinho Tinto Malbec Reserva', category: 'adega', brand: 'Vinícola Los Andes', price: 79.9, unit: '750ml', image: '/produto-vinho.jpg', stock: 30, rating: 4.8, reviewCount: 61, description: 'Encorpado, com notas de frutas vermelhas maduras.' },
  { id: 'p6', slug: 'agua-com-gas-1l', name: 'Água com Gás', category: 'bebidas', brand: 'Fonte Cristal', price: 3.49, unit: '1L', image: '/produto-agua.jpg', stock: 300, rating: 4.5, reviewCount: 45, description: 'Água mineral gaseificada naturalmente.' },
  { id: 'p7', slug: 'racao-caes-adultos-15kg', name: 'Ração para Cães Adultos', category: 'pet-shop', brand: 'DogChef', price: 189.9, oldPrice: 219.9, unit: '15kg', image: '/produto-racao.jpg', stock: 25, rating: 4.7, reviewCount: 98, description: 'Fórmula completa para cães adultos de todas as raças.', tags: ['oferta'] },
];

export const discs: Disc[] = [
  { id: 'd1', slug: 'clube-da-esquina-vinil', title: 'Clube da Esquina', artist: 'Milton Nascimento & Lô Borges', format: 'Vinil', genre: 'MPB', decade: '1970s', price: 149.9, image: '/disco-clube-esquina.jpg' },
  { id: 'd2', slug: 'legend-cd', title: 'Legend', artist: 'Bob Marley & The Wailers', format: 'CD', genre: 'Reggae', decade: '1980s', price: 39.9, image: '/disco-legend.jpg' },
  { id: 'd3', slug: 'chico-buarque-dvd', title: 'Chico ao Vivo', artist: 'Chico Buarque', format: 'DVD', genre: 'MPB', decade: '2010s', price: 49.9, image: '/disco-chico.jpg' },
  { id: 'd4', slug: 'random-access-memories-vinil', title: 'Random Access Memories', artist: 'Daft Punk', format: 'Vinil', genre: 'Eletrônica', decade: '2010s', price: 219.9, image: '/disco-ram.jpg' },
  { id: 'd5', slug: 'elis-tom-cd', title: 'Elis & Tom', artist: 'Elis Regina & Tom Jobim', format: 'CD', genre: 'Bossa Nova', decade: '1970s', price: 34.9, image: '/disco-elis-tom.jpg' },
  { id: 'd6', slug: 'racionais-blu-ray', title: 'Nada Como um Dia Após o Outro Dia — Ao Vivo', artist: 'Racionais MC\'s', format: 'Blu-ray', genre: 'Rap', decade: '2000s', price: 89.9, image: '/disco-racionais.jpg' },
];

export const offers = products.filter((p) => p.tags?.includes('oferta'));
