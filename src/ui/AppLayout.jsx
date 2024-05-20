import { Outlet } from "react-router-dom";
import { getListMovie } from "../services/apiMovies";
import { useMovie } from "../context/moviContext";
import Header from "../components/Header/Header";
import Sidbar from "../components/Main/Sidbar/Sidbar";
import Main from "../components/Main/Main";
import MovieSearch from "../components/MovieSearch";

export default function AppLayout() {
  const { searchQuery } = useMovie();

  return (
    <div className="App text-zinc-500">
      <Header />
      <div className="xl:flex xl:gap-8">
        <Sidbar />
        <Main>{searchQuery.length > 2 ? <MovieSearch /> : <Outlet />}</Main>
      </div>
    </div>
  );
}

export async function loader() {
  const list = await getListMovie();

  return list;
}
