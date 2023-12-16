import { formatCurrency } from '../utilities/formatCurrency'
import useProducts from '../hooks/useProducts';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Grid } from '@chakra-ui/react';

type Props = {
    isOpen: boolean
  }

const ShoppingCart = ({isOpen}: Props) => {
    const { data: products } = useProducts();
    const { closeCart, cartItems } = useShoppingCart()
  return (
    <Drawer isOpen={isOpen} onClose={closeCart} placement='right'>
        <DrawerOverlay/>
        <DrawerContent minWidth={"420px"}>
            <DrawerCloseButton mt={2} />
            <DrawerHeader>Shopping Cart</DrawerHeader>
            <DrawerBody>
                <Grid>
                    {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                    ))}
                    <div style={{marginLeft: "auto", marginRight: "auto", marginTop: "10px", fontWeight: "bold", fontSize: "30px", textDecoration: "underline"}}>
                    Total{" "}
                    {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                    const item = products.find(i => i.productId === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                    }, 0)
                    )}
                    </div>
                </Grid>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
  )
}

export default ShoppingCart