import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const MovieCast = () => {
  const { id } = useParams();
  const endpoint = `/movie/${id}/casts`;
  const { data, loading, error } = useFetch(endpoint);
  return (
    data.cast && (
      <ul>
        {data.cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt=""
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default MovieCast;
