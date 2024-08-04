import MovieList from "../components/MovieList";
import css from "./test.module.css";
import { useFetch } from "../hooks/useFetch";

const HomePage = () => {
  const endpoint = "/trending/movie/day";
  const { data, loading, error } = useFetch(endpoint);
  return (
    <div className={css.test}>
      Trendings today:
      {data.results && <MovieList movieList={data.results} />}
    </div>
  );
};

export default HomePage;
