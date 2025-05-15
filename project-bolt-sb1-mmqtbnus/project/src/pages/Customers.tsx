import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, AlertCircle } from 'lucide-react';
import { customers } from '../data/mockData';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Table from '../components/ui/Table';
import Badge from '../components/ui/Badge';

const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter customers based on search term
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.toLowerCase().includes(searchTerm.toLowerCase())
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
    if (status === 'active') {
      return <Badge variant="success">Ativo</Badge>;
    } else {
      return <Badge variant="danger">Inativo</Badge>;
    }
  };
  
  // Table columns
  const columns = [
    {
      header: 'Cliente',
      accessor: (customer: typeof customers[0]) => (
        <div>
          <div className="font-medium text-gray-900 dark:text-white">{customer.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{customer.email}</div>
        </div>
      )
    },
    {
      header: 'Telefone',
      accessor: 'phone'
    },
    {
      header: 'Status',
      accessor: (customer: typeof customers[0]) => (
        <StatusBadge status={customer.status} />
      )
    },
    {
      header: 'Pedidos',
      accessor: 'totalOrders'
    },
    {
      header: 'Total Gasto',
      accessor: (customer: typeof customers[0]) => (
        <div className="font-medium">
          {formatCurrency(customer.totalSpent)}
        </div>
      )
    },
    {
      header: 'Cadastro',
      accessor: (customer: typeof customers[0]) => {
        const date = new Date(customer.createdAt);
        return (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {date.toLocaleDateString('pt-BR')}
          </div>
        );
      }
    },
    {
      header: 'Ações',
      accessor: (customer: typeof customers[0]) => (
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            icon={<Edit size={14} />}
            aria-label="Editar"
            onClick={() => alert(`Editar cliente: ${customer.name}`)}
          >
            Editar
          </Button>
          <Button 
            variant="danger" 
            size="sm"
            icon={<Trash2 size={14} />}
            aria-label="Excluir"
            onClick={() => alert(`Excluir cliente: ${customer.name}`)}
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Clientes</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gerencie sua lista de clientes
          </p>
        </div>
        <Button 
          variant="primary"
          icon={<Plus size={16} />}
          onClick={() => alert('Adicionar novo cliente')}
        >
          Adicionar Cliente
        </Button>
      </div>
      
      <Card>
        <div className="mb-6">
          <Input
            placeholder="Buscar clientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search size={18} className="text-gray-500" />}
          />
        </div>
        
        <Table
          columns={columns}
          data={filteredCustomers}
          keyField="id"
          emptyMessage={
            <div className="flex flex-col items-center justify-center py-8">
              <AlertCircle size={48} className="text-gray-400 mb-3" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">Nenhum cliente encontrado</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Tente uma busca diferente ou adicione um novo cliente
              </p>
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default Customers;