import React from 'react';
import { Menu, Bell, Sun, Moon, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Seção esquerda */}
        <div className="flex items-center">
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            onClick={toggleSidebar}
          >
            <Menu size={20} />
          </button>
          <div className="ml-4 lg:ml-0">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Sistema de Gestão
            </h1>
          </div>
        </div>

        {/* Seção direita */}
        <div className="flex items-center space-x-4">
          {/* Alternar tema */}
          <button
            type="button"
            className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notificações */}
          <button
            type="button"
            className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          >
            <Bell size={20} />
          </button>

          {/* Menu do usuário */}
          <div className="relative">
            <div className="flex items-center space-x-3">
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{user?.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{user?.role}</p>
              </div>
              <div className="flex-shrink-0 h-8 w-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  <User className="h-full w-full p-1" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;