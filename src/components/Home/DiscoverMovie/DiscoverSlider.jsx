const base_url = "https://image.tmdb.org/t/p/";

export default function DiscoverSlider({
  movie,
  currentElementId,
  setCurrentElementId,
  moviesID,
  indexMovie,
}) {
  const { poster_path, id, title } = movie;
  const imgPosterPath = base_url + "w154" + poster_path;

  const handleClick = () => {
    setCurrentElementId(id);
    indexMovie.current = moviesID.current.indexOf(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-[100px] shrink-0 ${
        currentElementId === id
          ? ""
          : "before:bg-black/50 before:w-full before:h-full before:absolute before:left-0 before:top-0"
      } rounded-lg overflow-hidden relative`}
      title={title}
    >
      <img
        loading="lazy"
        className="w-full object-cover select-none h-full"
        draggable="false"
        src={imgPosterPath}
        alt={title}
      />
    </button>
  );
}
