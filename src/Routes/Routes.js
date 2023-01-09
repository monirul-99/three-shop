import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Main";
import BlogDetails from "../Pages/Home/Blogs/BlogDetails";
import Home from "../Pages/Home/Home";
import { ProductsDetails } from "../Pages/Home/Products/ProductsDetails";
import MyOrders from "../Pages/MyOrders/MyOrders";
import Payment from "../Pages/MyOrders/Payments";
import SearchShop from "../Pages/Shop/SearchShop";
import Shop from "../Pages/Shop/Shop";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import WishList from "../Pages/WishList/WishList";

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
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/payments-page",
        element: <Payment />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/search-shop",
        element: <SearchShop />,
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
