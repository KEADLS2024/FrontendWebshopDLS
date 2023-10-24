import './App.css'
import { Grid, GridItem, Show, Stack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ProductGrid from './components/ProductGrid'
import ProductCarousel from './components/ProductCarousel'

function App() {

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem gridArea="nav" bg="tomato">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" bg="green">
            aside
          </GridItem>
        </Show>
        <GridItem gridArea="main">
          <Stack align="center">
            <ProductCarousel/>
            <ProductGrid/>
          </Stack>
        </GridItem>
        
      </Grid>
    </>
  )
}

export default App
