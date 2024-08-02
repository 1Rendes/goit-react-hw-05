import { Link, useParams } from "react-router-dom";
import MovieCast from "../components/MovieCast";
import MovieReviews from "../components/MovieReviews";
import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieById, setMovieById] = useState("");
  const [genres, setGenres] = useState("");
  useEffect(() => {
    const params = {
      params: { language: "en-US" },
      api_key: "a4235cfcff6946cc81f3ca1da1ed5af7",
    };
    async function fetchMovies(id) {
      try {
        const responce = await axios(`/movie/${id}`, { params });
        setMovieById(responce.data);
        const genres = responce.data.genres.map((genre) => genre.name);
        const genresInString = genres.join(", ");
        setGenres(genresInString);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies(id);
  }, []);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieById.backdrop_path}`}
          alt=""
        />
        <h2>{movieById.title}</h2>
        <p>User score: {movieById.vote_average}</p>
        <h3>Overview:</h3>
        <p>{movieById.overview}</p>
        <h3>Genres:</h3>
        <p>{genres}</p>
      </div>
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
