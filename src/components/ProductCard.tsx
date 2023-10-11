import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Product } from '../hooks/useProducts'
import StockIndicator from './StockIndicator'

interface Props {
    product: Product
}

const ProductCard = ({product}: Props) => {
  return (
    <>
        <Card borderRadius={10} overflow="hidden">
            <Image src={product.image}></Image>
            <CardBody>
                <Heading>{product.name}</Heading>
                <Text>{product.price} kr</Text>
                <HStack justifyContent="right">
                    <StockIndicator stock={product.stockQuantity}></StockIndicator>
                </HStack>
            </CardBody>
        </Card>
    </>
  )
}

export default ProductCard