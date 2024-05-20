import { getMovieDetail } from "../../services/apiMovies";
import MovieDetail from "./MovieDetail";
import MoviesRecommeded from "./MoviesRecommeded";

export default function MovieInformation() {
  return (
    <article className="px-7 pt-6 pb-12 h-full overflow-y-scroll">
      <section className="details">
        <MovieDetail />
        <MoviesRecommeded />
      </section>
    </article>
  );
}

export async function loader({ params }) {
  const movieDetail = await getMovieDetail(params.movieId);

  return movieDetail;
}
