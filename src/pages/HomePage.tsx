import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import ProductGrid from "../components/ProductGrid";
import ProductCarousel from "../components/ProductCarousel";

export interface ProductQuery {
    categoryID: number | null;
    productID: number | null;
  }

const HomePage = () => {
    const [productQuery, setProductQuery] = useState<ProductQuery>({categoryID: null, productID: null})
    
    const handleSelectCategory = (categoryID: number) => {
        setProductQuery(prevState => ({ ...prevState, categoryID }));
    };

    const handleSelectProduct = (productId: number) => {
        setProductQuery(prevState => ({ ...prevState, productId }));
    };


    return (
        <>
      <Grid templateAreas={{
        sm: `"main"`,
        md: `"aside main"`
      }}>
        <Show above="lg">
          <GridItem gridArea="aside" width={"210px"} height={"fit"} minHeight={"730px"} bg={"gray.700"}>
            <CategoryList onSelectCategory={handleSelectCategory}
              selectedCategoryID={productQuery.categoryID}></CategoryList>
          </GridItem>
        </Show>
        <GridItem gridArea="main" justifySelf={"left"}>
          <Stack >
            {productQuery.categoryID === null && <ProductCarousel/>}
            <ProductGrid productQuery={productQuery} onSelectProduct={handleSelectProduct} selectedCategoryID={productQuery.categoryID}/>
          </Stack>
        </GridItem>
        
      </Grid>
    </>
    );
};
export default HomePage;