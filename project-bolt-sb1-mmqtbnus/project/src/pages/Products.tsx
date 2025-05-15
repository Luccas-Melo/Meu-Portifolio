import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, AlertCircle } from 'lucide-react';
import { products } from '../data/mockData';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Table from '../components/ui/Table';
import Badge from '../components/ui/Badge';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  
  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    if (status === 'in_stock') {
      return <Badge variant="success">Em estoque</Badge>;
    } else if (status === 'low_stock') {
      return <Badge variant="warning">Estoque baixo</Badge>;
    } else {
      return <Badge variant="danger">Sem estoque</Badge>;
    }
  };
  
  // Table columns
  const columns = [
    {
      header: 'Produto',
      accessor: (product: typeof products[0]) => (
        <div>
          <div className="font-medium text-gray-900 dark:text-white">{product.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{product.category}</div>
        </div>
      )
    },
    {
      header: 'Preço',
      accessor: (product: typeof products[0]) => (
        <div className="font-medium">{formatCurrency(product.price)}</div>
      )
    },
    {
      header: 'Estoque',
      accessor: (product: typeof products[0]) => (
        <div className="font-medium">{product.stock}</div>
      )
    },
    {
      header: 'Status',
      accessor: (product: typeof products[0]) => (
        <StatusBadge status={product.status} />
      )
    },
    {
      header: 'Atualizado',
      accessor: (product: typeof products[0]) => {
        const date = new Date(product.lastUpdated);
        return (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {date.toLocaleDateString('pt-BR')}
          </div>
        );
      }
    },
    {
      header: 'Ações',
      accessor: (product: typeof products[0]) => (
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            icon={<Edit size={14} />}
            aria-label="Editar"
            onClick={() => alert(`Editar produto: ${product.name}`)}
          >
            Editar
          </Button>
          <Button 
            variant="danger" 
            size="sm"
            icon={<Trash2 size={14} />}
            aria-label="Excluir"
            onClick={() => alert(`Excluir produto: ${product.name}`)}
          >
            Excluir
          </Button>
        </div>
      ),
      className: 'text-right'
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Produtos</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gerencie sua lista de produtos
          </p>
        </div>
        <Button 
          variant="primary"
          icon={<Plus size={16} />}
          onClick={() => alert('Adicionar novo produto')}
        >
          Adicionar Produto
        </Button>
      </div>
      
      <Card>
        <div className="mb-6">
          <Input
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search size={18} className="text-gray-500" />}
          />
        </div>
        
        <Table
          columns={columns}
          data={filteredProducts}
          keyField="id"
          emptyMessage={
            <div className="flex flex-col items-center justify-center py-8">
              <AlertCircle size={48} className="text-gray-400 mb-3" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">Nenhum produto encontrado</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Tente uma busca diferente ou adicione um novo produto
              </p>
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default Products;