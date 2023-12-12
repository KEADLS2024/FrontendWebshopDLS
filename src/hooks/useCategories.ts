import useData from "./useData";

export interface Category {
    categoryId : number,
    name : string
}


const useCategories = () => useData<Category>("/api/Categories");

export default useCategories