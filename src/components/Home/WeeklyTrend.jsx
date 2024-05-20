import { useEffect, useState } from "react";
import { getMovieTrending } from "../../services/apiMovies";
import MoviCard from "../MoviCard";

export default function WeekTrending() {
  const [movieTrending, setMovieTrending] = useState([]);

  useEffect(() => {
    async function getTopRated() {
      const data = await getMovieTrending();
      setMovieTrending(data.results);
    }
    getTopRated();
  }, []);

  return (
    <section className="mt-8 relative h-96 sm:h-[450px]">
      <h2 className="text-2xl text-zinc-400 font-bold">
        Weekly Trending Movie
      </h2>
      <div className="mt-8">
        <div className="trending-movie absolute left-0 w-full flex gap-4 overflow-hidden overflow-x-auto pb-4">
          {movieTrending.map((movie) => (
            <MoviCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
