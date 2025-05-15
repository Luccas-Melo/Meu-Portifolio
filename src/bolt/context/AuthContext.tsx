import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simular uma chamada de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simular um usuário logado
    setUser({
      id: '1',
      name: 'John Doe',
      email: email,
    });
  };

  const register = async (name: string, email: string, password: string) => {
    // Simular uma chamada de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simular um usuário registrado
    setUser({
      id: '1',
      name: name,
      email: email,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
