import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
