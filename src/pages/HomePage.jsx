/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";
import MovieDetailsPage from "./MovieDetailsPage";
import axios from "axios";
import { useEffect, useState } from "react";
import css from "./test.module.css";

const HomePage = () => {
  const [movieList, setMovieList] = useState("");
  axios.defaults.baseURL = "https://api.themoviedb.org/3";
  useEffect(() => {
    const params = {
      params: { language: "en-US" },
      api_key: "a4235cfcff6946cc81f3ca1da1ed5af7",
    };
    async function fetchHomePageMovies() {
      const responce = await axios("/trending/movie/day", { params });
      setMovieList(responce.data);
    }
    fetchHomePageMovies();
  }, []);

  movieList && console.log(movieList);

  return (
    <div className={css.test}>
      Trendings today:
      {movieList && <MovieList movieList={movieList} />}
    </div>
  );
};

export default HomePage;
