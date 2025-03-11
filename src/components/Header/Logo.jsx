import { Link } from "react-router-dom";
import { useMovie } from "../../context/moviContext";

export default function Logo() {
  const { dispatch } = useMovie();

  return (
    <div onClick={() => dispatch({ type: "changeSearchQuery", payload: "" })}>
      <Link to="/">
        <img
          className="w-40 h-10"
          loading="lazy"
          src={"/logo.svg"}
          alt="logo"
        />
      </Link>
    </div>
  );
}
