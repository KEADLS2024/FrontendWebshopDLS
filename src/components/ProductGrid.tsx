import useProductsStatic from '../hooks/useProductsStatic';
import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    const { data: products, error } = useProductsStatic();
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </>
    )
  }

export default ProductGrid