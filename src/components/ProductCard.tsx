import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import { Product } from '../hooks/useProducts'

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
            </CardBody>
        </Card>
    </>
  )
}

export default ProductCard