export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  oldPrice?: number;
  unit: string;
  image: string;
  stock: number;
  rating: number;
  reviewCount: number;
  description: string;
  tags?: string[];
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
};

export type Disc = {
  id: string;
  slug: string;
  title: string;
  artist: string;
  format: 'Vinil' | 'CD' | 'DVD' | 'Blu-ray';
  genre: string;
  decade: string;
  price: number;
  image: string;
};
