export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  rating: number;
  stockCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = 'all' | 'electronics' | 'clothing' | 'home' | 'accessories';