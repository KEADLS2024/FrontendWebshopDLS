// Importerer Button komponenten fra Chakra UI og brugerdefineret hook fra ShoppingCartContext.
import { Button } from '@chakra-ui/react'
import { useShoppingCart } from '../context/ShoppingCartContext'

// Definerer Props typen for komponenten.
type Props = {
    id: number
}

// Definerer 'AddToCart' komponenten, som er en funktionel React komponent.
const AddToCart = ({id}: Props) => {
    // Bruger 'useShoppingCart' hook til at få adgang til indkøbsvogns relaterede funktioner.
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart()
    const quantity = getItemQuantity(id)

    // Returnerer JSX for tilføj til indkøbsvogn knapper.
    return (
        <div style={{marginTop:"auto"}}>
            {/* Viser 'Add To Cart' knappen, hvis antallet er 0, ellers viser knapper for at justere antallet og fjerne fra indkøbsvogn. */}
            {quantity === 0 ? (
                <Button id='addToCart' colorScheme='green' borderRadius={10} width={"200px"} onClick={() => increaseCartQuantity(id)}>
                    + Add To Cart
                </Button>
            ) : (
                <div style={{ width: "250px", gap: ".5rem", display: "flex", alignItems: "center", flex: "column" }}>
                    <div style={{ gap: ".5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button colorScheme='red' variant={'outline'} onClick={() => decreaseCartQuantity(id)}>-</Button>
                        <div style={{width: "60px"}}>
                            <span className="fs-3">{quantity}</span> in cart
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
