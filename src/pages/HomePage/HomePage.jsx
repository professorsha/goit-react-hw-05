import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getMoviesTrending } from '../../themoviedb-api';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getTrendMovies() {
      setLoading(true);
      try {
        const data = await getMoviesTrending();
        setTrendMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getTrendMovies();
  }, []);
  // console.log(movies.results);
  return (
    <div>
      <h2>Trending Today</h2>
      {loading && <b>Loading list trending movies...</b>}
      <MovieList movies={trendMovies}/> 
    </div>
  );
}

    

  