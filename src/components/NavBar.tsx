import React from 'react';
import { HStack, Image, Text, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/react.svg';
import { useAuth } from '../contexts/AuthContext';

const NavBar: React.FC = () => {
  const { token, role, logout } = useAuth(); // Include role in useAuth
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <HStack bg="gray.800" px="4" py="2" justifyContent="space-between" alignItems="center">
      <Link to="/">
        <Image src={logo} boxSize="50px" />
      </Link>
      {token ? (
        <>
          {role === 'Administrator' && ( // Conditionally render Admin Panel link
            <Link to="/admin">
              <Text color="white" fontSize="lg">Admin Panel</Text>
            </Link>
          )}
          <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <Link to="/login">
          <Button colorScheme="teal" variant="outline">Login</Button>
        </Link>
      )}
    </HStack>
  );
};

export default NavBar;

