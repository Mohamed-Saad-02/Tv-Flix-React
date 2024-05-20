import { useEffect, useState } from "react";
import { getMoviesRecommend } from "../../services/apiMovies";
import { useNavigation, useParams } from "react-router-dom";
import MoviCard from "../../components/MoviCard";

export default function MoviesRecommeded() {
  const [movieRecommended, setMovieRecommended] = useState([]);

  const { movieId } = useParams();
  const { state } = useNavigation();

  useEffect(() => {
    async function getRecommended() {
      const recommednded = await getMoviesRecommend(movieId);
      setMovieRecommended(recommednded.results);
    }
    getRecommended();
  }, [movieId]);

  return (
    <>
      {state === "idle" && (
        <section className="recommended mt-6 relative">
          <h2 className="text-zinc-200 text-3xl font-medium">
            You May Also Like
          </h2>
          <div className="mt-8">
            <div className="absolute videos left-0 w-full flex gap-4 overflow-hidden overflow-x-auto pb-8">
              {movieRecommended.map((movie) => (
                <div className="cursor-pointer" key={movie.id}>
                  <MoviCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
