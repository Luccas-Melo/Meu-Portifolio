import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { users } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved auth on mount
    const savedUser = localStorage.getItem('auth_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('auth_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate network request
    setIsLoading(true);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundUser = users.find(u => u.email === email);
        
        if (foundUser && password === '123456') { // Simple password check for demo
          setUser(foundUser);
          localStorage.setItem('auth_user', JSON.stringify(foundUser));
          setIsLoading(false);
          resolve(true);
        } else {
          setIsLoading(false);
          resolve(false);
        }
      }, 800);
    });
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate network request
    setIsLoading(true);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        // Check if user already exists
        const userExists = users.some(u => u.email === email);
        
        if (userExists) {
          setIsLoading(false);
          resolve(false);
          return;
        }
        
        // In a real app, would create a user in the backend
        const newUser: User = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email,
          role: 'employee',
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          createdAt: new Date().toISOString(),
        };
        
        setUser(newUser);
        localStorage.setItem('auth_user', JSON.stringify(newUser));
        setIsLoading(false);
        resolve(true);
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        register,
      }}
    >
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