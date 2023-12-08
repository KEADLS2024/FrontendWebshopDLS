import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import ProductGridAdmin from "./ProductGridAdmin";


const DeleteProduct = () => {
    const [productID, setProductID] = useState(Number);
    const [productName, setProductName] = useState("")

    const deleteData = async () => {
        await axios.delete("https://localhost:7003/sqlER/Product/"+productID, {
        });
      };

    return (
        <>
        <Heading padding={3} justifySelf={"center"}>Delete a Product</Heading>
        <Stack justifyContent={"center"}>
            {/* <Box alignSelf={"center"} padding={3}>
                <Text>Product ID</Text>
                <Input
                    width={"300px"}
                    rounded={"9px"}
                    type="number"
                    placeholder="Enter the product ID"
                    required
                    value={productID}
                    onChange={(e)=> setProductID(e.target.valueAsNumber)}
                />
            </Box> */}
            <Box>
                <ProductGridAdmin onSelectProductID={setProductID} onSelectProductName={setProductName}></ProductGridAdmin>
            </Box>
            <Box paddingLeft={3} paddingRight={3} alignSelf={"center"}>
                <Text alignSelf={"center"} fontSize={"26px"}>This is your selected product:</Text>
                <Text as={"u"} fontWeight={"bold"} fontStyle={"italic"} fontSize={"36px"}>{productName}</Text>
            </Box>
            <Box alignSelf={"center"} maxWidth={"200px"}>
                <form  onSubmit={deleteData}>
                    <Box paddingTop={3} paddingBottom={3}>
                        <Button type="submit" colorScheme="red">Delete the Product</Button>
                    </Box>
                </form>
            </Box>
        </Stack>
        </>
    )
}
export default DeleteProduct