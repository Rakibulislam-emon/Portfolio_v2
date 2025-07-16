import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import App from "../App";
import PageLoader from "../components/common/PageLoader";

// Lazy load pages for better performance
const Home = lazy(() => import("../components/pages/Home/Home"));
const About = lazy(() => import("../components/pages/About/About"));
const Portfolio = lazy(() => import("../components/pages/Portfolio/Portfolio"));
const Blog = lazy(() => import("../components/pages/Blog/Blog"));
const Contact = lazy(() => import("../components/pages/Contact/Contact"));
const NotFound = lazy(() => import("../components/pages/NotFound/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/portfolio",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
