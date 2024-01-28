import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex flex-col  h-screen items-center justify-center mx-auto">
      <p className="font-roboto font-bold text-4xl md:text-7xl">
        Page not found 404
      </p>

      <Link
        className="mt-10 text-4xl md:text-7xl font-roboto text-blue-700 hover:underline"
        to="/"
      >
        Home page
      </Link>
    </div>
  );
}
