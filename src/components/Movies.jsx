import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, favState } from "../redux/favouriteSlice";

export default function Movies() {
  const [content, setContent] = useState([]);
  
  useEffect(() => {
    async function fetchContent() {
      const url = `https://api.themoviedb.org/3/trending/all/day?api_key=7c0d2e2ad0710677939412e6affc23c7`;
      const res = await fetch(url);
      const data = await res.json();
      setContent(data.results);
    }

    fetchContent();
  }, []);
  return (
    <div className="w-full h-screen px-8">
      <div className="text-center pt-5 text-3xl">Trending</div>
      <div className="w-full flex items-center flex-row flex-wrap justify-around mt-8 gap-8">
        {content.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie = {movie}
              title={movie.original_title || movie.name}
              id={movie.id}
              rating = {movie.vote_average}
              img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          );
        })}
      </div>
    </div>
  );
}
