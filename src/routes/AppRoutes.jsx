import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayouts from './../layouts/MainLayouts';
import Home from "../pages/Home";
import Login from "../pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,

    children: [
      {
        index: true,
        element: <Home />,
      },

    ],
  
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

export default router;