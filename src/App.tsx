// import './App.css'
// import { Grid, GridItem, Show, Stack } from '@chakra-ui/react'
// import NavBar from './components/NavBar'
// import ProductGrid from './components/ProductGrid'
// import ProductCarousel from './components/ProductCarousel'
// import CategoryList from './components/CategoryList'
// import { useState } from 'react'

// export interface ProductQuery {
//   categoryID: number | null;
//   productId?: number | null;
// }

// function App() {
//   const [productQuery, setProductQuery] = useState<ProductQuery>({categoryID: null})

//   return (
//     <>
//       <Grid templateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav" "aside main"`
//       }}>
//         <GridItem gridArea="nav" bg="tomato">
//           <NavBar></NavBar>
//         </GridItem>
//         <Show above="lg">
//           <GridItem gridArea="aside" width={"200px"}>
//             <CategoryList onSelectCategory={(categoryID) => setProductQuery({categoryID})}
//               selectedCategoryID={productQuery.categoryID}></CategoryList>
//           </GridItem>
//         </Show>
//         <GridItem gridArea="main">
//           <Stack align="center">
//             {productQuery.categoryID === null && <ProductCarousel/>}
//             <ProductGrid productQuery={productQuery}/>
//           </Stack>
//         </GridItem>
        
//       </Grid>
//     </>
//   )
// }

// export default App
