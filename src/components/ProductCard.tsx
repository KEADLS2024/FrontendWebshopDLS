import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Product } from '../hooks/useProducts'
import StockIndicator from './StockIndicator'
import { formatCurrency } from '../utilities/formatCurrency'
import placeholderProduct from '../assets/placeholder.jpg'

interface Props {
    product: Product
}

const ProductCard = ({product}: Props) => {
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

export default ProductCard