// import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import {Link} from 'react-router-dom';
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
}
