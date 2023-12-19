import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definerer et interface 'AuthContextType' til at beskrive strukturen af autentifikationskonteksten.
interface AuthContextType {
  token: string | null; // JWT-token for brugeren.
  role: string | null; // Brugerens rolle.
  login: (token: string, role: string) => void; // Funktion til at logge ind.
  logout: () => void; // Funktion til at logge ud.
}

// Definerer et interface 'AuthProviderProps' for at specificere egenskaber for AuthProvider komponenten.
interface AuthProviderProps {
  children: ReactNode; // React børnekomponenter.
}

// Opretter en React-kontekst 'AuthContext' med en valgfri 'AuthContextType'.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Definerer 'AuthProvider' komponenten til at levere autentifikationskontekst til dens children.
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Initialiserer token og rolle fra localStorage.
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [role, setRole] = useState<string | null>(localStorage.getItem('role'));

  // Denne komponent styrer autentificeringskonteksten for sine underkomponenter. 
  // Den indlæser token og rolle fra localStorage og giver en login-funktion, der opdaterer disse tilstande.
  
  // 'login' funktionen til at opdatere token og rolle i både localStorage og state.
  const login = (newToken: string, newRole: string) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('role', newRole);
    setToken(newToken);
    setRole(newRole);
  };

  // 'logout' funktionen til at fjerne token og rolle fra localStorage og state.
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setToken(null);
    setRole(null);
  };

  // Returnerer AuthProvider komponenten med den tilsvarende kontekst.
  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Definerer en brugerdefineret hook 'useAuth' til at tilgå AuthContext.
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};