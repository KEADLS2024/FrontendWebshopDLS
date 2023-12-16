import React from 'react';
import { HStack, Image, Text, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/react.svg';
import { useAuth } from '../contexts/AuthContext';
import { useShoppingCart } from '../context/ShoppingCartContext';

const NavBar: React.FC = () => {
  const { token, role, logout } = useAuth();
  const { openCart, cartQuantity } = useShoppingCart();
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
          {role === 'Administrator' && (
            <Link to="/admin">
              <Text color="white" fontSize="lg">Admin Panel</Text>
            </Link>
          )}
          <Button onClick={openCart} style={{width: "3rem", height: "3rem"}} variant="outline" borderRadius={50} position={"relative"}>
            {/* Shopping Cart Icon and Quantity */}
            <div style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
              borderRadius: 30,
              background: "red",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 3
            }}>
              {cartQuantity}
            </div>
          </Button>
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
