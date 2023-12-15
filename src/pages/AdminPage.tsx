// AdminPage.tsx
import React from 'react';
import { Divider, Grid, Heading } from "@chakra-ui/react";
import { useAuth } from '../contexts/AuthContext';
import { getUserRoleFromToken } from '../services/jwtUtils'; // Ensure this utility function is implemented correctly

import AddProduct from "../components/AddProduct";
import DeleteProduct from "../components/DeleteProduct";
import UpdateProduct from '../components/UpdateProduct';

const AdminPage: React.FC = () => {
  const { token } = useAuth(); // Retrieve the token from AuthContext

  const userRole = token ? getUserRoleFromToken(token) : '';
  const isAdmin = userRole === 'Administrator'; // Check for 'Administrator' role

  if (!isAdmin) {
    return <div>You do not have access to this page.</div>;
  }

  return (
    <>
      <Grid>
        <Heading as="u" padding={3} justifySelf="left">Admin Panel</Heading>
        <AddProduct />
        <Divider />
        <DeleteProduct />
        <Divider />
        <UpdateProduct />
      </Grid>
    </>
  );
};

export default AdminPage;
