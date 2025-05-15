import React from 'react';
import Card from '../components/ui/Card';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import { mockSalesData, mockCategoryData } from '../data/mockData';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Vendas Totais',
      value: 'R$ 123.456,00',
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      change: '+12%',
    },
    {
      title: 'Produtos',
      value: '65',
      icon: <ShoppingBag className="h-6 w-6 text-blue-500" />,
      change: '+5',
    },
    {
      title: 'Clientes',
      value: '1.234',
      icon: <Users className="h-6 w-6 text-purple-500" />,
      change: '+8%',
    },
    {
      title: 'Taxa de Conversão',
      value: '3.2%',
      icon: <TrendingUp className="h-6 w-6 text-indigo-500" />,
      change: '+0.5%',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              {stat.icon}
            </div>
            <div className="mt-4">
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {stat.change}
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {' vs mês anterior'}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
            Vendas Mensais
          </h3>
          <LineChart data={mockSalesData} title="" />
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
            Vendas por Categoria
          </h3>
          <BarChart data={mockCategoryData} title="" />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
