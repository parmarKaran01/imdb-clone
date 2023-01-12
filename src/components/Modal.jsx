import { useState } from "react";
export default function Modal({ children, title, img, movie , genres}) {
  const [showModal, setShowModal] = useState(false);
  const displayModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <div
        className="w-[270px] h-[55vh] bg-slate-900 text-white rounded-lg flex flex-col items-center justify-around cursor-pointer hover:scale-105 ease-in-out duration-200"
        onClick={() => displayModal()}
      >
        {children}
      </div>
      {showModal && (
        <div
          className="fixed z-[50] top-[14vh] bg-black w-[70vw] h-[80vh] rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] text-white flex flex-row items-center justify-evenly"
          onClick={() => setShowModal(false)}
        >
          <div className="w-2/5 h-full flex items-center justify-start pl-8">
            <img
              src={img}
              alt="poster"
              className="w-[25vw] h-[55vh] object-cover rounded-lg "
            />
          </div>
          <div className="w-2/3 h-full flex flex-col justify-center pl-8">
            <h1 className="text-3xl font-bold w-full flex justify-start">{movie.title || movie.name}</h1>
            <div className="w-full flex flex-row items-center justify-start gap-5">
              <p className="text-lg">{movie.release_date}</p>

              {/* fix that genre id thing */}
              {/* <p>{movie.genre_ids.map((id) => )}</p> */}
            </div>
            <div className="w-11/12">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
