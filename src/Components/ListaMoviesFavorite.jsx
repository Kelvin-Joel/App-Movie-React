import { StoreMovies } from "../Store/Store";
import "../Styles/ListMoviesFavorite.css";

const ListaMoviesFavorite = () => {
  const { bd,favoriteMoviesListState,showListMoviesFavorite,deleteMoviesFavorite } = StoreMovies();
  return (
    <div className={`container-movies-favoite ${favoriteMoviesListState ? "block" : "hidden"}`}>
      <h2>List Movies Favorite</h2>
      <button className="btn-delete" onClick={showListMoviesFavorite}>Close</button>
      <div className="listmoviesfavorite">
        {bd.map((movie) => (
          <div key={movie.id} className="card-movie">
            <img
              className="card-img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
              alt=""
            />
            <h3>{movie.title}</h3>
            <button className="btn-delete" onClick={()=>deleteMoviesFavorite(movie)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaMoviesFavorite;
