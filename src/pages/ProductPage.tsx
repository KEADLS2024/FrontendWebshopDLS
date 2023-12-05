import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useProduct from "../hooks/useProduct";


const ProductPage = () => {
    const {productID} = useParams();
    const productIDint = parseInt(productID!)
  const { data: product, isLoading, error } = useProduct(productIDint); // "slug!" means that slug is never null


  if (isLoading) return <Spinner />;
  if (error || !product) throw error;

  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
        <GridItem>
            <Heading>{product.name}</Heading>
            <Text>{product.description}</Text>
        </GridItem>
    </SimpleGrid>
  )
}
export default ProductPage