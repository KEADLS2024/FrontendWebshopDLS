import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Product } from '../hooks/useProducts'
import StockIndicator from './StockIndicator'
import { formatCurrency } from '../utilities/formatCurrency'

interface Props {
    product: Product
}

const ProductCard = ({product}: Props) => {
  return (
    <>
        <Card borderRadius={10} overflow="hidden">
            <Image height={300} objectFit={"fill"} src={product.img} fallbackSrc='https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'></Image>
            <CardBody>
                <Heading>{product.name}</Heading>
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