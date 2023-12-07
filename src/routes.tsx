import { createBrowserRouter } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "products/:productID", element: <ProductPage /> },
      { path: "admin", element: <AdminPage/>},
    ],
  },
]);

export default router;