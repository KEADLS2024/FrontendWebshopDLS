import React, { useState } from 'react';
import ApiClient, { LoginCredentials, LoginResponse } from '../services/api-client'; // Import ApiClient and LoginCredentials

/**
 * LoginPage component handles user login.
 */
const LoginPage = () => {
  // State variables to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Create an instance of the ApiClient with the login endpoint
  const apiClient = new ApiClient<LoginResponse>('/usercredentials'); // Update the endpoint as needed

  /**
   * Handles the login process when the form is submitted.
   */
  const handleLogin = async () => {
    try {
      const credentials: LoginCredentials = { username, password };
      const token = await apiClient.login(credentials);
      // Handle successful login and redirection to the next page
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
