import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b5278d9cb671417837e9caec82d9791a';

export const getMoviesTrending = async () => {
  const response = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&language=en-US`
  );

  return response.data.results;
};
export const fetchMovieDetails = async movieId => {
  //  console.log('fetchMovieDetails - '+ movieId);
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
   return response.data;
};

export const getMovieSearch = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  // console.log('-------getMovieSearch');
  // console.log(response.data);
  return response.data.results;
};

