import React from 'react';
import { Divider, Grid, Heading } from "@chakra-ui/react";
import { useAuth } from '../contexts/AuthContext';

import AddProduct from "../components/AddProduct";
import DeleteProduct from "../components/DeleteProduct";
import UpdateProduct from '../components/UpdateProduct';

const AdminPage: React.FC = () => {
  const { token, role } = useAuth();

  const isAdmin = token && role === 'Administrator';

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
