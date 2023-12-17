import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import ProductCardContainer from './ProductCardContainer';
import ProductCardSkeleton from './ProductCardSkeleton';
import useProducts from '../hooks/useProducts';
import { Link } from 'react-router-dom';
import { ProductQuery } from '../pages/HomePage';

interface Props {
  productQuery: ProductQuery;
  selectedCategoryId: number | null;
  onSelectProduct: (productId: number) => void;
}

const ProductGrid = ({selectedCategoryId, onSelectProduct}: Props) => {
    const { data: products , error, isLoading } = useProducts();
    const skeletons = [...Array(20).keys()];

    const filteredProducts = products.filter(product => product.categoryId === selectedCategoryId);

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
              <Link id={product.name} onMouseEnter={()=> onSelectProduct(product.productId)} onClick={()=> onSelectProduct(product.productId)}
                    to={`/products/${product.productId}`}
                    >
                <ProductCard  product={product} />
              </Link>
            </ProductCardContainer>
          ))}
        </SimpleGrid>
      </>
    )
  }

export default ProductGrid