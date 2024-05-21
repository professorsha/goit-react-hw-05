import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/';

// const API_KEY = 'b5278d9cb671417837e9caec82d9791a';

// export const getMovies = async (topic, currentPage) => {
//   const response = await axios.get(`/search/photos?client_id=${API_KEY}`, {
//     params: {
//       query: topic,
//       page: currentPage,
//       hitsPerPage: 5,
//     },
//   });
//   return response.data.results;
// };

const url =
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTI3OGQ5Y2I2NzE0MTc4MzdlOWNhZWM4MmQ5NzkxYSIsInN1YiI6IjY2NDlhNjIxZmNhYjNiNWI1MTc5NTI2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.krPfG-zy_1fi8XZrSHctf58yeS0f8yxRl7oWrbevXW0',
  },
  params: {
          query: "start",
          page: 1,
          hitsPerPage: 5,
        },
};

axios
  .get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
