declare module '../../context/AuthContext' {
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

  export const useAuth: () => AuthContextType;
  export const AuthProvider: React.FC<{ children: React.ReactNode }>;
}
