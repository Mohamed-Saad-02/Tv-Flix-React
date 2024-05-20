import { memo } from "react";
import { Link, useParams } from "react-router-dom";
import { useMovie } from "../../../context/moviContext";

function GenreItem({ listMovie }) {
  const { listId } = useParams();
  const { id, name } = listMovie;

  const { dispatch, isActiveList } = useMovie();

  const handleClick = () => {
    dispatch({ type: "changeSearchQuery", payload: "" });

    isActiveList && dispatch({ type: "activeSidbar" });
  };

  return (
    <li
      onClick={handleClick}
      className={`${
        id === Number(listId) ? "text-zinc-200" : ""
      } text-lg cursor-pointer hover:text-zinc-100 transition-all duration-300 w-fit pr-20`}
      id={id}
    >
      <Link to={`/movie-list/${id}?page=1&name=${name}`}>{name}</Link>
    </li>
  );
}

export default memo(GenreItem);
