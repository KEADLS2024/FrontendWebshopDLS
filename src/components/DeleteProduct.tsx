import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";


const DeleteProduct = () => {
    const [productID, setProductID] = useState(Number);

    const deleteData = async () => {
        await axios.delete("https://localhost:7003/sqlER/Product/"+productID, {
        });
      };

    return (
        <>
        <Heading paddingTop={3} justifySelf={"center"}>Delete a Product</Heading>
        <HStack justifyContent={"center"}>
            <form onSubmit={deleteData}>
                <Box paddingTop={3}>
                    <Text>Product ID</Text>
                    <input
                    type="number"
                    placeholder="Enter the product ID"
                    required
                    value={productID}
                    onChange={(e)=> setProductID(e.target.valueAsNumber)}
                    />
                </Box>
                <Box paddingTop={3}>
                    <Button type="submit" colorScheme="red">Delete the Product</Button>
                </Box>
            </form>
        </HStack>
        </>
    )
}
export default DeleteProduct