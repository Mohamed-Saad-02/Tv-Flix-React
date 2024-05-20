import { useLoaderData } from "react-router-dom";
import GenreItem from "./GenreItem";
import { useMovie } from "../../../context/moviContext";
import { useMemo } from "react";
import ListLanguage from "./ListLanguage";

export default function Sidbar() {
  const list = useLoaderData().genres;
  const listMovie = useMemo(() => {
    return list;
  }, [list]);
  const { isActiveList, dispatch } = useMovie();
  const year = new Date().getFullYear();

  return (
    <>
      {isActiveList && (
        <div
          onClick={() => dispatch({ type: "activeSidbar" })}
          className="absolute bottom-0 left-0 w-full h-[90%] bg-black/20 z-20"
        ></div>
      )}
      <nav
        className={`w-60 overflow-y-scroll space-y-8 xl:translate-x-0 absolute xl:relative ${
          isActiveList
            ? "block border-t bg-black z-30 border-t-zinc-600 w-[300px] translate-x-0  pl-16 transition-all duration-300"
            : "-translate-x-72 w-0 xl:w-fit xl:pl-16 transition-all duration-300"
        }`}
      >
        <h2 className="text-white text-2xl font-medium pt-8">Genre</h2>
        <ul className="space-y-3">
          {listMovie.map((movie) => (
            <GenreItem listMovie={movie} key={movie.id} />
          ))}
        </ul>

        <ListLanguage />

        <div className="border-t-2 py-4 border-zinc-400 mr-2 text-lg max-w-[170px]">
          <p>
            Copyright {year} By{" "}
            <span className="text-zinc-300">
              <a
                href="https://www.linkedin.com/in/mohamed-saad-025268304/"
                target="_blank"
                rel="noreferrer"
              >
                💙 Mohamed-Saad
              </a>
            </span>
          </p>
        </div>
      </nav>
    </>
  );
}
