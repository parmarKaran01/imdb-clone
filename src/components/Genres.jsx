import { useEffect, useState } from "react";

export default function Genres({
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
}) {
  const handleAdd = (genre) => {
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
      //   console.log(genre);
      setGenres(genres.filter((g) => g.name !== genre.name));
    }
  };

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g.name !== genre.name));
    if (!genres.includes(genre)) {
      setGenres([...genres, genre]);
    }
  };
  const fetchGenres = async () => {
    const url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=7c0d2e2ad0710677939412e6affc23c7";
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.genres)
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);
  return (
    <div className="w-full h-full mt-[100px] ">
      <h1 className="text-3xl font-bold text-center">Select Genres</h1>
      <div className="flex flex-row flex-wrap gap-4 px-10 mt-4">
        {selectedGenres &&
          selectedGenres.map((genre) => {
            return (
              <div
                key={genre.id}
                className="w-[8rem] h-8 bg-slate-900 rounded-full flex flex-col items-center justify-center text-sm text-white cursor-pointer"
                onClick={() => handleRemove(genre)}
              >
                {genre.name}
              </div>
            );
          })}
        {genres &&
          genres.map((genre) => {
            return (
              <div
                key={genre.id}
                className="w-[8rem] h-8 bg-slate-500 rounded-full flex flex-col items-center justify-center text-sm text-white cursor-pointer"
                onClick={() => handleAdd(genre)}
              >
                {genre.name}
              </div>
            );
          })}
      </div>
    </div>
  );
}
