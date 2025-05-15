import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Table from '../components/ui/Table';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { mockCustomers } from '../data/mockData';
import { Plus, Search } from 'lucide-react';

const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'Nome', accessor: 'name' as const },
    { header: 'Email', accessor: 'email' as const },
    { header: 'Telefone', accessor: 'phone' as const },
    {
      header: 'Total em Compras',
      accessor: 'totalPurchases' as const,
      cell: (value: number) => `R$ ${value.toFixed(2)}`,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Clientes
        </h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Cliente
        </Button>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <div className="max-w-sm">
            <Input
              placeholder="Buscar clientes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              icon={<Search className="h-4 w-4 text-gray-400" />}
            />
          </div>
        </div>

        <Table
          columns={columns}
          data={filteredCustomers}
          onRowClick={(customer) => console.log('Cliente clicado:', customer)}
        />
      </Card>
    </div>
  );
};

export default Customers;
