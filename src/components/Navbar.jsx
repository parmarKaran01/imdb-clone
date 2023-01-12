import { FilmIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full h-[70px] bg-slate-500 flex flex-row items-center pl-10 fixed z-50">
      <span className="">
        <Link to="/">
          <FilmIcon className="w-[5vw] h-[7vh]" />
        </Link>
      </span>
      <span className="flex flex-row items-center justify-evenly w-1/6 ">
        <Link to="/movies">
          <div className="text-sm pl-10 md:text-lg lg:text-xl cursor-pointer">
            Movies
          </div>
        </Link>
        <Link to="/favourites">
          <div className="text-sm pl-10 md:text-lg lg:text-xl cursor-pointer">
            Favourites
          </div>
        </Link>
      </span>
    </div>
  );
}
