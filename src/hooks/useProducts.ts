import { ProductQuery } from '../App';
import useData from './useData';

//Interface for Static Data
// export interface Product {
//     id: number,
//     name: string,
//     category: string,
//     image: string,
//     price: number,
//     stockQuantity: number
// }
export interface Product {
  productId: number,
  categoryId: number
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

export default useProducts