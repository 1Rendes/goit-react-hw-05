import { Link } from "react-router-dom";
import MovieCast from "../components/MovieCast";
import MovieReviews from "../components/MovieReviews";

const MovieDetailsPage = () => {
  return (
    <div>
      <Link to="movie-cast" element={<MovieCast />}>
        Movie Cast
      </Link>
      <Link to="movie-reviews" element={<MovieReviews />}>
        Movie Reviews
      </Link>
    </div>
  );
};

export default MovieDetailsPage;
