import { Link } from "react-router-dom";

export default function ListLanguage() {
  return (
    <div>
      <h2 className="text-white text-2xl font-medium mb-8">Language</h2>
      <ul className="space-y-3">
        <li className="text-lg cursor-pointer hover:text-zinc-100 transition-all duration-300 w-fit pr-20">
          <Link to={"/movie-lg?language=englich&page=1"}>English</Link>
        </li>
        <li className="text-lg cursor-pointer hover:text-zinc-100 transition-all duration-300 w-fit pr-20">
          <Link to={"/movie-lg?language=arabic&page=1"}>Arabic</Link>
        </li>
        <li className="text-lg cursor-pointer hover:text-zinc-100 transition-all duration-300 w-fit pr-20">
          <Link to={"/movie-lg?language=hindi&page=1"}>Indian</Link>
        </li>
      </ul>
    </div>
  );
}
