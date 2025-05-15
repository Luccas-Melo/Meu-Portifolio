import React from 'react';
import { ArrowUp, ArrowDown, ArrowRight, Users, Package } from 'lucide-react';
import Card from '../components/ui/Card';
import { dashboardStats, products, customers } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  
  // Sales data for line chart
  const salesData = {
    labels: dashboardStats.recentSales.map(item => {
      const date = new Date(item.date);
      return `${date.getDate()}/${date.getMonth() + 1}`;
    }).reverse(),
    datasets: [
      {
        label: 'Vendas Diárias',
        data: dashboardStats.recentSales.map(item => item.amount).reverse(),
        borderColor: '#7c3aed',
        backgroundColor: '#7c3aed',
      }
    ]
  };
  
  // Category data for bar chart
  const categoryData = {
    labels: dashboardStats.productCategories.map(item => item.category),
    datasets: [
      {
        label: 'Produtos por Categoria',
        data: dashboardStats.productCategories.map(item => item.count),
        backgroundColor: [
          '#7c3aed', '#0d9488', '#d97706', '#e11d48', '#059669'
        ],
      }
    ]
  };
  
  // Monthly data for line chart
  const monthlyData = {
    labels: dashboardStats.monthlySales.map(item => item.month),
    datasets: [
      {
        label: 'Vendas Mensais',
        data: dashboardStats.monthlySales.map(item => item.sales),
        borderColor: '#7c3aed',
        backgroundColor: '#7c3aed',
      }
    ]
  };
  
  // Get low stock products
  const lowStockProducts = products.filter(p => p.status === 'low_stock' || p.status === 'out_of_stock');
  
  // Get top customers
  const topCustomers = [...customers]
    .sort((a, b) => b.totalSpent - a.totalSpent)
    .slice(0, 5);
  
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Bem-vindo, {user?.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Aqui está um resumo do seu sistema de gestão.
        </p>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card className="relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Vendas Totais</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {formatCurrency(dashboardStats.totalSales)}
              </h2>
              <p className="flex items-center text-sm text-emerald-600 mt-1">
                <ArrowUp size={14} className="mr-1" />
                <span>12.5% do mês anterior</span>
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
              <ArrowUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-purple-50 dark:bg-purple-900/20 rounded-full opacity-50"></div>
        </Card>
        
        <Card className="relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pedidos</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {dashboardStats.totalOrders}
              </h2>
              <p className="flex items-center text-sm text-emerald-600 mt-1">
                <ArrowUp size={14} className="mr-1" />
                <span>8.2% do mês anterior</span>
              </p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
              <ArrowRight className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full opacity-50"></div>
        </Card>
        
        <Card className="relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Clientes</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {dashboardStats.totalCustomers}
              </h2>
              <p className="flex items-center text-sm text-emerald-600 mt-1">
                <ArrowUp size={14} className="mr-1" />
                <span>5.3% do mês anterior</span>
              </p>
            </div>
            <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
              <Users className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-amber-50 dark:bg-amber-900/20 rounded-full opacity-50"></div>
        </Card>
        
        <Card className="relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Produtos</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {dashboardStats.totalProducts}
              </h2>
              <p className="flex items-center text-sm text-rose-600 mt-1">
                <ArrowDown size={14} className="mr-1" />
                <span>2.1% do mês anterior</span>
              </p>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
              <Package className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-emerald-50 dark:bg-emerald-900/20 rounded-full opacity-50"></div>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Vendas dos Últimos 7 Dias">
          <LineChart data={salesData} height={300} />
        </Card>
        <Card title="Vendas Mensais">
          <LineChart data={monthlyData} height={300} />
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title="Produtos por Categoria" className="lg:col-span-1">
          <BarChart data={categoryData} height={300} />
        </Card>
        
        <Card title="Produtos com Estoque Baixo" className="lg:col-span-1">
          <div className="space-y-4">
            {lowStockProducts.length > 0 ? (
              lowStockProducts.map(product => (
                <div key={product.id} className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{product.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.status === 'out_of_stock'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}>
                      {product.status === 'out_of_stock' ? 'Sem estoque' : 'Estoque baixo'}
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{product.stock} unidades</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 py-4">
                Não há produtos com estoque baixo
              </p>
            )}
          </div>
        </Card>
        
        <Card title="Melhores Clientes" className="lg:col-span-1">
          <div className="space-y-4">
            {topCustomers.map((customer, index) => (
              <div key={customer.id} className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{customer.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{customer.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 dark:text-white">{formatCurrency(customer.totalSpent)}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{customer.totalOrders} pedidos</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;