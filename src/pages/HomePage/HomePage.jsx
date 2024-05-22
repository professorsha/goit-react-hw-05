import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getMoviesTrending } from '../../themoviedb-api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getMoviesTrending()
      .then(data => setMovies(data))
      .finally(() => setLoading(false));
  }, []);
  // console.log(movies.results);
  return (
    <div>
      <h2>Home Page</h2>
      {loading && <b>Loading list trending movies...</b>}
      {movies.length > 0 && <MovieList movies={movies}/> }
    </div>
  );
}
