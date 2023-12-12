import React, { createContext, useState, FC, useContext } from 'react';

/**
 * Defines the structure of the authentication data that will be stored in the context.
 * @property {string} token - The JWT token representing the user's session.
 * @property {string[]} roles - An array of roles associated with the user.
 */
interface AuthData {
  token: string;
  roles: string[];
}

/**
 * Defines the structure of the AuthContext's value.
 * @property {AuthData | null} authData - The current authentication data or null if not authenticated.
 * @property {(token: string, roles: string[]) => void} login - Function to handle user login.
 * @property {() => void} logout - Function to handle user logout.
 */
interface AuthContextType {
  authData: AuthData | null;
  login: (token: string, roles: string[]) => void;
  logout: () => void;
}
interface AuthProviderProps {
    children: React.ReactNode; // This type accepts any valid React child.
  }
  
// Create the authentication context with a default value of null.
const AuthContext = createContext<AuthContextType | null>(null);

/**
 * A custom hook to access the AuthContext.
 * @returns The AuthContext value.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    // If the context is null, that means useAuth is being used outside of an AuthProvider, which is incorrect.
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

/**
 * Provides the authentication context to its children.
 * @param {React.ReactNode} children - The children components that will have access to the AuthContext.
 * @returns An AuthProvider component that provides the AuthContext to its children.
 */
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData | null>(null); // State to hold the authentication data

  /**
   * Handles user login by setting the auth data state.
   * @param {string} token - The JWT token for the user session.
   * @param {string[]} roles - The roles associated with the user.
   */
  const login = (token: string, roles: string[]) => {
    setAuthData({ token, roles }); // Set the authentication data with the token and roles
  };

  /**
   * Handles user logout by clearing the auth data state and removing the token from local storage.
   */
  const logout = () => {
    setAuthData(null); // Clear the authentication data
    localStorage.removeItem('token'); // Remove the JWT token from local storage
  };

  // The AuthProvider component that provides the auth data and handlers to its children via the AuthContext.Provider.
  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
