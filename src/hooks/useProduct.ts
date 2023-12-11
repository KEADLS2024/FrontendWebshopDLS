import Product from "../types/Product";
import useData from "./useData";

// const apiClient = new ApiClient<Product>("/sqlER/Product");

// const useProduct = (productID: number) =>
//   useQuery({
//     queryKey: ["Product", productID],
//     queryFn: () => apiClient.get(productID),
//   });

const useProduct = (productId: number) => {
    // Assuming the endpoint for fetching a single product by ID is like "/api/products/{productID}"
    const endpoint = `/api/Products/${productId}`;
  
    return useData<Product>(endpoint, {}, [productId], true);
  };

  // const useProduct = (productID: number) => {
  //   // Assuming the endpoint for fetching a single product by ID is like "/api/products/{productID}"

  //   const {data} = useProducts()
  //   return data.find((product) => product.productID === productID)
  // };

// const useProduct  = (productQuery: ProductQuery | undefined = undefined) => {
//     const params = productQuery && productQuery.productID !== null ? { productID: productQuery.productID } : {};
//     return useData<Product>("/sqlER/Product",{
//       params: params,
//       },
//   [productQuery]);
//   };

// const useProduct = (productID: number, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
//     const [product, setProduct] = useState<Product>();
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState<boolean>(false);

//     useEffect(() => {
//         const controller = new AbortController();

//         setIsLoading(true);
//         axiosInstance
//             .get<Product>(`/sqlER/Product/${productID}`, {
//                 signal: controller.signal, ...requestConfig,
//             })
//             .then((response) => {
//                 setProduct(response.data);
//                 setIsLoading(false)
//                 console.log("Check this " + response.data)
//             })
//             .catch((error) => {
//                 if (!(error instanceof CanceledError)) setError(error.message)
//             })
//         return () => {
//             controller.abort();
//         };
//     }, dependencies ? [...dependencies] : []);

//     return { product, error, isLoading };
// };

export default useProduct;