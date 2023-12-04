import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/layout/layout.jsx";
import Login from "./pages/login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import SingleProduct from "./pages/single-product.jsx";
import About from "./pages/about.jsx";
import Products from "./pages/products.jsx";
import ProductList from "./pages/products-list";
import AllProducts from "./pages/all-products.jsx";
import CreateProducts from "./pages/create-products.jsx";
import LayoutAdmin from "./components/layout/layoutAdmin.jsx";
import UpdateProduct from "./pages/updata-product.jsx";
import DeleteProduct from "./pages/delete-product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "",
            element: <ProductList />,
          },
          {
            path: ":id",
            element: <SingleProduct />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/create-products",
        element: <CreateProducts />,
      },
      {
        path: "/update-product",
        element: <UpdateProduct />,
      },
      {
        path: "/delete-product",
        element: <DeleteProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
