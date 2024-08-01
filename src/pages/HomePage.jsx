import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";
import MovieDetailsPage from "./MovieDetailsPage";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [movieList, setMovieList] = useState("");
  axios.defaults.baseURL = "https://api.themoviedb.org";
  const params = {
    params: { language: "en-US" },
    api_key: "a4235cfcff6946cc81f3ca1da1ed5af7",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDIzNWNmY2ZmNjk0NmNjODFmM2NhMWRhMWVkNWFmNyIsIm5iZiI6MTcyMjU1MTEzOS4yODYyNiwic3ViIjoiNjZhYmQ0NWVmMDBmZTllMzBjMGIxZjhmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.95de10CQeRvgLhofh4uKjULGSHi53sxIQUsph9yc-B8",
    },
  };

  useEffect(() => {
    async function fetchHomePageMovies() {
      const responce = await axios("/3/trending/movie/day", { params });
      setMovieList(responce);
    }
    fetchHomePageMovies();
  });

  return (
    <div>
      Trendings today:
      <MovieList>
        <Link to="/movie-details" element={<MovieDetailsPage />}>
          Terminator 2
        </Link>
      </MovieList>
    </div>
  );
};

export default HomePage;
