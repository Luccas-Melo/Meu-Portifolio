import React from 'react';
import { BarChart2, PieChart, TrendingUp, Download, Users } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { dashboardStats } from '../data/mockData';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';

const Reports: React.FC = () => {
  // Monthly sales data for chart
  const monthlySalesData = {
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
  
  // Category data for chart
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
  
  // Daily sales data for chart
  const dailySalesData = {
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
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Relatórios</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Visualize relatórios e estatísticas do seu negócio
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline"
            icon={<Download size={16} />}
            onClick={() => alert('Exportar para PDF')}
          >
            Exportar PDF
          </Button>
          <Button 
            variant="outline"
            icon={<Download size={16} />}
            onClick={() => alert('Exportar para Excel')}
          >
            Exportar Excel
          </Button>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 mr-4">
              <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Vendas Totais
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {formatCurrency(dashboardStats.totalSales)}
              </p>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
              <BarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Pedidos
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {dashboardStats.totalOrders}
              </p>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 mr-4">
              <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Clientes
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {dashboardStats.totalCustomers}
              </p>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900 mr-4">
              <PieChart className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Categorias
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {dashboardStats.productCategories.length}
              </p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Relatório Mensal de Vendas">
          <div className="mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              As vendas mensais mostram um crescimento de 15% nos últimos 6 meses.
            </p>
          </div>
          <LineChart data={monthlySalesData} height={300} />
        </Card>
        
        <Card title="Produtos por Categoria">
          <div className="mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Distribuição dos produtos por cada categoria.
            </p>
          </div>
          <BarChart data={categoryData} height={300} />
        </Card>
      </div>
      
      <Card title="Vendas Diárias - Últimos 7 Dias">
        <div className="mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Análise da tendência de vendas diárias dos últimos 7 dias.
          </p>
        </div>
        <LineChart data={dailySalesData} height={300} />
      </Card>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Relatórios Disponíveis
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Relatório Financeiro
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Resumo completo das finanças
                </p>
              </div>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => alert('Gerar Relatório Financeiro')}
              >
                Gerar
              </Button>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Inventário
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Status atual do estoque
                </p>
              </div>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => alert('Gerar Relatório de Inventário')}
              >
                Gerar
              </Button>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Clientes Ativos
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Análise de clientes ativos
                </p>
              </div>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => alert('Gerar Relatório de Clientes')}
              >
                Gerar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;