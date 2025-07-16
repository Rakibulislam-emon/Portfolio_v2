import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import Portfolio from "../components/pages/Portfolio/Portfolio";

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
      }
    ],
  },
]);
