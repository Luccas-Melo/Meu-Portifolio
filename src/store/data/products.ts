import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Fones de Ouvido Wireless Premium",
    price: 999.99,
    originalPrice: 1249.99,
    description: "Experimente som cristalino com nossos fones de ouvido wireless premium. Possui cancelamento de ruu00eddo e 24 horas de bateria.",
    image: "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    featured: true,
    rating: 4.8,
    stockCount: 15
  },
  {
    id: 2,
    name: "Relu00f3gio Fitness Inteligente",
    price: 749.99,
    description: "Acompanhe seus objetivos fitness com precisu00e3o. Inclui monitoramento cardu00edaco, rastreamento do sono e notificau00e7u00f5es do smartphone.",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    featured: true,
    rating: 4.6,
    stockCount: 25
  },
  {
    id: 3,
    name: "Carteira de Couro Designer",
    price: 399.99,
    originalPrice: 499.99,
    description: "Carteira de couro premium feita u00e0 mu00e3o com proteu00e7u00e3o RFID. Mu00faltiplos compartimentos para cartu00f5es e design elegante.",
    image: "https://images.pexels.com/photos/2079171/pexels-photo-2079171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "accessories",
    featured: false,
    rating: 4.7,
    stockCount: 40
  },
  {
    id: 4,
    name: "Camiseta de Algodu00e3o Orgu00e2nico",
    price: 179.99,
    description: "Camiseta de algodu00e3o orgu00e2nico sustentu00e1vel e ultra macia. Disponu00edvel em vu00e1rias cores.",
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "clothing",
    featured: false,
    rating: 4.5,
    stockCount: 50
  },
  {
    id: 5,
    name: "Cu00e2mera de Seguranu00e7a Inteligente",
    price: 649.99,
    originalPrice: 799.99,
    description: "Cu00e2mera de seguranu00e7a HD com visu00e3o noturna, detecu00e7u00e3o de movimento e alertas no smartphone.",
    image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    featured: true,
    rating: 4.4,
    stockCount: 18
  },
  {
    id: 6,
    name: "Conjunto de Vasos de Ceru00e2mica",
    price: 249.99,
    description: "Conjunto de 3 vasos de ceru00e2mica artesanais com furos para drenagem. Perfeito para plantas internas.",
    image: "https://images.pexels.com/photos/4207909/pexels-photo-4207909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "home",
    featured: false,
    rating: 4.3,
    stockCount: 22
  },
  {
    id: 7,
    name: "Vela Aromu00e1tica de Luxo",
    price: 199.99,
    description: "Vela de cera de soja feita u00e0 mu00e3o com u00f3leos essenciais premium. Durau00e7u00e3o de mais de 60 horas.",
    image: "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "home",
    featured: false,
    rating: 4.6,
    stockCount: 35
  },
  {
    id: 8,
    name: "Estau00e7u00e3o de Carregamento Wireless",
    price: 299.99,
    originalPrice: 399.99,
    description: "Estau00e7u00e3o de carregamento wireless 3 em 1 para seu celular, relu00f3gio e fones de ouvido. Design minimalista elegante.",
    image: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    featured: true,
    rating: 4.7,
    stockCount: 20
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
};
