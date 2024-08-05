import MovieList from "../components/MovieList";
import { useFetch } from "../hooks/useFetch";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  const endpoint = "/trending/movie/day";
  const { data, loading, error } = useFetch(endpoint);
  error && toast.error(error);

  return (
    <div>
      <Toaster />
      Trendings today:
      {data.results && <MovieList movieList={data.results} />}
    </div>
  );
};

export default HomePage;
