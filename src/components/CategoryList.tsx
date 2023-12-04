import { Button, HStack, List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";


interface Props {
    selectedCategoryID: number | null;
    onSelectCategory: (categoryID: number) => void;
}

const CategoryList = ({selectedCategoryID, onSelectCategory}: Props) => {
  const { data: categories, error, isLoading } = useCategories();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>

  return (
    <>
      <List>
          {categories.map((category) => (
            <ListItem key={category.categoryID} padding={"5px"}>
                <HStack>
                  <Button onClick={()=> onSelectCategory(category.categoryID)}
                   variant={"link"}
                   key={category.categoryID}
                   fontSize={"lg"}
                   colorScheme={selectedCategoryID === category.categoryID ? "red" : undefined}
                   >
                    {category.name}
                    </Button>
                </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default CategoryList;