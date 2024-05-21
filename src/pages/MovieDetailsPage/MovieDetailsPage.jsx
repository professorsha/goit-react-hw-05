import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
// import MovieCast from '../../components/MovieCast/MovieCast';
// import MovieReviews from '../../components/MovieReviews/MovieReviews'
export default function MovieDetailsPage() {
    const { moviesId } = useParams();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        
         
      }, []);
  return (
    <>
      <h3>MoviDetailsPage {moviesId}</h3>
      {loading && <b>Loading movies info...</b>}
      <ul>
        <li>
          <NavLink to="cast">cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">reviews</NavLink>
        </li>
      </ul>
      
      <Outlet />
    </>
  );
}
