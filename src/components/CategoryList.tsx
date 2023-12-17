import { Button, HStack, List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";


interface Props {
    selectedCategoryId: number | null;
    onSelectCategory: (categoryId: number) => void;
}

const CategoryList = ({selectedCategoryId, onSelectCategory}: Props) => {
  const { data: categories, error, isLoading } = useCategories();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>

  return (
    <>
      <List>
          {categories.map((category) => (
            <ListItem key={category.categoryId} padding={"5px"}>
                <HStack>
                  <Button id={category.name} onClick={()=> onSelectCategory(category.categoryId)}
                   variant={"link"}
                   key={category.categoryId}
                   fontSize={"lg"}
                   colorScheme={selectedCategoryId === category.categoryId ? "red" : undefined}
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