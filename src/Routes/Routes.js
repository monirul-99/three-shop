import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Main";
import Home from "../Pages/Home/Home";
import { ProductsDetails } from "../Pages/Home/Products/ProductsDetails";
import Review from "../Pages/Review/Review";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/products-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/card-data/${params.id}`),
        element: <ProductsDetails />,
      },
    ],
  },
]);
