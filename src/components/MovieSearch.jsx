import { useEffect, useMemo, useState } from "react";
import { getMoviesBySearch } from "../services/apiMovies";
import { useMovie } from "../context/moviContext";
import MoviCard from "./MoviCard";
import Loader from "./Loader";

export default function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const memoizeMovie = useMemo(() => {
    return movies;
  }, [movies]);

  const { searchQuery } = useMovie();

  useEffect(() => {
    if (searchQuery < 3) return;

    async function getMovies() {
      setIsLoader(true);
      const data = await getMoviesBySearch(searchQuery);
      setMovies(data.results);
      setIsLoader(false);
    }
    getMovies();
  }, [searchQuery]);

  return (
    <article className="px-7 pt-6 pb-12 h-full overflow-y-scroll relative">
      {isLoader && <Loader />}
      {!isLoader && (
        <section>
          <h1 className="text-5xl my-12 capitalize text-center font-medium  text-zinc-200">
            {searchQuery}
          </h1>
          <div className="flex items-center justify-center sm:justify-around md:justify-between gap-4 flex-col sm:flex-row sm:flex-wrap mt-24">
            {memoizeMovie?.map((movie) => (
              <div
                key={movie.id}
                className="mb-8 w-full sm:w-fit flex items-center justify-center"
              >
                <MoviCard movie={movie} />
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
