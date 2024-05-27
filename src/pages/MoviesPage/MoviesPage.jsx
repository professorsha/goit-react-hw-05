import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieSearch } from "../../themoviedb-api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import toast from "react-hot-toast";
import css from "./MoviesPage.module.css";

const notify = (msg) =>
  toast.error(`${msg}`, {
    style: {
      border: "1px solid #000000",
      padding: "16px",
      color: "#000000",
    },
    iconTheme: {
      primary: "#000000",
      secondary: "#f5f5f5",
    },
  });

export default function MoviesPage() {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("movieName") ?? "";
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movieName === "") {
      notify("Please, enter the keyword!");
      return;
    }
    setMoviesList([]);
    setLoading(true);
    const getMovieByKeyword = async (movieName) => {
      try {
        await getMovieSearch(movieName).then((data) => {
          if (!data.length) {
            setLoading(false);
            setError(true);
            return console.log(
              "There is no movies with this request. Please, try again"
            );
          }
          setError(false);
          setMoviesList(data);
        });
      } catch (error) {
        notify("Error, try again!");
      } finally {
        setLoading(false);
      }
    };
    getMovieByKeyword(movieName);
  }, [movieName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };
console.log(moviesList);
  return (
    <main className="container">
      <div className={css.moviesPage}>
        <SearchBar onSubmit={handleSubmit} />
        {error && (
          <p>There is no movies with this request. Please, try again</p>
        )}
        <ul className={css.movieList}>
          <MovieList movies={moviesList}/>
          {/* {moviesList.map((movie) => {
            return (
              <li key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                  className={css.item}
                >
                  {movie.original_title || movie.name}
                </Link>
              </li>
            );
          })} */}
          {loading && <div>LOADING movies PAGE...</div>}
        </ul>
      </div>
    </main>
  );
}