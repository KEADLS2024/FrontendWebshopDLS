import { Box, Button, HStack, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImage] = useState("");
  const [price, setPrice] = useState(Number);
  const [stockQuantity, setStockQuantity] = useState(Number);
  const [categoryId, setCategory] = useState(Number);

    const sendData = async () => {
        await axios.post("https://localhost:7003/sqlER/Product", {
            name: name,
            description: description,
            img: img,
            price: price,
            stockQuantity: stockQuantity,
            categoryId: categoryId,
        });
      };
    return (
        <>
        <Heading justifySelf={"center"}>Add a new product</Heading>
        <HStack paddingBottom={3} justifyContent={"center"}>
            <form onSubmit={sendData}>
                <Box paddingTop={3}>
                    <Text>Name of the product</Text>
                    <Input 
                    width={{base: "300px",sm:"300px", md:"300px"}}
                    rounded={"9px"}
                    type="text"
                    placeholder="Enter name of product here"
                    required
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </Box>
                <Box paddingTop={3}>
                    <Text>Description of the product</Text>
                    <Textarea
                    width={"300px"}
                    rounded={"9px"}
                    placeholder="Enter description of the product here"
                    required
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    />
                </Box>
                <Box paddingTop={3}>
                    <Text>Link to image of product</Text>
                    <Input 
                    width={"300px"}
                    rounded={"9px"}
                    type="text"
                    placeholder="Enter the URL of the image here"
                    value={img}
                    onChange={(e)=> setImage(e.target.value)}
                    />
                </Box>
                <Box paddingTop={3}>
                    <Text>Price of the product</Text>
                    <Input 
                    width={"300px"}
                    rounded={"9px"}
                    type="number"
                    placeholder="Enter the price for a single item here"
                    required
                    value={price}
                    onChange={(e)=> setPrice(e.target.valueAsNumber)}
                    />
                </Box>
                <Box paddingTop={3}>
                    <Text>The available stock for the product</Text>
                    <Input 
                    width={"300px"}
                    rounded={"9px"}
                    type="number"
                    placeholder="Enter the stock quantity here"
                    required
                    value={stockQuantity}
                    onChange={(e)=> setStockQuantity(e.target.valueAsNumber)}
                    />
                </Box>
                <Box paddingTop={3}>
                    <Text>Category ID</Text>
                    <Input 
                    width={"300px"}
                    rounded={"9px"}
                    type="number"
                    placeholder="Enter the category id here"
                    required
                    value={categoryId}
                    onChange={(e)=> setCategory(e.target.valueAsNumber)}
                    />
                </Box>
                <Box paddingTop={3}>
                    <Button type="submit" colorScheme="green">Add the Product</Button>
                </Box>
            </form>
        </HStack>
        </>
    )
}
export default AddProduct