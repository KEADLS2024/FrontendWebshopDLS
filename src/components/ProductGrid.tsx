import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { ProductQuery } from '../App';
import ProductCardContainer from './ProductCardContainer';
import ProductCardSkeleton from './ProductCardSkeleton';
import useProducts from '../hooks/useProducts';

interface Props {
  productQuery: ProductQuery
}

const ProductGrid = ({productQuery}: Props) => {

    const { data: products, error, isLoading } = useProducts();
    const skeletons = [...Array(20).keys()];

    const filteredProducts = products.filter(product => product.categoryId === productQuery.categoryID);

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
          {filteredProducts.map((product) => (
            <ProductCardContainer key={product.productId}>
              <ProductCard  product={product} />
            </ProductCardContainer>
          ))}
        </SimpleGrid>
      </>
    )
  }

export default ProductGrid