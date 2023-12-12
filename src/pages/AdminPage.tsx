import React from 'react';
import { Divider, Grid, Heading } from "@chakra-ui/react";
import { useAuth } from '../contexts/AuthContext'; // Import useAuth hook
import AddProduct from "../components/AddProduct";
import DeleteProduct from "../components/DeleteProduct";

const AdminPage = () => {
    const { authData } = useAuth(); // Use the useAuth hook to access auth data

    // Check if the user is authenticated and has the 'Administrator' role
    // Replace 'Administrator' with the actual role name you have in your auth data
    const isAdmin = authData && authData.roles.includes('Administrator');

    // If not admin, render a message or redirect
    if (!isAdmin) {
        return <div>You do not have access to this page.</div>;
    }

    // Render the admin components if the user is an admin
    return (
        <>
            <Grid>
                <Heading justifySelf={"left"}>Admin Panel</Heading>
                <AddProduct></AddProduct>
                <Divider></Divider>
                <DeleteProduct></DeleteProduct>
            </Grid>
        </>
    );
};

export default AdminPage;
