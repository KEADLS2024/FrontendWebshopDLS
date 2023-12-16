// LoginPage.js
import React, { useState } from 'react';
import { Button, Input, Alert, AlertIcon, Grid, Stack, Heading } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5227/api/UserCredentials/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.token, data.role); // Store the token and role
        navigate('/');
      } else {
        setError('Invalid username or password.');
      }
    } catch (error) {
      setError('An error occurred while trying to log in.');
    }
  };

  return (
    <Grid justifyContent={'center'}>
      <Stack paddingTop={"100px"} alignContent={'center'} maxWidth={"300px"}>
        <Heading as={"u"}>Login</Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <form onSubmit={handleLogin}>
          <Input
            marginTop={"20px"}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
          marginTop={"20px"}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Stack marginTop={"20px"}  align={'center'}>
            <Button width={"150px"} colorScheme="blue" type="submit">Login</Button>
          </Stack>
        </form>
      </Stack>
    </Grid>
  );
};

export default LoginPage;
