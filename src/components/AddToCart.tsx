import { Button } from '@chakra-ui/react'
import { useShoppingCart } from '../context/ShoppingCartContext'

type Props = {
    id: number
}

const AddToCart = ({id}: Props) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()
      const quantity = getItemQuantity(id)

  return (
    <div style={{marginTop:"auto"}}>
          {quantity === 0 ? (
            <Button colorScheme='green' borderRadius={10} width={"200px"} onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              style={{ width: "250px", gap: ".5rem", display: "flex", alignItems: "center", flex: "column" }}
            >
              <div
                style={{ gap: ".5rem", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Button colorScheme='red' variant={'outline'} onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div style={{width: "60px"}}>
                  <span  className="fs-3">{quantity}</span> in cart
                </div>
                <Button colorScheme='green' variant={'outline'} onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="solid"
                colorScheme='red'
                width={"500px"}
                borderRadius={10}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
  )
}

export default AddToCart