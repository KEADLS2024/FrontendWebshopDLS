// Import necessary modules from 'react-router-dom' to handle routing within the application.
// 'react-router-dom' allows for client-side navigation without page reloads, which is essential for SPA behavior.
import { createBrowserRouter, RouteObject } from "react-router-dom";

// Import page components that represent different navigable views within the SPA.
// These components will be dynamically rendered based on the URL path, without a full page refresh.
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import Layout from "./pages/Layout";

// Import the PrivateRoute component which is a higher-order component to wrap around routes that require authentication.
import PrivateRoute from "./components/PrivateRoute";

// Define the routes for the application. Each route is associated with a path and a component that should be displayed.
// The routes array is a configuration that 'react-router-dom' uses to dynamically render components as users navigate the SPA.
const routes: RouteObject[] = [
  {
    // The base route that renders the 'Layout' component and has various child routes.
    // 'Layout' acts as a persistent structure around which the child components (pages) will change.
    path: "/",
    element: <Layout />,
    children: [
      // The default route that displays the 'HomePage' component when the user navigates to the root path.
      { index: true, element: <HomePage /> },
      // Route for the product page, using a 'productID' parameter to display specific products.
      // This demonstrates SPA's ability to handle dynamic routing with parameters.
      { path: "products/:productID", element: <ProductPage /> },
      // Route to the login page. This is a standalone route without child routes.
      { path: "login", element: <LoginPage /> },
      // Route to the admin page, which is wrapped with 'PrivateRoute' to ensure access control.
      // 'PrivateRoute' is a guard that checks for user authentication before rendering the 'AdminPage'.
      {
        path: "admin",
        element: (
          <PrivateRoute element={<AdminPage />} />
        ),
      },
      // Additional child routes can be added here as the application grows.
    ],
  },
  // Further top-level routes can be defined here if needed.
];

// Create a router instance with the defined routes.
// The 'router' object encapsulates the entire routing logic for the SPA, delegating to specific components as per the URL.
const router = createBrowserRouter(routes);

// Export the router for use throughout the rest of the application.
// This export is typically used in the root component to set up the routing context for the SPA.
export default router;
