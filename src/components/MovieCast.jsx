import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import placeholder from "../img/placeholder-actor.jpg";
import toast, { Toaster } from "react-hot-toast";

const MovieCast = () => {
  const { id } = useParams();
  const endpoint = `/movie/${id}/casts`;
  const { data, loading, error } = useFetch(endpoint);
  error && toast.error(error);
  return (
    <>
      <Toaster />
      {data.cast && (
      <ul>
        {data.cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : placeholder
              }
              alt=""
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
      )}
    </>
  );
};

export default MovieCast;
