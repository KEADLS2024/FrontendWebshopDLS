import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { token, role } = useAuth();

  const isAdmin = token && role === 'Administrator';

  return isAdmin ? <>{element}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
