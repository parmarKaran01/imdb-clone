import { useEffect, useState } from "react";
import Genres from "../components/Genres";
import MovieCard from "../components/MovieCard";
import useGenre from "../hooks/useGenre";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreUrl = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=7c0d2e2ad0710677939412e6affc23c7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${genreUrl}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results)
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [selectedGenres]);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-10">
      <div>
        <Genres
          genres={genres}
          setGenres={setGenres}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      </div>
      <div className="mt-[50px] w-full flex items-center flex-row flex-wrap justify-evenly gap-8">
        {movies &&
          movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                title={movie.original_title || movie.name}
                id={movie.id}
                rating={movie.vote_average}
                genres={genres}
                img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            );
          })}
      </div>
    </div>
  );
}
