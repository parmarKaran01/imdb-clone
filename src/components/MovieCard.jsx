import React, { useState } from "react";
import { MinusSmallIcon, PlusSmallIcon,  } from "@heroicons/react/24/outline";
import {StarIcon} from "@heroicons/react/24/solid"
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, favState, removeFromFav } from "../redux/favouriteSlice";
function MovieCard({ id, title, rating, img, movie , showRemoveBtn, genres}) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const favMovies = useSelector(favState);
  console.log(favMovies);
  return (
    <>
      <Modal
        className="w-[270px] h-[55vh] bg-slate-900 text-white rounded-lg flex flex-col items-center justify-evenly cursor-pointer hover:scale-105 ease-in-out duration-200"
        movie={movie} img={img} genres= {genres}
      >
        <img
          src={img}
          alt="Movie image"
          className="w-[250px] h-[43vh] object-cover rounded-lg "
        />
        {(toggle || showRemoveBtn) ? (
          <button
            onClick={(e) => {
              dispatch(removeFromFav(movie.id));
              setToggle(false);
              e.stopPropagation();
            }}
          >
            <MinusSmallIcon className="bg-white fixed top-2 right-2 text-black w-7 h-7 rounded-2xl" />
          </button>
        ) : (
          <button
            onClick={(e) => {
              if (!favMovies.some((ele) => ele.title === title)) {
                dispatch(addToFav(movie));
                setToggle(true);
                e.stopPropagation()
              }else {
                e.stopPropagation()
                alert("Movie already Added to Favourites")
              }
            }}
          >
            <PlusSmallIcon className="bg-white fixed top-2 right-2 text-black w-7 h-7 rounded-2xl" />
          </button>
        )}

        <div className="flex flex-col items-start w-full px-3">
          <div className="truncate w-4/5">{title}</div>
          <span className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center"><StarIcon className="w-[20px] h-[20px] text-yellow-400"/>{rating.toFixed(1)}</div>
            <div>20-12-2021</div>
          </span>
        </div>
      </Modal>
    </>
  );
}

export default MovieCard;
