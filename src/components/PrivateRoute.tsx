import React, { ComponentType, FC } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

/**
 * Props for the PrivateRoute component.
 * @param {ComponentType<any>} component - The component to render when the route is matched.
 * @param {string[]} roles - An array of roles allowed to access the route.
 * @param {string} path - The path to the route.
 * @param {boolean} exact - Whether the route should be matched exactly.
 */
interface PrivateRouteProps {
  component: ComponentType<any>; // We should consider replacing 'any' with a more specific type for your component props
  roles: string[];
  path: string;
  exact?: boolean;
}

/**
 * A component that wraps the Route component from react-router-dom to create a protected route.
 * It checks if the user has the necessary role to access the route. If not, it redirects to the login page.
 * @param {PrivateRouteProps} props - The props for the PrivateRoute component.
 * @returns A Route component that either renders the component for the route or redirects to the login page.
 */
const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, roles, ...rest }) => {
  const authContext = useAuth(); // Get the authentication context
  if (!authContext) {
    // If the authContext is not available, throw an error
    throw new Error('useAuth must be used within a AuthProvider');
  }
  const { authData } = authContext; // Destructure authData from the context

  // The Route component to render. It checks if authData exists and if the user has one of the required roles.
  // If not, it redirects to the login page using the Navigate component.
  return (
    <Route
      {...rest}
      element={
        authData && (!roles || roles.some(role => authData.roles.includes(role))) ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default PrivateRoute;
