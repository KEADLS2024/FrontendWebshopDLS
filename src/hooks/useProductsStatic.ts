// Importerer 'products' data fra en lokal datafil.
import products from '../data/products';

// Definerer 'useProductsStatic' hook, som returnerer statiske produktdata.
const useProductsStatic = () => {
    // Returnerer et objekt med statiske data, ingen fejl, og en 'isLoading' status sat til false.
    return {
        data: products, // De statiske produktdata.
        error: null, // Indikerer at der ikke er nogen fejl.
        isLoading: false // Indikerer at data ikke indlæses, da det er statisk.
    };
};

export default useProductsStatic;
