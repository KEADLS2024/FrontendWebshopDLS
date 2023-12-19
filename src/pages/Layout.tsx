// Importing necessary React components and hooks.
import { Box } from "@chakra-ui/react"; // Box from Chakra UI for consistent styling and layout.
import NavBar from "../components/NavBar"; // NavBar component for navigation.
import { Outlet } from "react-router-dom"; // Outlet from react-router-dom for rendering matched route components.
import { ShoppingCartProvider } from "../context/ShoppingCartContext"; // Context provider for shopping cart functionality.

/**
 * The Layout component acts as the central framework for the application's UI.
 * It encapsulates other components and provides consistent layout and context.
 * 
 * @returns {JSX.Element} The Layout component structure.
 */
const Layout = () => {
  // The JSX returned by this functional component defines the structure and layout for the application.
  return (
    
    <>
      {/* ShoppingCartProvider provides a shopping cart context to all nested components. */}
      <ShoppingCartProvider>
        {/* NavBar is a reusable component that is displayed at the top of every page for consistent navigation. */}
        <NavBar />
        {/* Box serves as a container with Chakra UI styling that wraps the Outlet component. */}
        <Box>
          
          {/* Outlet er et kraftfuldt værktøj til at bygge enkelt-sides applikationer (SPAs) med react-router-dom. 
          Det muliggør definitionen af et enkelt, konsekvent layout (Layout.tsx), hvor hovedindholdet kan ændre sig dynamisk baseret på brugerens navigation. */}
          
          {/* This enables the SPA behavior, where different "pages" are rendered within the Layout's structure without a full page reload. */}
          <Outlet />
        </Box>
      </ShoppingCartProvider>
    </>
  );
};

// Exporting Layout to be used as the root layout component in the application.
export default Layout;
