import { ProductQuery } from '../pages/HomePage';
import useData from './useData';

export interface Product {
  productID: number,
  categoryId: number,
  name: string,
  description: string,
  img: string,
  price: number,
  stockQuantity: number,
}

const useProducts = (productQuery: ProductQuery | undefined = undefined) => {
  const params = productQuery && productQuery.categoryID !== null ? { categoryId: productQuery.categoryID } : {};
  return useData<Product>("/sqlER/Product",{
    params: params,
    },
[productQuery]);
};

// const apiClient = new ApiClient<Product>("sqlER/Product");

// const useProducts = () => {
//   return useQuery<FetchResponse<Product>, Error>({
//     queryKey: ["products"],
//     queryFn: apiClient.getAll,
//   });
// }

export default useProducts