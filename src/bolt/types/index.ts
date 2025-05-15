export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalPurchases: number;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  startDate: string;
}
