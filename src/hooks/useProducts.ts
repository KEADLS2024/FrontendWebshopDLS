// Importerer 'ProductQuery' typen fra 'HomePage' og 'useData' hook.
import { ProductQuery } from '../pages/HomePage';
import useData from './useData';

// Definerer 'Product' interface med egenskaber for produktinformation.
export interface Product {
  productId: number,
  categoryId: number,
  name: string,
  description: string,
  img: string,
  price: number,
  stockQuantity: number,
}

// Definerer 'useProducts' hook, som bruger 'useData' hook til at hente produktdata baseret på en valgfri forespørgsel.
const useProducts = (productQuery: ProductQuery | undefined = undefined) => {
  // Definerer parametre baseret på produktforespørgslen, hvis tilgængelig.
  const params = productQuery && productQuery.categoryId !== null ? { categoryId: productQuery.categoryId } : {};
  // Bruger 'useData' hook med 'Product' typen og API-endepunktet til at hente produktdata.
  return useData<Product>("/api/Products", {
    params: params,
  }, [productQuery]);
};

// const apiClient = new ApiClient<Product>("sqlER/Product");

// const useProducts = () => {
//   return useQuery<FetchResponse<Product>, Error>({
//     queryKey: ["products"],
//     queryFn: apiClient.getAll,
//   });
// }

export default useProducts