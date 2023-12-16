import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const ProductCardContainer = ({children}: Props) => {
  return (
    <Box 
    border="1px"
    borderColor="black"
    boxShadow="dark-lg"
    _hover={{transform: "scale(1.05)", transition: "transform 0.1s ease-in"}}
    borderRadius={10} overflow="hidden" width="100%">
        {children}
    </Box>
  )
}

export default ProductCardContainer