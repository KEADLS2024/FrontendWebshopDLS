import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import ProductCardContainer from './ProductCardContainer';
import ProductCardSkeleton from './ProductCardSkeleton';
import useProducts from '../hooks/useProducts';
import { Link } from 'react-router-dom';
import { ProductQuery } from '../pages/HomePage';

interface Props {
  productQuery: ProductQuery;
  selectedCategoryID: number | null;
  onSelectProduct: (productID: number) => void;
}

const ProductGrid = ({selectedCategoryID, onSelectProduct}: Props) => {
    const { data: products , error, isLoading } = useProducts();
    const skeletons = [...Array(20).keys()];

    const filteredProducts = products.filter(product => product.categoryId === selectedCategoryID);

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
            <ProductCardContainer key={product.productID}>
              <Link onMouseEnter={()=> onSelectProduct(product.productID)} onClick={()=> onSelectProduct(product.productID)}
                    to={`/products/${product.productID}`}
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