import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Card from "../pages/cards/Card";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UserProfile from "../pages/UserProfile/UserProfile";
import OurFullTeam from "../OurFullTeam/OurFullTeam";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/cards.json')
      },
      {
        path: "/card/:id",
        element: <PrivateRoute><Card /></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/user",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/ourfullteam",
        element: <OurFullTeam></OurFullTeam>
      }

    ]
  },
]);

export default routes;