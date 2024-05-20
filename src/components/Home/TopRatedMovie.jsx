import { useEffect, useState } from "react";
import { getMovieTopRated } from "../../services/apiMovies";
import MoviCard from "../MoviCard";

export default function TopRatedMovie() {
  const [movieTop, setMovieTop] = useState([]);

  useEffect(() => {
    async function getTopRated() {
      const data = await getMovieTopRated();
      setMovieTop(data.results);
    }
    getTopRated();
  }, []);

  return (
    <section className="mt-8 relative h-96 sm:h-[450px]">
      <h2 className="text-2xl text-zinc-400 font-bold">Top Rated Movie</h2>
      <div className="mt-8">
        <div className="top-rated absolute left-0 w-full flex gap-4 overflow-hidden overflow-x-auto pb-4">
          {movieTop.map((movie) => (
            <MoviCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
