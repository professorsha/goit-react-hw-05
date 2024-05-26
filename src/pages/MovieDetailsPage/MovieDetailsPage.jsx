import { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
// import { NavLink, Outlet, useParams } from 'react-router-dom';
import toast from "react-hot-toast";
import {fetchMovieDetails} from '../../themoviedb-api';
import css from './MovieDetailsPage'
// import MovieCast from '../../components/MovieCast/MovieCast';
// import MovieReviews from '../../components/MovieReviews/MovieReviews'
const notify = () =>
  toast.error("Something went wrong. Please, try again!", {
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

  export default function MovieDetailsPage() {
    const [movieDetails, setMovieDetails] = useState({});
    const location = useLocation();
    const {movieId} = useParams();

    useEffect(() => {
      const getMovieDetails = async () => {
        try {
          const data = await fetchMovieDetails(movieId);
  console.log('MovieDetailsPage - '+ movieId);

          setMovieDetails(data);
        } catch (error) {
          notify();
        }
      };
      getMovieDetails();
    }, [movieId]);
  console.log(movieDetails);
    const {original_title, overview, genres, poster_path, vote_average } =
      movieDetails;
    const scoreToFixed = Number(vote_average).toFixed(2);
  
    return (
      
        <div className={css.detailsPage}>
          <Link to={location.state?.from ?? "/"} className={css.goBackLink}>
            {/* <IoArrowBackCircleOutline className={css.icon} /> */}
            Go back
          </Link>
          <div className={css.movieInfo}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : `http://www.suryalaya.org/images/no_image.jpg`
              }
              loading="lazy"
              alt="Movie poster"
              className={css.img}
            />
            <div>
              <h1>{original_title}</h1>
              <p>User score: {scoreToFixed}</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <ul className={css.genreList}>
                {genres &&
                  genres.length &&
                  genres.map(({ id, name }) => <li key={id}>{name}</li>)}
              </ul>
            </div>
          </div>
          <div className={css.addInfo}>
            <h3 className={css.addInfoTitle}>Additional information</h3>
            <ul className={css.infoList}>
              <li className={css.infoItem}>
                <Link
                  to="cast"
                  state={{ ...location.state }}
                  className={css.infoLink}
                >
                  Cast
                </Link>
              </li>
              <li className={css.infoItem}>
                {" "}
                <Link
                  to="reviews"
                  state={{ ...location.state }}
                  className={css.infoLink}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          {/* <Suspense fallback={<Loader />}> */}
            <Outlet />
          {/* </Suspense> */}
        </div>
      
    );
  }
