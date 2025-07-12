import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
