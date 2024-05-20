import { Link } from "react-router-dom";
import Icon from "../../../ui/Icon";
import { formatAverage, formatDate } from "../../../utls/helper";
const base_url = "https://image.tmdb.org/t/p/";

export default function DiscoverBanner({ movie, currentElementId }) {
  const { backdrop_path, id, title, vote_average, release_date, overview } =
    movie;

  const imgBackdrop = base_url + "w1280" + backdrop_path;

  return (
    <div
      className={`${
        currentElementId === id ? "block" : "hidden"
      } absolute left-0 top-0 before:bg-black/50 before:w-full w-full h-full before:h-full before:absolute before:left-0 before:top-0 rounded-lg overflow-hidden text-zinc-400`}
    >
      <img
        draggable="false"
        className="object-cover w-full h-[500px] md:h-[700px] select-none transition-all duration-1000"
        src={imgBackdrop}
        alt={title}
      />
      <div className="absolute left-3 sm:left-12 bottom-1/2 translate-y-1/2 md:max-w-[500px]">
        <h2 className="md:text-6xl text-4xl font-bold md:font-medium text-white mb-2">
          {title}
        </h2>
        <div className="pl-1 space-y-4">
          <p className="space-x-4">
            <span>{formatDate(release_date)}</span>
            <span className="bg-[#313036] px-1.5 py-0.5 text-sm rounded-sm font-bold text-zinc-300">
              {formatAverage(vote_average)}
            </span>
          </p>
          <p title={overview} className="line-clamp-2 ms:max-w-60 pr-4 md:pr-0">
            {overview}
          </p>
          <Link
            className="flex items-center justify-center bg-[#db0028] px-5 py-3 gap-2 rounded-md w-fit text-zinc-100 hover:text-zinc-500 transition-colors"
            to={`/movieDetail/${id}`}
          >
            <Icon type="second" kind="play_circle" /> Watch Now
          </Link>
        </div>
      </div>
    </div>
  );
}
