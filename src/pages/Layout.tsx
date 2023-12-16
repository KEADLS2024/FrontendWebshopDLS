import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

const Layout = () => {
  return (
    <>
    <ShoppingCartProvider>
      <NavBar />
      <Box >
        <Outlet />
      </Box>
    </ShoppingCartProvider>
    </>
  );
};

export default Layout;