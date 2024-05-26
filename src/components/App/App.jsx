import { Route, Routes } from 'react-router-dom';
import {lazy, Suspense} from 'react';
// import Navigation from '../Navigation/Navigation';
const Navigation = lazy(() => import("../Navigation/Navigation"));
// import HomePage from '../../pages/HomePage/HomePage';
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// import MoviesPage from '../../pages/MoviesPage/MoviesPage';
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
// import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
