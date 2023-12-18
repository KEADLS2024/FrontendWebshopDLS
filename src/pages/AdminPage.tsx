import React from 'react';
import { Divider, Grid, Heading } from "@chakra-ui/react";
import { useAuth } from '../contexts/AuthContext';

// Importerer komponenter til at tilføje, slette og opdatere produkter.
import AddProduct from "../components/AddProduct";
import DeleteProduct from "../components/DeleteProduct";
import UpdateProduct from '../components/UpdateProduct';

// Definerer 'AdminPage' komponenten, som er en React funktionel komponent. React.FC: This stands for "React Functional Component." It's a TypeScript type annotation that describes the AdminPage as a functional component in React. 
const AdminPage: React.FC = () => {
  // Bruger 'useAuth' hook for at få adgang til autentifikationsoplysninger.
  const { token, role } = useAuth();

  // Tjekker om brugeren har administratorrettigheder.
  const isAdmin = token && role === 'Administrator';

  // Returnerer en adgangsbesked, hvis brugeren ikke er administrator.
  if (!isAdmin) {
    return <div>You do not have access to this page.</div>;
  }

  // Viser admin-panelet med muligheder for at tilføje, slette og opdatere produkter.
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

// Eksporterer 'AdminPage' for at kunne genbruge den i andre dele af applikationen.
export default AdminPage;