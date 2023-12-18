// Importerer Box komponenten fra Chakra UI og ReactNode fra React.
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

// Definerer Props interface for komponenten.
interface Props {
    children: ReactNode;
}

// Definerer 'ProductCardContainer' komponenten, som er en funktionel React komponent.
const ProductCardContainer = ({children}: Props) => {
    // Returnerer JSX for en container, der omgiver barnkomponenter med stil og hover-effekt.
    return (
        <Box 
            border="1px"
            borderColor="black"
            boxShadow="dark-lg"
            _hover={{transform: "scale(1.05)", transition: "transform 0.1s ease-in"}}
            borderRadius={10} overflow="hidden" width="100%" minWidth={{base: "240px",md:"240px",lg:"240px",xl:"240px" }}>
            {children}
        </Box>
    )
}

export default ProductCardContainer;
