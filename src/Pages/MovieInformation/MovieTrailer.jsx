import { useEffect, useState } from "react";
import { getMovieVideos } from "../../services/apiMovies";

export default function MovieTrailer({ id }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getTrailler() {
      const data = await getMovieVideos(id);
      setVideos(data.results);
    }
    getTrailler();
  }, [id]);

  const clips = videos.filter((el) => el.type === "Clip");
  const trailers = videos.filter((el) => el.type === "Trailer");

  return (
    <div>
      <h2 className="text-zinc-200 text-3xl font-medium">Trailers And Clips</h2>
      <div className="trailer pb-4 mt-8 flex gap-6 overflow-hidden h-[500px] sm:h-fit overflow-y-auto sm:snap-x sm:overflow-x-auto relative flex-wrap sm:flex-nowrap">
        {trailers.map((el) => (
          <div
            key={el.id}
            className="aspect-video shrink-0 w-full max-w-[500px]"
          >
            <iframe
              className="rounded-lg w-full h-full sm:snap-center"
              title="Trailler"
              width="500"
              height="294px"
              src={`https://www.youtube.com/embed/${el.key}?&theme=dark&color=white&rel=0`}
            ></iframe>
          </div>
        ))}
        {clips.map((el) => (
          <div
            key={el.id}
            className="aspect-video shrink-0 w-full max-w-[500px]"
          >
            <iframe
              className="rounded-lg w-full h-full"
              title="Trailler"
              width="500"
              height="294px"
              src={`https://www.youtube.com/embed/${el.key}?&theme=dark&color=white&rel=0`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
