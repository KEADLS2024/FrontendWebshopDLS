import { useParams } from "react-router-dom";
import { Divider, GridItem, HStack, Heading, Image, SimpleGrid, Spinner, Stack, Text } from "@chakra-ui/react";
import useProduct from "../hooks/useProduct";
import StockIndicator from "../components/StockIndicator";
import SingleProductCarousel from "../components/SingleProductCarousel";
import { useState } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import AddToCart from "../components/AddToCart";


const ProductPage = () => {
    const {productID} = useParams(); // We use useParams() to grap the productID from the URL
    const productIDint = parseInt(productID!) // We need to make the string we get from using useParams() into an int
  const { singleData: product, isLoading, error } = useProduct(productIDint!); // "productIDint!" means that productIDint is never null
  const [productId, setProductId] = useState(Number)

  if (isLoading) return <Spinner />;
  if (error || !product) throw error;
  productId;

  return (
    <SimpleGrid justifyItems={"center"} columns={{sm: 1, md: 2}} spacing={5}>
        
          <GridItem justifySelf={{sm:"center", md:"right"}} padding={3}>
            <Image src={product.img} fallbackSrc="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"></Image>
          </GridItem>
          <GridItem justifySelf={{sm:"center", md:"left"}} padding={3} minHeight={"400px"}>
              <Heading fontSize={"5xl"}>{product.name}</Heading>
              <Text maxWidth={"700px"} fontSize={"3xl"}>{product.description}</Text>
              <Divider  borderWidth={"1px"} backgroundColor={"red"}></Divider>
              <Text align={"center"} fontStyle={"italic"} fontSize={"4xl"} paddingTop={"2px"} >{formatCurrency(product.price)}</Text>
              <HStack justifyContent={"left"}>
                <StockIndicator stock={product.stockQuantity}></StockIndicator>
              </HStack>
              <Stack paddingTop={"40px"} maxWidth={"150px"}>
                <AddToCart id={productIDint}></AddToCart>
              </Stack>
          </GridItem>
          <GridItem colSpan={{sm: 1, md: 2}} justifySelf={"center"}>
            <SingleProductCarousel selectedCategoryID={product.categoryId} onSelectProduct={setProductId}></SingleProductCarousel>
          </GridItem>
        
    </SimpleGrid>
  )
}
export default ProductPage