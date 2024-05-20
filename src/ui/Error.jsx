import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  const { data, status, statusText } = error;

  console.log(data);

  return (
    <div className="text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        {status}
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        {status === 404 ? `Page ${statusText}` : statusText}
      </div>
      <button className="mt-5">
        <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/" replace>
              &larr; Go back
            </Link>
          </span>
        </div>
      </button>
    </div>
  );
}
