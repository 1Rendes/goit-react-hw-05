import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";
import MovieDetailsPage from "./MovieDetailsPage";

const MoviesPage = () => {
  return (
    <div>
      MoviesPage
      <MovieList>
        <Link to="/movie-details" element={<MovieDetailsPage />}>
          Terminator
        </Link>
      </MovieList>
    </div>
  );
};

export default MoviesPage;
