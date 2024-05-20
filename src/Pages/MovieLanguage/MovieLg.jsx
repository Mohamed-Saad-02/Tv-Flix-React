import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieDiscover } from "../../services/apiMovies";
import MoviCard from "../../components/MoviCard";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";
import Loader from "../../components/Loader";

export default function MovieLg() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const language = searchParams.get("language");
  const page = searchParams.get("page");

  const [count, setCount] = useState(Number(page));

  const lg = language.slice(0, 2);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      const data = await getMovieDiscover("", page, lg);
      setMovies(data);
      setCount(page);
      setIsLoading(false);
    }
    getMovies();
  }, [lg, page]);

  const { results } = movies;

  const handleNextPage = () => {
    setCount(Number(page) + 1);
    setSearchParams({ language: language, page: Number(page) + 1 });
  };

  const handleBackPage = () => {
    setCount(Number(page) - 1);
    setSearchParams({ page: Number(page) - 1, language: language });
  };

  return (
    <article className="px-7 pt-6 pb-12 h-full overflow-y-scroll relative">
      {isLoading && <Loader />}
      {!isLoading && (
        <section key={lg}>
          <h1 className="text-5xl font-bold mt-12 text-center capitalize text-zinc-200">
            All {language} Movies
          </h1>
          <div className="mt-20 flex items-center justify-center sm:justify-around md:justify-between gap-4 flex-col sm:flex-row sm:flex-wrap">
            {results?.map((movie) => (
              <div
                className="mb-8 w-full sm:w-fit flex items-center justify-center"
                key={movie.id}
              >
                <MoviCard movie={movie} />
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            {count > 1 && (
              <span>
                <Button type="four" onClick={handleBackPage}>
                  <Icon type="second" kind="navigate_before" />
                </Button>
              </span>
            )}
            <span className="text-xl font-medium">{page}</span>
            <Button type="four" onClick={handleNextPage}>
              <Icon type="second" kind="navigate_next" />
            </Button>
          </div>
        </section>
      )}
    </article>
  );
}
