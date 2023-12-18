
// Importerer Grid, GridItem, Show og Stack komponenter fra "@chakra-ui/react" og useState hook fra "react".
import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import ProductGrid from "../components/ProductGrid";
import ProductCarousel from "../components/ProductCarousel";

// Definerer et interface 'ProductQuery' for at holde styr på valgte kategorier og produkter.
export interface ProductQuery {
    categoryId: number | null;
    productId: number | null;
  }

// Definerer 'HomePage' som en funktionel komponent i React.
const HomePage = () => {
    // Bruger useState til at oprette og opdatere 'productQuery' state.
    const [productQuery, setProductQuery] = useState<ProductQuery>({categoryId: null, productId: null})
    
    // Funktion til at håndtere valg af kategori.
    const handleSelectCategory = (categoryId: number) => {
        setProductQuery(prevState => ({ ...prevState, categoryId }));
    };

    // Funktion til at håndtere valg af produkt.
    const handleSelectProduct = (productId: number) => {
        setProductQuery(prevState => ({ ...prevState, productId }));
    };

    // Renderer grænsefladen for hjemmesiden med kategoriliste og produktgitter.
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
            {productQuery.categoryId === null && <ProductCarousel onSelectProduct={handleSelectProduct}/>}
            <ProductGrid productQuery={productQuery} onSelectProduct={handleSelectProduct} selectedCategoryId={productQuery.categoryId}/>
          </Stack>
        </GridItem>
        
      </Grid>
    </>
    );
};
export default HomePage;