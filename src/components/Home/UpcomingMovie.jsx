import { useEffect, useState } from "react";
import { getMovieUpcoming } from "../../services/apiMovies";
import MoviCard from "../MoviCard";

export default function TopRatedMovie() {
  const [movieUpcoming, setMovieUpcoming] = useState([]);

  useEffect(() => {
    async function getTopRated() {
      const data = await getMovieUpcoming();
      setMovieUpcoming(data.results);
    }
    getTopRated();
  }, []);

  return (
    <section className="mt-8 relative h-96 sm:h-[450px]">
      <h2 className="text-2xl text-zinc-400 font-bold">Upcoming Movie</h2>
      <div className="mt-8">
        <div className="upcoming-movie absolute left-0 w-full flex gap-4 overflow-hidden overflow-x-auto pb-4">
          {movieUpcoming.map((movie) => (
            <MoviCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
