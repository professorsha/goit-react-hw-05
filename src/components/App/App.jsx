import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';

import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from '../MovieCast/MovieCast';

import MovieReviews from '../MovieReviews/MovieReviews';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
        <hr />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="receipt" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
