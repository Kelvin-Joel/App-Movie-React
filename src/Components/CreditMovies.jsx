import React from "react";
import { DataStore } from "../Store/Fetchdata";
import "../Styles/CreditMovies.css";
const CreditMovies = () => {
  const { detailsMovies,dataMovies,ShowMovieCredits } = DataStore();
  let portadaimg =`https://image.tmdb.org/t/p/w500${detailsMovies.poster_path}`;
  return (
    <div className={`container-credit-movie ${ShowMovieCredits ? 'showcredit' : 'hidden'}`} >
      <div   className="credit-portada" >
        <h2>{detailsMovies.title}</h2>
        <p>{detailsMovies.overview}</p>
      </div>
      <div className="cast"></div>
    </div>
  );
};

export default CreditMovies;
