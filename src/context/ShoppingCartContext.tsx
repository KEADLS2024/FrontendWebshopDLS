
// Importerer ReactNode, createContext, useContext, useState fra "react", ShoppingCart komponenten og useLocalStorage hook.
import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Definerer Props og CartItem typer til brug i ShoppingCartContext.
type Props = {
    children: ReactNode
}
type CartItem = {
    id: number,
    quantity: number
}

// Definerer typen ShoppingCartContext for kontekstens værdier og funktioner.
type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

// Opretter en ShoppingCartContext ved hjælp af createContext.
const ShoppingCartContext = createContext({} as ShoppingCartContext)

// Definerer og eksporterer en brugerdefineret hook 'useShoppingCart' for at give adgang til ShoppingCartContext.
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

// Definerer og eksporterer 'ShoppingCartProvider' komponenten.
export function ShoppingCartProvider({children}: Props) {
    // State for at holde styr på, om indkøbskurven er åben, og nuværende indkøbsvogns emner.
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        [])

    // Beregner samlet antal varer i indkøbskurven.
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )
    // Funktioner til at åbne og lukke indkøbskurven.
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    // Funktioner til at håndtere antallet af varer i indkøbskurven.
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
              } else {
                return item
              }
            })
          }
        })
    }
    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
              } else {
                return item
              }
            })
          }
        })
    }
    function removeFromCart(id: number) {
        setCartItems(currItems => {
          return currItems.filter(item => item.id !== id)
        })
    }
    // Returnerer ShoppingCartProvider komponenten med kontekst og ShoppingCart komponenten.
    return (
        <ShoppingCartContext.Provider value={{getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart,cartItems,cartQuantity,openCart,closeCart}}>
            {children}
            <ShoppingCart isOpen={isOpen}></ShoppingCart>
        </ShoppingCartContext.Provider>
    )
}