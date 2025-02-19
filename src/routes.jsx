import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./scenes/home/";
import GDPR from "./scenes/gdpr/";
import News from "./scenes/news/";
import Contact from "./scenes/contact/";
import Natural from "./scenes/naturalReferencing/";
import Website from "./scenes/websiteCreation/";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gdpr", element: <GDPR /> },
      { path: "/news", element: <News /> },
      { path: "/natural", element: <Natural /> },
      { path: "/contact", element: <Contact /> },
      { path: "/website", element: <Website /> },
    ],
  },
]);
