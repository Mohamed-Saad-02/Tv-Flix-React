import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ children, to }) {
  const nvaigate = useNavigate();

  if (to === -"1")
    return <button onClick={() => nvaigate(-1)}>{children}</button>;

  return <Link to={to}>{children}</Link>;
}
