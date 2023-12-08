import { Divider, Grid, Heading } from "@chakra-ui/react";
import AddProduct from "../components/AddProduct";
import DeleteProduct from "../components/DeleteProduct";
import UpdateProduct from "../components/UpdateProduct";


const AdminPage = () => {
    return (
        <>
      <Grid>
        <Heading as={"u"} padding={3} justifySelf={"left"}>Admin Panel</Heading>
        <AddProduct></AddProduct>
        <Divider></Divider>
        <DeleteProduct></DeleteProduct>
        <Divider></Divider>
        <UpdateProduct></UpdateProduct>
      </Grid>
    </>
    );
};
export default AdminPage;