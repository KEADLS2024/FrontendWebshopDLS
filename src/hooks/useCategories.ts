// Importerer brugerdefineret hook 'useData'.
import useData from "./useData";

// Definerer 'Category' interface med egenskaber for kategori-ID og navn.
export interface Category {
    categoryId : number,
    name : string
}

// Definerer 'useCategories' hook, som bruger 'useData' hook til at hente kategoridata.
const useCategories = () => {
    // Bruger 'useData' hook med 'Category' typen og API-endepunktet til at hente kategoridata.
    return useData<Category>("/api/Categories");
}

export default useCategories;
