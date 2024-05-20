import { useLoaderData, useNavigation } from "react-router-dom";
import { getMovieCredits } from "../../services/apiMovies";
import Icon from "../../ui/Icon";
import { useEffect, useState } from "react";
import { formatAverage, formatDate, formatTime } from "../../utls/helper";
import MovieTrailer from "./MovieTrailer";
import Loader from "../../components/Loader";

const base_url = "https://image.tmdb.org/t/p/";

export default function MovieDetail() {
  const [starring, setStarring] = useState([]);
  const movieDetail = useLoaderData();

  const { state } = useNavigation();

  const {
    id,
    title,
    poster_path,
    vote_average,
    release_date,
    runtime,
    overview,
    genres,
  } = movieDetail;

  useEffect(() => {
    async function getStarring() {
      const data = await getMovieCredits(id);
      setStarring(data);
    }

    getStarring();
  }, [id]);

  const genre = genres?.map((el) => el.name).join(", ");
  const { cast, crew } = starring;

  const casts = cast
    ?.filter((el) => el?.known_for_department === "Acting")
    .map((el) => el?.name)
    .join(", ");
  const director = crew
    ?.filter((el) => el?.department === "Directing")
    .map((el) => el?.name)
    .join(", ");

  const imgPoster = base_url + "w342" + poster_path;

  const handleLoadImage = (e) => {
    e.target.animate({ opacity: 1 }, { duration: 1000, fill: "forwards" });
  };

  return (
    <div className="flex items-start gap-8 flex-col lg:flex-row">
      {state === "loading" && <Loader />}
      {state === "idle" && (
        <>
          <div className="shrink-0 lg:sticky lg:top-0 w-full md:w-fit flex md:block justify-center lg:justify-start mx-auto">
            <img
              loading="lazy"
              src={imgPoster}
              alt={title}
              className="w-[300px] rounded-lg h-[450px] sticky opacity-0 bg-black"
              onLoad={handleLoadImage}
            />
          </div>
          <div className="flex-1 text-zinc-400 space-y-4 text-center md:text-start">
            <h2 className="text-3xl sm:text-5xl text-zinc-100 font-bold mt-6 text-center lg:text-start">
              {title}
            </h2>
            <div className="flex items-center gap-3 mt-4 text-lg justify-center lg:justify-start">
              <span className="flex items-center gap-2 text-yellow-300">
                <Icon kind="star" type="second" />
                <span className="text-zinc-400">
                  {formatAverage(vote_average)}
                </span>
              </span>
              .<span>{formatTime(runtime)}</span>.
              <span>{formatDate(release_date)}</span>
            </div>
            <div className="text-center lg:text-start">
              <span className="text-[18px]">{genre}</span>
            </div>
            <p className="text-xl text-zinc-200">{overview}</p>
            <div className="flex gap-4 flex-wrap sm:flex-nowrap">
              <h4 className="min-w-[112px] text-[18px]">Starring:</h4>
              <p className="text-xl text-zinc-200 line-clamp-3" title={casts}>
                {casts}
              </p>
            </div>
            <div className="flex gap-4 flex-wrap sm:flex-nowrap">
              <h4 className="min-w-[112px] text-[18px]">Directed By:</h4>
              <p className="text-xl text-zinc-200">{director}</p>
            </div>
            <MovieTrailer id={id} />
          </div>
        </>
      )}
    </div>
  );
}
