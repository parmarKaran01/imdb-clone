import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import MainPage from "./Pages/MainPage";
import MoviesPage from "./Pages/MoviesPage";
import FavouritesPage from "./Pages/FavouritesPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
