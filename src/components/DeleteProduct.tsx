// Importerer nødvendige komponenter fra Chakra UI, axios for HTTP-anmodninger og useState fra React.
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import ProductGridAdmin from "./ProductGridAdmin";

// Definerer 'DeleteProduct' komponenten, som er en funktionel React komponent.
const DeleteProduct = () => {
    // State hooks for at holde styr på det valgte produkt ID og navn.
    const [productId, setProductID] = useState(Number);
    const [productName, setProductName] = useState("")

    // Funktion til at slette et produkt ved at sende en DELETE-anmodning til API.
    const deleteData = async () => {
        await axios.delete("http://localhost:5227/api/Products/" + productId);
    };

    // Returnerer JSX for DeleteProduct komponenten.
    return (
        <>
        <Heading padding={3} justifySelf={"center"}>Delete a Product</Heading>
        <Stack justifyContent={"center"}>
            {/* Denne del af koden var oprindeligt brugt til at indtaste produkt ID manuelt. */}
            {/* <Box alignSelf={"center"} padding={3}>
                <Text>Product ID</Text>
                <Input
                    width={"300px"}
                    rounded={"9px"}
                    type="number"
                    placeholder="Enter the product ID"
                    required
                    value={productID}
                    onChange={(e) => setProductID(e.target.valueAsNumber)}
                />
            </Box> */}
            <Box>
                {/* ProductGridAdmin komponenten bruges til at vælge et produkt til sletning. */}
                <ProductGridAdmin idPrefix="delete" onSelectProductID={setProductID} onSelectProductName={setProductName}></ProductGridAdmin>
            </Box>
            <Box paddingLeft={3} paddingRight={3} alignSelf={"center"}>
                <Text alignSelf={"center"} fontSize={"26px"}>This is your selected product:</Text>
                <Text as={"u"} fontWeight={"bold"} fontStyle={"italic"} fontSize={"36px"}>{productName}</Text>
            </Box>
            <Box alignSelf={"center"} maxWidth={"200px"}>
                <form onSubmit={deleteData}>
                    <Box paddingTop={3} paddingBottom={3}>
                        {/* Knap til at udløse sletningsfunktionen. */}
                        <Button type="submit" colorScheme="red">Delete the Product</Button>
                    </Box>
                </form>
            </Box>
        </Stack>
        </>
    )
}
export default DeleteProduct
