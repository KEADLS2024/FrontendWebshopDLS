import { Divider, Grid, Heading } from "@chakra-ui/react";
import AddProduct from "../components/AddProduct";
import DeleteProduct from "../components/DeleteProduct";


const AdminPage = () => {
    return (
        <>
      <Grid>
        <Heading as={"u"} padding={3} justifySelf={"left"}>Admin Panel</Heading>
        <AddProduct></AddProduct>
        <Divider></Divider>
        <DeleteProduct></DeleteProduct>
      </Grid>
    </>
    );
};
export default AdminPage;