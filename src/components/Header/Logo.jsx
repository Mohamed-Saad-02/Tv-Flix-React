import { Link } from "react-router-dom";
import { useMovie } from "../../context/moviContext";
import img from "../../../public/logo.svg";

export default function Logo() {
  const { dispatch } = useMovie();

  return (
    <div onClick={() => dispatch({ type: "changeSearchQuery", payload: "" })}>
      <Link to="/">
        <img className="w-40 h-10" loading="lazy" src={img} alt="logo" />
      </Link>
    </div>
  );
}
