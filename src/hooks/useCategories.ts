import useData from "./useData";

export interface Category {
    categoryID : number,
    name : string
}


const useCategories = () => useData<Category>("/api/Category");

export default useCategories