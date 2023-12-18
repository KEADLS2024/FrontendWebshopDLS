// Import nødvendige moduler fra 'react-router-dom' for at håndtere routing i applikationen.
import { createBrowserRouter, RouteObject } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import Layout from "./pages/Layout";
import PrivateRoute from "./components/PrivateRoute";

// Definerer ruterne for applikationen. Hver rute er associeret med en sti og en komponent, der skal vises.
const routes: RouteObject[] = [
  {
    // Basisruten der viser 'Layout' komponenten og har forskellige under-ruter (Children).
    path: "/",
    element: <Layout />,
    children: [
      // Standardruten, der viser 'HomePage' komponenten.
      { index: true, element: <HomePage /> },
      // Rute til produktside, bruger en parameter 'productID' til at vise specifikke produkter.
      { path: "products/:productID", element: <ProductPage /> },
      // Rute til loginside.
      { path: "login", element: <LoginPage /> },
      // Rute til admin-side, som er beskyttet af 'PrivateRoute' for at sikre adgangskontrol.
      {
        path: "admin",
        element: (
          <PrivateRoute element={<AdminPage />} />
        ),
      },
      // Her kan yderligere under-ruter tilføjes efter behov.
    ],
  },
  // Yderligere overordnede ruter kan defineres her.
];

// Opretter en router med de definerede ruter.
const router = createBrowserRouter(routes);

// Eksporterer routeren for brug i resten af applikationen.
export default router;