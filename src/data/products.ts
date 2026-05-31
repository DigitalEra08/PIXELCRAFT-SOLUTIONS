export interface Product {
  id: number;
  name: string;
  category: 'LED' | 'Speakers';
  price: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'NeoGlow LED Strip',
    category: 'LED',
    price: 'Rs. 7,000',
    description: 'High-quality RGB LED strip with smartphone control and music sync.',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'SonicBlast Pro Speakers',
    category: 'Speakers',
    price: 'Rs. 33,600',
    description: 'Crystal clear audio with deep bass and bluetooth 5.0 connectivity.',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Ambient LED Panel',
    category: 'LED',
    price: 'Rs. 12,600',
    description: 'Ultra-thin LED panel for modern wall decor and adjustable brightness.',
    image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'ThunderBox Bass Speaker',
    category: 'Speakers',
    price: 'Rs. 23,800',
    description: 'Portable waterproof speaker with 24-hour battery life.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'PixelLED Matrix',
    category: 'LED',
    price: 'Rs. 16,800',
    description: 'Programmable LED matrix for custom animations and pixel art.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Pulse Audio Buds',
    category: 'Speakers',
    price: 'Rs. 15,400',
    description: 'True wireless earbuds with active noise cancellation.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
  },
];
