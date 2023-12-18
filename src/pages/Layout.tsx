// Importerer Box komponenten fra Chakra UI, NavBar komponenten, Outlet fra react-router-dom, og ShoppingCartProvider.
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

// Definerer 'Layout' komponenten, som er en funktionel React komponent.
const Layout = () => {
  // Returnerer JSX for layoutet af applikationen.
  return (
    <>
    {/* Indkapsler hele applikationen i ShoppingCartProvider for at give adgang til indkøbsvognens kontekst. */}
    <ShoppingCartProvider>
      {/* NavBar komponenten vises øverst på alle sider. */}
      <NavBar />
      <Box >
        {/* Outlet komponenten bruges til at vise indholdet af de aktuelle ruter. */}
        <Outlet />
      </Box>
    </ShoppingCartProvider>
    </>
  );
};

export default Layout;
