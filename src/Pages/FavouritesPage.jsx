import { useDispatch, useSelector } from "react-redux";
import { favState } from "../redux/favouriteSlice";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

export default function FavouritesPage() {
  const dispatch = useDispatch();
  const favMovies = useSelector(favState);
  if (favMovies.length === 0) {
    return (
      <div className="mt-[100px]">
        <div>No Favourite Movies Added</div>
        <Link to="/movies">
          <button>Discover Movies</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full flex items-center flex-row flex-wrap justify-center mt-[100px] gap-8 px-5">
        {favMovies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              title={movie.original_title || movie.name}
              id={movie.id}
              rating={movie.vote_average}
              img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              showRemoveBtn = {true}
            />
          );
        })}
      </div>
    </div>
  );
}
