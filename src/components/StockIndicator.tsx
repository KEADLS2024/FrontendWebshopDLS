import React from 'react'
import { Text } from "@chakra-ui/react";

interface Props {
    stock: number
}

const StockIndicator = ({stock}: Props) => {
    const color = stock >= 5 ? "green" : stock >= 1 ? "orange" : "red";
    const stockText = stock >= 5 ? "In Stock" : stock >= 1 ? "Low Stock" : "Out of Stock";

  return (
    <Text fontSize='20px' as='u' color={color}>{stockText}</Text>
  )
}

export default StockIndicator