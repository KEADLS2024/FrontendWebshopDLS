// PrivateRoute.tsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getUserRoleFromToken } from '../services/jwtUtils'; // Import the function

interface PrivateRouteProps {
  element: React.ReactNode;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
  const token = localStorage.getItem('token'); // Retrieve the token from local storage

  // Provide a default value (empty string) if 'token' is null
  const userRole = token ? getUserRoleFromToken(token) : '';

  // Check if the user has the 'Administrator' role
  const isAdmin = userRole === 'Administrator';

  return (
    <Route
      path={path}
      element={isAdmin ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
