import DiscoverMovies from "./DiscoverMovie/DiscoverMovies";
import TopRatedMovie from "./TopRatedMovie";
import UpcomingMovie from "./UpcomingMovie";
import WeekTrending from "./WeeklyTrend";

export default function Home() {
  return (
    <>
      <article className="px-7 pt-6 sm:pb-12 h-full overflow-y-scroll">
        <DiscoverMovies />
        <UpcomingMovie />
        <WeekTrending />
        <TopRatedMovie />
      </article>
    </>
  );
}
