import DiscoverSlider from "./DiscoverSlider";
import DiscoverBanner from "./DiscoverBanner";
import { useEffect, useRef, useState } from "react";
import { getMovieDiscover } from "../../../services/apiMovies";

export default function DiscoverMovies() {
  const [movies, setMovies] = useState([]);
  const [currentElementId, setCurrentElementId] = useState();
  const moviesID = useRef([]);
  const indexMovie = useRef(0);

  useEffect(() => {
    async function getMovie() {
      const data = await getMovieDiscover();
      setMovies(data.results);
      setCurrentElementId(data.results[0].id);
      moviesID.current = data.results.map((movie) => movie.id);
    }
    getMovie();
  }, []);

  useEffect(() => {
    const changeBanner = setInterval(() => {
      if (moviesID.current.length > 0) {
        setCurrentElementId(moviesID.current[indexMovie.current]);
        indexMovie.current++;
      } else {
        clearInterval(changeBanner);
      }

      if (indexMovie.current >= moviesID.current.length) {
        indexMovie.current = 0;
      }
    }, 5000);

    return () => clearInterval(changeBanner);
  }, [moviesID.current.length]);

  return (
    <section className="relative h-[700px] overflow-hidden">
      <div className="movie-banner h-full">
        {movies.map((movie) => (
          <DiscoverBanner
            key={movie.id}
            movie={movie}
            currentElementId={currentElementId}
          />
        ))}
      </div>
      <div className="slider-movie absolute left-0 md:left-5 bottom-0 md:bottom-5 right-0 select-none py-1 pl-4 sm:pl-0 sm:pb-4 rounded-2xl overflow-x-auto">
        <div className="flex gap-3">
          {movies.map((movie) => (
            <DiscoverSlider
              key={movie.id}
              movie={movie}
              moviesID={moviesID}
              indexMovie={indexMovie}
              currentElementId={currentElementId}
              setCurrentElementId={setCurrentElementId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
