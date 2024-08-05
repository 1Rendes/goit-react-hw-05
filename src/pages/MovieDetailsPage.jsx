import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense } from "react";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";
import BackLinkButton from "../components/BackLinkButton";
import toast, { Toaster } from "react-hot-toast";
import placeholder from "../img/placeholder-image.webp";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const endpoint = `/movie/${id}`;
  const { data, loading, error } = useFetch(endpoint);
  const location = useLocation();
  const backLink = location.state ?? "/movies";
  error && toast.error(error);

  return (
    <main>
      <Toaster />
      <div>
        <BackLinkButton to={backLink} />
        <img
          src={
            data.backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
              : placeholder
          }
          alt=""
        />
        <h2>{data.title}</h2>
        <p>
          <b>User score:</b> {`${data.vote_average * 10}%`}
        </p>
        <p>
          <b>Release date:</b>{" "}
          {data.release_date && data.release_date.split("-").join(".")}
        </p>
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
