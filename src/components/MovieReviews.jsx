import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const MovieReviews = () => {
  const { id } = useParams();
  const endpoint = `/movie/${id}/reviews`;
  const { data, loading, error } = useFetch(endpoint);
  return (
    data.results && (
      <ul>
        {data.results.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default MovieReviews;
