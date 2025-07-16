import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import Portfolio from "../components/pages/Portfolio/Portfolio";
import Blog from "../components/pages/Blog/Blog";
import Contact from "../components/pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
