import useProducts from '../hooks/useProducts'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { Box, Button, HStack, Image } from '@chakra-ui/react'
import { formatCurrency } from '../utilities/formatCurrency'

type Props = {
    id: number
    quantity: number
}

const CartItem = ({id,quantity}: Props) => {
    const { data: products } = useProducts();
    const { removeFromCart } = useShoppingCart()
  const item = products.find(i => i.productId === id)
  if (item == null) return null

  return (
    <HStack id={item.name+'Cart'}>
        <Image style={{width: "125px", height: "75", objectFit: "cover", marginBottom: "10px"}} src={item.img} fallbackSrc='https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'></Image>
        <Box marginRight={"auto"}>
            <Box>
                {item.name}{" "}
                {quantity > 1 && (
                    <span style={{fontSize: ".65rem"}}>
                        x{quantity}
                    </span>
                )}
            </Box>
            <Box fontSize={".75rem"}>
                {formatCurrency(item.price)}
            </Box>
        </Box>
        <Box>
            {formatCurrency(item.price * quantity)}
        </Box>
        <Button id='removeInCart' variant={"outline"}  colorScheme='red' size={'sm'} onClick={() => removeFromCart(item.productId)}>X</Button>
    </HStack>
  )
}

export default CartItem