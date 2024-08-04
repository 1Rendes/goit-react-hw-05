import MovieList from "../components/MovieList";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFetch } from "../hooks/useFetch";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const endpoint = "/search/movie";

  const { data, loading, error } = useFetch(endpoint, query);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();
    if (!query) {
      toast.error("Please fill the request");
    } else setQuery(query);
  };
  if (data.total_results === 0) toast.error("В базе данных найдено 0 записей");
  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">find!</button>
      </form>
      {data.results && (
        <MovieList movieList={data.results}>MoviesPage</MovieList>
      )}
    </div>
  );
};

export default MoviesPage;
