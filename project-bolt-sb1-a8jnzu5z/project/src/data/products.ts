import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Fones de Ouvido Wireless Premium",
    price: 999.99,
    originalPrice: 1249.99,
    description: "Experimente som cristalino com nossos fones de ouvido wireless premium. Possui cancelamento de ruído e 24 horas de bateria.",
    image: "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    featured: true,
    rating: 4.8,
    stockCount: 15
  },
  {
    id: 2,
    name: "Relógio Fitness Inteligente",
    price: 749.99,
    description: "Acompanhe seus objetivos fitness com precisão. Inclui monitoramento cardíaco, rastreamento do sono e notificações do smartphone.",
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
    description: "Carteira de couro premium feita à mão com proteção RFID. Múltiplos compartimentos para cartões e design elegante.",
    image: "https://images.pexels.com/photos/2079171/pexels-photo-2079171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "accessories",
    featured: false,
    rating: 4.7,
    stockCount: 40
  },
  {
    id: 4,
    name: "Camiseta de Algodão Orgânico",
    price: 179.99,
    description: "Camiseta de algodão orgânico sustentável e ultra macia. Disponível em várias cores.",
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "clothing",
    featured: false,
    rating: 4.5,
    stockCount: 50
  },
  {
    id: 5,
    name: "Câmera de Segurança Inteligente",
    price: 649.99,
    originalPrice: 799.99,
    description: "Câmera de segurança HD com visão noturna, detecção de movimento e alertas no smartphone.",
    image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    featured: true,
    rating: 4.4,
    stockCount: 18
  },
  {
    id: 6,
    name: "Conjunto de Vasos de Cerâmica",
    price: 249.99,
    description: "Conjunto de 3 vasos de cerâmica artesanais com furos para drenagem. Perfeito para plantas internas.",
    image: "https://images.pexels.com/photos/4207909/pexels-photo-4207909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "home",
    featured: false,
    rating: 4.3,
    stockCount: 22
  },
  {
    id: 7,
    name: "Vela Aromática de Luxo",
    price: 199.99,
    description: "Vela de cera de soja feita à mão com óleos essenciais premium. Duração de mais de 60 horas.",
    image: "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "home",
    featured: false,
    rating: 4.6,
    stockCount: 35
  },
  {
    id: 8,
    name: "Estação de Carregamento Wireless",
    price: 299.99,
    originalPrice: 399.99,
    description: "Estação de carregamento wireless 3 em 1 para seu celular, relógio e fones de ouvido. Design minimalista elegante.",
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