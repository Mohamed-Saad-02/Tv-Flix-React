import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as listLoader } from "./ui/AppLayout";
import { loader as detailLoader } from "./Pages/MovieInformation/MovieInformation";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Home = lazy(() => import("./components/Home/Home"));
const MoviList = lazy(() => import("./Pages/MovieList/MoviList"));
const MovieLg = lazy(() => import("./Pages/MovieLanguage/MovieLg"));
const MovieInformation = lazy(() =>
  import("./Pages/MovieInformation/MovieInformation")
);
const Error = lazy(() => import("./ui/Error"));

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      loader: listLoader,

      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <MoviList />,
          path: "/movie-list/:listId",
        },
        {
          element: <MovieLg />,
          path: "/movie-lg",
        },
        {
          element: <MovieInformation />,
          path: "/movieDetail/:movieId",
          loader: detailLoader,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}
