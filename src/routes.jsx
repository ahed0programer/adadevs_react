import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        //{ path: '/', element: <Home /> },
        //{ path: '/products', element: <Products /> },
        //{ path: '/members', element: <Members /> },
        //{ path: '/faqs', element: <FAQs /> },
        //{ path: '/contact', element: <ContactUs /> },
      ],
    },
  ]);