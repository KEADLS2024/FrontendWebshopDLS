// Importerer React, useState hook fra React, forskellige komponenter fra Chakra UI, samt brugerdefinerede hooks.
import React, { useState } from 'react';
import { Button, Input, Alert, AlertIcon, Grid, Stack, Heading } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

// Definerer 'LoginPage' komponenten, som er en funktionel React komponent.
const LoginPage: React.FC = () => {
  // State hooks for brugernavn, adgangskode og eventuelle fejlmeddelelser.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Bruger 'useAuth' hook for at få adgang til login funktionen.
  const { login } = useAuth();
  // Bruger 'useNavigate' hook for programmatisk navigation.
  const navigate = useNavigate();

  // Håndterer logind handlingen.
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Sender en POST anmodning til API'et for at logge ind.
      const response = await fetch('http://localhost:5227/api/UserCredentials/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Håndterer svar fra API'et.
      if (response.ok) {
        const data = await response.json();
        login(data.token, data.role); // Gemmer token og rolle.
        navigate('/'); // Navigerer til startsiden.
      } else {
        setError('Invalid username or password.'); // Viser fejl ved ugyldigt login.
      }
    } catch (error) {
      setError('An error occurred while trying to log in.'); // Håndterer netværksfejl eller serverfejl.
    }
  };

  // Returnerer JSX for login siden.
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
            id='username'
            marginTop={"20px"}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id='password'
            marginTop={"20px"}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Stack marginTop={"20px"}  align={'center'}>
            <Button id='loginbutton' width={"150px"} colorScheme="blue" type="submit">Login</Button>
          </Stack>
        </form>
      </Stack>
    </Grid>
  );
};

export default LoginPage;
