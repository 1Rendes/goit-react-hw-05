import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";
import MovieDetailsPage from "./MovieDetailsPage";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState("");
  const [query, setQuery] = useState("");
  axios.defaults.baseURL = "https://api.themoviedb.org/3";

  useEffect(() => {
    if (!query) return;
    const params = {
      params: { language: "en-US" },
      api_key: "a4235cfcff6946cc81f3ca1da1ed5af7",
    };
    async function fetchMovies(q) {
      try {
        const responce = await axios("/search/movie", {
          params: { query: q, ...params },
        });
        if (responce.data.results.lenght > 0) {
          setSearchMovies(responce.data);
        } else toast.error("В базе данных найдено 0 записей");
        console.log(responce.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies(query);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();
    if (!query) {
      toast.error("Please fill the request");
    } else setQuery(query);
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">find!</button>
      </form>
      {searchMovies && (
        <MovieList movieList={searchMovies}>MoviesPage</MovieList>
      )}
    </div>
  );
};

export default MoviesPage;
