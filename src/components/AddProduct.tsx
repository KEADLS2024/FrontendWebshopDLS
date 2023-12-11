import { Box, Button, HStack, Heading, Input, Select, Spinner, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import useCategories from "../hooks/useCategories";

const AddProduct = () => {
    const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImage] = useState("");
  const [price, setPrice] = useState(Number);
  const [stockQuantity, setStockQuantity] = useState(Number);
  const [categoryId, setCategory] = useState(Number);

  const { data: categories, error, isLoading } = useCategories();

    if (error) return null;
    if (isLoading) return <Spinner></Spinner>

    const sendData = async () => {
        await axios.post("http://localhost:5227/api/Products", {
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
                    <Text>Category</Text>
                    <Select 
                        width={"300px"}
                        rounded={"9px"}
                        placeholder="Select a category"
                        value={categoryId}
                        onChange={(e) => setCategory(Number(e.target.value))}
                        required
                    >
                        {categories.map((category) => (
                            <option key={category.categoryId} value={category.categoryId}>
                                {category.name}
                            </option>
                        ))}
                    </Select>
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