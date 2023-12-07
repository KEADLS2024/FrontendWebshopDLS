import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
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
        <HStack justifyContent={"center"}>
            <form onSubmit={sendData}>
                <Box>
                    <Text>Name of the product</Text>
                    <input 
                    type="text"
                    placeholder="Name of product"
                    required
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </Box>
                <Box>
                    <Text>Description of the product</Text>
                    <textarea
                    placeholder="Description of the product here"
                    required
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    />
                </Box>
                <Box>
                    <Text>Link to image of product</Text>
                    <input 
                    type="text"
                    placeholder="The URL of the image"
                    value={img}
                    onChange={(e)=> setImage(e.target.value)}
                    />
                </Box>
                <Box>
                    <Text>Price of the product</Text>
                    <input 
                    type="number"
                    placeholder="The price for a single item"
                    required
                    value={price}
                    onChange={(e)=> setPrice(e.target.valueAsNumber)}
                    />
                </Box>
                <Box>
                    <Text>The available stock for the product</Text>
                    <input 
                    type="number"
                    placeholder="The stock quantity here"
                    required
                    value={stockQuantity}
                    onChange={(e)=> setStockQuantity(e.target.valueAsNumber)}
                    />
                </Box>
                <Box>
                    <Text>Category ID</Text>
                    <input 
                    type="number"
                    placeholder="The category id"
                    required
                    value={categoryId}
                    onChange={(e)=> setCategory(e.target.valueAsNumber)}
                    />
                </Box>
                <Box>
                    <Button type="submit">Add the Product</Button>
                </Box>
            </form>
        </HStack>
        </>
    )
}
export default AddProduct