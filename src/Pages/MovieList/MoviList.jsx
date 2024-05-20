import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getMovieDiscover } from "../../services/apiMovies";
import MoviCard from "../../components/MoviCard";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";
import Loader from "../../components/Loader";

export default function MoviList() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const { listId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const pageMovie = searchParams.get("page");
  const nameTitleMovies = searchParams.get("name");

  const [countPage, setCountPage] = useState(Number(pageMovie));

  useEffect(() => {
    async function getMovie() {
      setLoader(true);
      const dataContent = await getMovieDiscover(listId, pageMovie);
      setMovies(dataContent);
      setCountPage(pageMovie);
      setLoader(false);
    }
    getMovie();
  }, [listId, pageMovie]);

  const { results, page } = movies;

  const handleNextPage = () => {
    setCountPage(Number(pageMovie) + 1);
    setSearchParams({ page: Number(pageMovie) + 1, name: nameTitleMovies });
  };

  const handleBackPage = () => {
    setCountPage(Number(pageMovie) - 1);
    setSearchParams({ page: Number(pageMovie) - 1, name: nameTitleMovies });
  };

  return (
    <article className="px-7 pt-6 pb-12 h-full overflow-y-scroll relative">
      {loader && <Loader />}
      {!loader && (
        <section key={listId}>
          <h1 className="text-5xl font-bold mt-12 text-center text-zinc-200">
            All {nameTitleMovies} Movies
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
            {countPage > 1 && (
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
