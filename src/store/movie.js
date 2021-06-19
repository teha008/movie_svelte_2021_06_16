import axios from "axios";

export async function searchMovies(payload) {
  const { title, type, year, number } = payload;
  const OMDB_API_KEY = "d1d9a944";

  const res = await axios(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`,
  );
  console.log(res);
}
