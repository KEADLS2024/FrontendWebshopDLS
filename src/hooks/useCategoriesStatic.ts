import categories from '../data/categories'

// Definerer 'useCategoriesStatic' hook, som returnerer statiske kategoridata.
const useCategoriesStatic = () => {
    // Returnerer et objekt med statiske data, ingen fejl, og en 'isLoading' status sat til false.
    return {
        data: categories, // De statiske kategoridata.
        error: null, // Indikerer at der ikke er nogen fejl.
        isLoading: false // Indikerer at data ikke indlæses, da det er statisk.
    };
};

export default useCategoriesStatic;
