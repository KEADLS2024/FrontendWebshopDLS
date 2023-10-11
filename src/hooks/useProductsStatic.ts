import products from '../data/products'

const useProductsStatic = () => ({
    data: products, error: null, isLoading: false
});

export default useProductsStatic;