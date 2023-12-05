import { createBrowserRouter } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "products/:productID", element: <ProductPage /> },
    ],
  },
]);

export default router;