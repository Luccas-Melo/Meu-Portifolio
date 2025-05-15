import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, AlertCircle } from 'lucide-react';
import { employees } from '../data/mockData';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Table from '../components/ui/Table';
import Badge from '../components/ui/Badge';

const Employees: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
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
      header: 'Funcionário',
      accessor: (employee: typeof employees[0]) => (
        <div>
          <div className="font-medium text-gray-900 dark:text-white">{employee.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{employee.email}</div>
        </div>
      )
    },
    {
      header: 'Departamento',
      accessor: 'department'
    },
    {
      header: 'Cargo',
      accessor: 'position'
    },
    {
      header: 'Status',
      accessor: (employee: typeof employees[0]) => (
        <StatusBadge status={employee.status} />
      )
    },
    {
      header: 'Data Contratação',
      accessor: (employee: typeof employees[0]) => {
        const date = new Date(employee.hireDate);
        return (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {date.toLocaleDateString('pt-BR')}
          </div>
        );
      }
    },
    {
      header: 'Ações',
      accessor: (employee: typeof employees[0]) => (
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            icon={<Edit size={14} />}
            aria-label="Editar"
            onClick={() => alert(`Editar funcionário: ${employee.name}`)}
          >
            Editar
          </Button>
          <Button 
            variant="danger" 
            size="sm"
            icon={<Trash2 size={14} />}
            aria-label="Excluir"
            onClick={() => alert(`Excluir funcionário: ${employee.name}`)}
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Funcionários</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gerencie sua equipe de funcionários
          </p>
        </div>
        <Button 
          variant="primary"
          icon={<Plus size={16} />}
          onClick={() => alert('Adicionar novo funcionário')}
        >
          Adicionar Funcionário
        </Button>
      </div>
      
      <Card>
        <div className="mb-6">
          <Input
            placeholder="Buscar funcionários..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search size={18} className="text-gray-500" />}
          />
        </div>
        
        <Table
          columns={columns}
          data={filteredEmployees}
          keyField="id"
          emptyMessage={
            <div className="flex flex-col items-center justify-center py-8">
              <AlertCircle size={48} className="text-gray-400 mb-3" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">Nenhum funcionário encontrado</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Tente uma busca diferente ou adicione um novo funcionário
              </p>
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default Employees;