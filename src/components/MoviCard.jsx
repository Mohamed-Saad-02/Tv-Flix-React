import { formatAverage, formatDate } from "../utls/helper";
import Icon from "../ui/Icon";
import { Link } from "react-router-dom";
import { useMovie } from "../context/moviContext";

const base_url = "https://image.tmdb.org/t/p/";

export default function MoviCard({ movie }) {
  const { id, title, release_date, vote_average, poster_path } = movie;
  const imgBackdrop = base_url + "w342" + poster_path;

  const { dispatch } = useMovie();

  const handleCheck = () => {
    dispatch({ type: "changeSearchQuery", payload: "" });
  };

  const handleLoadImage = (e) => {
    e.target.animate({ opacity: 1 }, { duration: 1000, fill: "forwards" });
  };

  return (
    <Link
      to={`/movieDetail/${id}`}
      title={title}
      onClick={handleCheck}
      className="block"
    >
      <figure className={`min-w-40 lg:w-52 sm:w-48`}>
        <img
          src={imgBackdrop}
          className="rounded-lg w-full sm:h-72 block bg-black opacity-0"
          alt={title}
          loading="lazy"
          onLoad={handleLoadImage}
        />
        <figcaption className="line-clamp-1 text-zinc-300 text-xl font-medium my-2 text-center">
          {title}
        </figcaption>
      </figure>
      <div className="flex items-center justify-around text-zinc-300">
        <span className="flex gap-1 text-yellow-400">
          <Icon type="second" kind="star" />
          <span className="text-zinc-300">{formatAverage(vote_average)}</span>
        </span>
        <span className="bg-[#313036] px-1.5 py-0.5 text-sm rounded-sm font-bold">
          {formatDate(release_date)}
        </span>
      </div>
    </Link>
  );
}
