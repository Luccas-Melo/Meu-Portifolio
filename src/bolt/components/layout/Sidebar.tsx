import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Users,
  UserCircle,
  FileBarChart,
  Settings,
  Terminal,
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/bolt', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/bolt/products', icon: <Package size={20} />, label: 'Produtos' },
    { path: '/bolt/customers', icon: <Users size={20} />, label: 'Clientes' },
    { path: '/bolt/employees', icon: <UserCircle size={20} />, label: 'Funcionários' },
    { path: '/bolt/reports', icon: <FileBarChart size={20} />, label: 'Relatórios' },
    { path: '/bolt/settings', icon: <Settings size={20} />, label: 'Configurações' },
  ];

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-col flex-1 min-h-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-indigo-600 dark:bg-indigo-800">
          <Terminal className="h-8 w-8 text-white" />
          <span className="ml-2 text-xl font-bold text-white">Bolt</span>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                isActive(item.path)
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
