// import { useState } from 'react';
// import css from './App.module.css';
import axios from "axios";
function App() {
  const url =
  'https://api.themoviedb.org/3/movie/11';

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTI3OGQ5Y2I2NzE0MTc4MzdlOWNhZWM4MmQ5NzkxYSIsInN1YiI6IjY2NDlhNjIxZmNhYjNiNWI1MTc5NTI2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.krPfG-zy_1fi8XZrSHctf58yeS0f8yxRl7oWrbevXW0',
  },params: {
    query: "start",
    page: 1,
    hitsPerPage: 5,
  },
};

axios
  .get(url, options)
  .then(response => console.log(response.data))
  .catch(err => console.error(err));


  return (
    <>
      <div>
        </div>
    </>
  )
}

export default App;
