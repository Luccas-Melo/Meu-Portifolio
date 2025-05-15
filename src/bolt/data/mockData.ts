import { Product, Customer, Employee } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Laptop Pro X',
    price: 4999.99,
    category: 'Eletrônicos',
    stock: 15,
  },
  {
    id: '2',
    name: 'Smartphone Y',
    price: 2499.99,
    category: 'Eletrônicos',
    stock: 30,
  },
  {
    id: '3',
    name: 'Monitor 4K',
    price: 1999.99,
    category: 'Eletrônicos',
    stock: 20,
  },
];

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
    phone: '(11) 99999-9999',
    totalPurchases: 3500.00,
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@email.com',
    phone: '(11) 88888-8888',
    totalPurchases: 2800.00,
  },
  {
    id: '3',
    name: 'Pedro Oliveira',
    email: 'pedro@email.com',
    phone: '(11) 77777-7777',
    totalPurchases: 1500.00,
  },
];

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Ana Costa',
    role: 'Vendedor',
    department: 'Vendas',
    startDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Carlos Souza',
    role: 'Gerente',
    department: 'Administrativo',
    startDate: '2022-06-01',
  },
  {
    id: '3',
    name: 'Beatriz Lima',
    role: 'Atendente',
    department: 'Suporte',
    startDate: '2023-03-10',
  },
];

export const mockSalesData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Vendas 2024',
      data: [12000, 19000, 15000, 25000, 22000, 30000],
      borderColor: '#4F46E5',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      borderWidth: 2,
    },
  ],
};

export const mockCategoryData = {
  labels: ['Eletrônicos', 'Roupas', 'Acessórios', 'Livros', 'Casa'],
  datasets: [
    {
      label: 'Vendas por Categoria',
      data: [35000, 25000, 15000, 10000, 20000],
      backgroundColor: [
        'rgba(79, 70, 229, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
      ],
      borderColor: [
        '#4F46E5',
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#EF4444',
      ],
      borderWidth: 1,
    },
  ],
};
