import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Table from '../components/ui/Table';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { mockEmployees } from '../data/mockData';
import { Plus, Search } from 'lucide-react';

const Employees: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = mockEmployees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'Nome', accessor: 'name' as const },
    { header: 'Cargo', accessor: 'role' as const },
    { header: 'Departamento', accessor: 'department' as const },
    {
      header: 'Data de Início',
      accessor: 'startDate' as const,
      cell: (value: string) => new Date(value).toLocaleDateString('pt-BR'),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Funcionários
        </h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Funcionário
        </Button>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <div className="max-w-sm">
            <Input
              placeholder="Buscar funcionários..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              icon={<Search className="h-4 w-4 text-gray-400" />}
            />
          </div>
        </div>

        <Table
          columns={columns}
          data={filteredEmployees}
          onRowClick={(employee) => console.log('Funcionário clicado:', employee)}
        />
      </Card>
    </div>
  );
};

export default Employees;
