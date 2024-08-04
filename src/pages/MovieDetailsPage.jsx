import { Link, Outlet, useParams } from "react-router-dom";
import { Suspense } from "react";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const endpoint = `/movie/${id}`;
  const { data, loading, error } = useFetch(endpoint);

  return (
    <main>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
          alt=""
        />
        <h2>{data.title}</h2>
        <p>User score: {`${data.vote_average * 10}%`}</p>
        <h3>Overview:</h3>
        <p>{data.overview}</p>
        <h3>Genres:</h3>
        {data.genres && (
          <p>{data.genres.map((genre) => genre.name).join(", ")}</p>
        )}
      </div>
      <ul>
        <li>
          <Link to="cast">Movie Cast</Link>
        </li>
        <li>
          <Link to="reviews">Movie Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsPage;
