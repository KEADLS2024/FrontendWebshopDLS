import { Grid, Heading } from "@chakra-ui/react";
import AddProduct from "../components/AddProduct";


const AdminPage = () => {
    


    return (
        <>
      <Grid>
        <Heading justifySelf={"left"}>Admin Panel</Heading>
        <AddProduct></AddProduct>
      </Grid>
    </>
    );
};
export default AdminPage;