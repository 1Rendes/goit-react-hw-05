import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import toast, { Toaster } from "react-hot-toast";

const MovieReviews = () => {
  const { id } = useParams();
  const endpoint = `/movie/${id}/reviews`;
  const { data, loading, error } = useFetch(endpoint);
  error && toast.error(error);
  return data.results > 0 ? (
    <ul>
      <Toaster />
      {data.results.map(({ id, author, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We do not have any reviews for this movie</p>
  );
};

export default MovieReviews;
