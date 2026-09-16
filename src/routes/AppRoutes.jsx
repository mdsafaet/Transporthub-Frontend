import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayouts from './../layouts/MainLayouts';
import Home from "../pages/Home";
import Login from "../pages/Login";
import RequestQuote from "../pages/RequestQuote";
import Insights from "../pages/Insights";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Schedules from "../pages/Schedules";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/insights',
        element: <Insights />
      },
      {
        path:'/about',
        element: <AboutPage />
      },{
        path:'/contact',
        element: <ContactPage />
      },{
        path:'/schedules',
        element: <Schedules />
      }
   


    ],
  
  },
  {
    path: "/login",
    element: <Login />,
  },
     {
        path: "/request-quote",
        element: <RequestQuote />,
      }
]);

export default router;