import { Box, SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import ProductCardContainer from './ProductCardContainer';
import ProductCardSkeleton from './ProductCardSkeleton';
import useProducts from '../hooks/useProducts';

interface Props {
  onSelectProductID: (productId: number) => void;
  onSelectProductName: (name: string) => void;
  onSelectProduct?: (name: string, description: string, img: string, price: number, stockQuantity: number, categoryId: number) => void;
}

const ProductGridAdmin = ({onSelectProductID, onSelectProductName, onSelectProduct}: Props) => {
    const { data: products , error, isLoading } = useProducts();
    const skeletons = [...Array(20).keys()];


    return (
      <>
        {error && <p>{error}</p>}
  
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          spacing={10}
          padding={10}
        >
          {isLoading && skeletons.map((skeleton) => <ProductCardContainer key={skeleton}>
            <ProductCardSkeleton/>
        </ProductCardContainer>)}
          {products.map((product) => (
            <ProductCardContainer key={product.productId}>
              <Box _hover={{ cursor: 'pointer' }} _active={{ transform: "scale(0.97)" }} onClick={() => {onSelectProductID(product.productId); onSelectProductName(product.name); if (onSelectProduct) {onSelectProduct(product.name,product.description,product.img,product.price,product.stockQuantity,product.categoryId)};}}                    >
                <ProductCard  product={product} />
              </Box>
            </ProductCardContainer>
          ))}
        </SimpleGrid>
      </>
    )
  }

export default ProductGridAdmin