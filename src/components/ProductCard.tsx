// Importerer nødvendige komponenter fra Chakra UI og brugerdefinerede komponenter og funktioner.
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { Product } from '../hooks/useProducts';
import StockIndicator from './StockIndicator';
import { formatCurrency } from '../utilities/formatCurrency';
import placeholderProduct from '../assets/placeholder.jpg';

// Definerer Props interface for komponenten.
interface Props {
    product: Product
}

// Definerer 'ProductCard' komponenten, som er en funktionel React komponent.
const ProductCard = ({product}: Props) => {
    // Returnerer JSX for produktkortet.
    return (
        <>
            <Card borderRadius={10} overflow="hidden">
                <Image height={280} objectFit={"fill"} src={product.img} fallbackSrc={placeholderProduct}></Image>
                <CardBody minHeight={"155px"}>
                    <Heading fontSize={"26px"}>{product.name}</Heading>
                    <Text>{formatCurrency(product.price)}</Text>
                    <HStack justifyContent="right">
                        <StockIndicator stock={product.stockQuantity}></StockIndicator>
                    </HStack>
                </CardBody>
            </Card>
        </>
    )
}

export default ProductCard;
