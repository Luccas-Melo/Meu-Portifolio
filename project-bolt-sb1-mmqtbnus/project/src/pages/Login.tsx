import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';
import { Navigate, Link } from 'react-router-dom';

import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    
    setError('');
    setIsLoggingIn(true);
    
    try {
      const success = await login(email, password);
      if (!success) {
        setError('Email ou senha inválidos. Tente novamente.');
      }
    } catch (err) {
      setError('Ocorreu um erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoggingIn(false);
    }
  };
  
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-8 md:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              Sistema de Gestão
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Faça login para acessar o sistema
            </p>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<User size={18} className="text-gray-500" />}
              />
              
              <Input
                label="Senha"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<Lock size={18} className="text-gray-500" />}
              />
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  variant="primary" 
                  isLoading={isLoggingIn}
                  fullWidth
                >
                  Entrar
                </Button>
              </div>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Não tem uma conta?{' '}
              <Link 
                to="/register" 
                className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
              >
                Registre-se
              </Link>
            </p>
          </div>
          
          <div className="mt-8 bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>Credenciais de demonstração:</strong>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <strong>Admin:</strong> admin@example.com / 123456<br />
              <strong>Gerente:</strong> manager@example.com / 123456<br />
              <strong>Funcionário:</strong> employee@example.com / 123456
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;