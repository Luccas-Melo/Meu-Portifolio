import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  UserCircle, 
  BarChart, 
  Settings,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  isMobileOpen: boolean;
  closeMobileMenu: () => void;
}

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, closeMobileMenu }) => {
  const location = useLocation();
  const { logout } = useAuth();

  const navItems: NavItem[] = [
    {
      label: 'Painel',
      icon: <LayoutDashboard size={20} />,
      path: '/'
    },
    {
      label: 'Produtos',
      icon: <Package size={20} />,
      path: '/products'
    },
    {
      label: 'Clientes',
      icon: <Users size={20} />,
      path: '/customers'
    },
    {
      label: 'Funcionários',
      icon: <UserCircle size={20} />,
      path: '/employees'
    },
    {
      label: 'Relatórios',
      icon: <BarChart size={20} />,
      path: '/reports'
    },
    {
      label: 'Configurações',
      icon: <Settings size={20} />,
      path: '/settings'
    }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Overlay para mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Barra lateral */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-purple-900 text-white transform transition-transform duration-300 ease-in-out 
          lg:translate-x-0 lg:static lg:inset-auto lg:z-auto
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-4 border-b border-purple-800">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <LayoutDashboard size={24} className="text-purple-300" />
              <span className="text-xl font-bold">Sistema de Gestão</span>
            </Link>
          </div>

          {/* Navegação */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center space-x-3 px-3 py-2 rounded-md transition-colors
                      ${isActive(item.path) 
                        ? 'bg-purple-800 text-white' 
                        : 'text-purple-200 hover:bg-purple-800 hover:text-white'}
                    `}
                    onClick={closeMobileMenu}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Seção do usuário */}
          <div className="p-4 border-t border-purple-800">
            <button
              onClick={() => {
                logout();
                closeMobileMenu();
              }}
              className="flex items-center space-x-3 w-full px-3 py-2 text-purple-200 rounded-md hover:bg-purple-800 hover:text-white transition-colors"
            >
              <LogOut size={20} />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;