import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Table from '../components/ui/Table';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { mockProducts } from '../data/mockData';
import { Plus, Search } from 'lucide-react';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'Nome', accessor: 'name' as const },
    {
      header: 'Preço',
      accessor: 'price' as const,
      cell: (value: number) => `R$ ${value.toFixed(2)}`,
    },
    { header: 'Categoria', accessor: 'category' as const },
    { header: 'Estoque', accessor: 'stock' as const },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Produtos
        </h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Produto
        </Button>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <div className="max-w-sm">
            <Input
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              icon={<Search className="h-4 w-4 text-gray-400" />}
            />
          </div>
        </div>

        <Table
          columns={columns}
          data={filteredProducts}
          onRowClick={(product) => console.log('Produto clicado:', product)}
        />
      </Card>
    </div>
  );
};

export default Products;
