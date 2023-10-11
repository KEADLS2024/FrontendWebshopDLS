import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

export interface Product {
    id: number,
    name: string,
    category: string,
    image: string,
    price: number,
    stockQuantity: number
}
interface ProductResponse {
    count: number;
    results: Product[];
  }

const useProducts = () => {
    const [product, setProduct] = useState<Product[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<ProductResponse>("games")
        .then((response) => {
          setProduct(response.data.results);
          console.log(response);
        })
        .catch((error) => setError(error.message));
    }, []);
  
    return { product, error };
  };

export default useProducts