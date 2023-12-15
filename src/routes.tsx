// routes.tsx
import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage"; // Ensure this import is correct
import AdminPage from "./pages/AdminPage";
import Layout from "./pages/Layout";
import PrivateRoute from "./components/PrivateRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/:productID", element: <ProductPage /> }, // Product page route
      { path: "login", element: <LoginPage /> }, // Login route
      {
        path: "admin",
        element: <PrivateRoute path="/admin" element={<AdminPage />} />,
      },
      // ... other child routes ...
    ],
  },
  // ... other top-level routes ...
];

const router = createBrowserRouter(routes);

export default router;