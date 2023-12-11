import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import ProductGrid from "../components/ProductGrid";
import ProductCarousel from "../components/ProductCarousel";

export interface ProductQuery {
    categoryId: number | null;
    productId: number | null;
  }

const HomePage = () => {
    const [productQuery, setProductQuery] = useState<ProductQuery>({categoryId: null, productId: null})
    
    const handleSelectCategory = (categoryId: number) => {
        setProductQuery(prevState => ({ ...prevState, categoryId }));
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
              selectedCategoryId={productQuery.categoryId}></CategoryList>
          </GridItem>
        </Show>
        <GridItem gridArea="main" justifySelf={"left"}>
          <Stack >
            {productQuery.categoryId === null && <ProductCarousel/>}
            <ProductGrid productQuery={productQuery} onSelectProduct={handleSelectProduct} selectedCategoryId={productQuery.categoryId}/>
          </Stack>
        </GridItem>
        
      </Grid>
    </>
    );
};
export default HomePage;