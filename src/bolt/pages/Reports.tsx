import React from 'react';
import Card from '../components/ui/Card';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import Select from '../components/ui/Select';
import { mockSalesData, mockCategoryData } from '../data/mockData';

const Reports: React.FC = () => {
  const periodOptions = [
    { value: '7d', label: 'Últimos 7 dias' },
    { value: '30d', label: 'Últimos 30 dias' },
    { value: '90d', label: 'Últimos 90 dias' },
    { value: '12m', label: 'Últimos 12 meses' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Relatórios
        </h1>
        <div className="w-48">
          <Select
            options={periodOptions}
            value="30d"
            onChange={(value) => console.log('Período selecionado:', value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
            Vendas por Período
          </h3>
          <LineChart data={mockSalesData} title="" />
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
            Vendas por Categoria
          </h3>
          <BarChart data={mockCategoryData} title="" />
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
            Top Produtos
          </h3>
          <div className="space-y-4">
            {mockCategoryData.labels.map((label, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">{label}</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  R$ {mockCategoryData.datasets[0].data[index].toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
            Métricas Principais
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ticket Médio
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                R$ 350,00
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Taxa de Conversão
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                3.2%
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Novos Clientes
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                127
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Satisfação
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                4.8/5
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
