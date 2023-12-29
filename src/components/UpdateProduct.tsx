import { Box, Button, Heading, Input, Select, Spinner, Stack, Text, Textarea } from "@chakra-ui/react"
import ProductGridAdmin from "./ProductGridAdmin"
import axios from "axios";
import useCategories from "../hooks/useCategories";
import { useState } from "react";

// Definerer 'UpdateProduct' komponenten, som er en funktionel React komponent.
const UpdateProduct = () => {
    // State hooks for at håndtere og opdatere produktinformation.
    const [productId, setProductID] = useState(Number);
    const [name, setName] = useState("");
    const [updateName, setUpdateName] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImage] = useState("");
    const [price, setPrice] = useState(Number);
    const [stockQuantity, setStockQuantity] = useState(Number);
    const [categoryId, setCategory] = useState(Number);

    // Bruger 'useCategories' hook til at hente kategoridata, herunder håndtering af loading og fejl.
    const { data: categories, error, isLoading } = useCategories();

    // Funktion til at håndtere valg af et specifikt produkt til opdatering.
    const handleSelectProduct = (updateName: string, description: string, img: string, price: number, stockQuantity: number, categoryId: number) => {
        setUpdateName(updateName)
        setDescription(description);
        setImage(img);
        setPrice(price);
        setStockQuantity(stockQuantity);
        setCategory(categoryId);
    };

    if (error) return null; // Returnerer ingenting hvis der er en fejl.
    if (isLoading) return <Spinner></Spinner> // Viser en spinner, mens data hentes.

    // Funktion til at sende opdaterede produktdata til serveren.
    const updateData = async () => {
        await axios.put("http://localhost:5227/api/Products/"+productId, {
            productId: productId,
            name: updateName,
            description: description,
            img: img,
            price: price,
            stockQuantity: stockQuantity,
            categoryId: categoryId,
        });
      };

 // Returnerer JSX for opdateringsformen af et produkt.
  return (
    <>
        <Heading padding={3} justifySelf={"center"}>Update a Product</Heading>
        <Stack justifyContent={"center"}>
            <Box>
                <ProductGridAdmin idPrefix="update" onSelectProductID={setProductID} onSelectProductName={setName} onSelectProduct={handleSelectProduct}></ProductGridAdmin>
            </Box>
            <Box paddingLeft={3} paddingRight={3} alignSelf={"center"}>
                <Text alignSelf={"center"} fontSize={"26px"}>This is your selected product:</Text>
                <Text as={"u"} fontWeight={"bold"} fontStyle={"italic"} fontSize={"36px"}>{name}</Text>
            </Box>
            <Box alignSelf={"center"} maxWidth={"200px"}>
            <form onSubmit={updateData}>
                <Box paddingTop={3}>
                    <Text>Name of the product</Text>
                    <Input 
                    id="nameUpdate"
                    width={{base: "300px",sm:"300px", md:"300px"}}
                    rounded={"9px"}
                    type="text"
                    placeholder="Enter name of product here"
                    required
                    value={updateName}
                    onChange={(e)=> setUpdateName(e.target.value)}
                    />
                </Box>
                <Box paddingTop={3}>
                    <Text>Description of the product</Text>
                    <Textarea
                    id="descriptionUpdate"
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
                    id="imgUpdate"
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
                    id="priceUpdate"
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
                    id="stockUpdate"
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
                        id="categoriesUpdate"
                        width={"300px"}
                        rounded={"9px"}
                        placeholder="Select a category"
                        value={categoryId}
                        onChange={(e) => setCategory(Number(e.target.value))}
                        required
                    >
                        {categories.map((category) => (
                            <option id={category.name} key={category.categoryId} value={category.categoryId}>
                                {category.name}
                            </option>
                        ))}
                    </Select>
                </Box>
                <Box padding={3}>
                    <Button id="updateProduct" type="submit" colorScheme="blue">Update the Product</Button>
                </Box>
            </form>
            </Box>
        </Stack>
    </>
  )
}

export default UpdateProduct