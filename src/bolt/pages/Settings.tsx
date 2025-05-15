import React, { useState } from 'react';
import { Save, User, Lock, Bell, Shield, Moon, Sun } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(true);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Configurações</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar de navegação */}
        <div className="lg:col-span-1">
          <Card>
            <nav className="space-y-1">
              <button
                onClick={() => handleTabChange('profile')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-md ${activeTab === 'profile' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}
              >
                <User size={18} className="mr-3" />
                <span>Perfil</span>
              </button>
              
              <button
                onClick={() => handleTabChange('security')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-md ${activeTab === 'security' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}
              >
                <Lock size={18} className="mr-3" />
                <span>Segurança</span>
              </button>
              
              <button
                onClick={() => handleTabChange('notifications')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-md ${activeTab === 'notifications' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}
              >
                <Bell size={18} className="mr-3" />
                <span>Notificações</span>
              </button>
              
              <button
                onClick={() => handleTabChange('privacy')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-md ${activeTab === 'privacy' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}
              >
                <Shield size={18} className="mr-3" />
                <span>Privacidade</span>
              </button>
            </nav>
          </Card>

          <div className="mt-6">
            <Card>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Aparência</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Modo escuro</span>
                  <button
                    onClick={toggleTheme}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${darkMode ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'}`}
                  >
                    <span className="sr-only">Alternar tema</span>
                    <span
                      className={`${darkMode ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                    {darkMode ? (
                      <Moon size={12} className="absolute right-1 text-white" />
                    ) : (
                      <Sun size={12} className="absolute left-1 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="lg:col-span-3">
          <Card>
            {activeTab === 'profile' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Informações do Perfil</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Foto de perfil
                    </label>
                    <div className="flex items-center">
                      <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400 text-xl font-semibold">
                        LS
                      </div>
                      <button className="ml-5 bg-white dark:bg-gray-800 py-2 px-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                        Alterar
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                        defaultValue="Lucas Soares"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                        defaultValue="lucas@exemplo.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Cargo
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                        defaultValue="Administrador"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Departamento
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                        defaultValue="Tecnologia"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                      defaultValue="Administrador do sistema com experiência em gestão de equipes e projetos de tecnologia."
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button>
                      <Save size={16} className="mr-2" />
                      Salvar alterações
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Segurança</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Alterar senha</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Senha atual
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nova senha
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Confirmar nova senha
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Autenticação de dois fatores</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-700 dark:text-gray-300">Adicione uma camada extra de segurança à sua conta</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Receba um código de verificação por SMS quando fizer login</p>
                      </div>
                      <button
                        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
                      >
                        <span className="sr-only">Ativar autenticação de dois fatores</span>
                        <span
                          className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button>
                      <Save size={16} className="mr-2" />
                      Salvar alterações
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Notificações</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Preferências de notificação</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-700 dark:text-gray-300">Notificações por email</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Receba atualizações por email</p>
                        </div>
                        <button
                          className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600"
                        >
                          <span className="sr-only">Ativar notificações por email</span>
                          <span
                            className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-700 dark:text-gray-300">Notificações do sistema</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Receba notificações dentro do sistema</p>
                        </div>
                        <button
                          className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600"
                        >
                          <span className="sr-only">Ativar notificações do sistema</span>
                          <span
                            className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-700 dark:text-gray-300">Notificações de marketing</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Receba atualizações sobre novos recursos</p>
                        </div>
                        <button
                          className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
                        >
                          <span className="sr-only">Ativar notificações de marketing</span>
                          <span
                            className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button>
                      <Save size={16} className="mr-2" />
                      Salvar alterações
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Privacidade</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Configurações de privacidade</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-700 dark:text-gray-300">Tornar perfil público</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Permitir que outros usuários vejam seu perfil</p>
                        </div>
                        <button
                          className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600"
                        >
                          <span className="sr-only">Tornar perfil público</span>
                          <span
                            className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-700 dark:text-gray-300">Compartilhar dados de uso</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Ajude-nos a melhorar o sistema compartilhando dados anônimos de uso</p>
                        </div>
                        <button
                          className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
                        >
                          <span className="sr-only">Compartilhar dados de uso</span>
                          <span
                            className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-700 dark:text-gray-300">Cookies de terceiros</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Permitir cookies de terceiros para melhorar a experiência</p>
                        </div>
                        <button
                          className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
                        >
                          <span className="sr-only">Permitir cookies de terceiros</span>
                          <span
                            className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Dados da conta</h3>
                    <div className="space-y-4">
                      <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-medium">
                        Exportar todos os dados
                      </button>
                      <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-medium">
                        Excluir minha conta
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button>
                      <Save size={16} className="mr-2" />
                      Salvar alterações
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
