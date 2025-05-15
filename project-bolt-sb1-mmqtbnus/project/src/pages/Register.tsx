import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { Navigate, Link } from 'react-router-dom';

import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  
  const { register, isAuthenticated } = useAuth();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    
    setError('');
    setIsRegistering(true);
    
    try {
      const success = await register(name, email, password);
      if (!success) {
        setError('Este email já está em uso. Tente outro.');
      }
    } catch (err) {
      setError('Ocorreu um erro ao criar a conta. Tente novamente.');
    } finally {
      setIsRegistering(false);
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
              Criar uma conta
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Registre-se para acessar o sistema
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
                label="Nome completo"
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                icon={<User size={18} className="text-gray-500" />}
              />
              
              <Input
                label="Email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<Mail size={18} className="text-gray-500" />}
              />
              
              <Input
                label="Senha"
                type="password"
                placeholder="Mínimo de 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<Lock size={18} className="text-gray-500" />}
              />
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  variant="primary" 
                  isLoading={isRegistering}
                  fullWidth
                >
                  Criar conta
                </Button>
              </div>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Já tem uma conta?{' '}
              <Link 
                to="/login" 
                className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
              >
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;