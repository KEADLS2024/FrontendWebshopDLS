// Importerer React og nødvendige komponenter fra 'react-router-dom' og 'AuthContext'.
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Definerer et interface 'PrivateRouteProps' for at angive typen af props, som PrivateRoute komponenten modtager.
interface PrivateRouteProps {
  element: React.ReactNode; // React komponent eller element, der skal vises.
}

// Definerer en React komponent 'PrivateRoute', der bruges til at beskytte ruter, som kun bør være tilgængelige for administratorer.
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  // Bruger 'useAuth' (fra authcontext) hook for at få adgang til autentifikationsoplysninger.
  const { token, role } = useAuth();

  // Tjekker om brugeren er en administrator.
  const isAdmin = token && role === 'Administrator';

  // Returnerer det medfølgende element, hvis brugeren er en administrator, ellers omdirigeres til login-siden.
  return isAdmin ? <>{element}</> : <Navigate to="/login" />;
};

// Eksporterer 'PrivateRoute' for at kunne genbruge den i andre dele af applikationen.
export default PrivateRoute;