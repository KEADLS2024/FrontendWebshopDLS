// Importerer Text komponenten fra Chakra UI.
import { Text } from "@chakra-ui/react";

// Definerer Props interface til at håndtere lagerstatus.
interface Props {
    stock: number
}

// Definerer 'StockIndicator' komponenten, som er en funktionel React komponent.
const StockIndicator = ({stock}: Props) => {
    // Bestemmer farven baseret på lagerbeholdningen.
    const color = stock >= 5 ? "green" : stock >= 1 ? "orange" : "red";
    // Bestemmer tekst baseret på lagerbeholdningen.
    const stockText = stock >= 5 ? "In Stock" : stock >= 1 ? "Low Stock" : "Out of Stock";

    // Returnerer JSX for lagerstatusindikatoren.
    return (
        <Text fontSize='20px' as='u' color={color}>{stockText}</Text>
    )
}

export default StockIndicator
