import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movieList }) => {
  const location = useLocation();
  return (
    <ul>
      {movieList.map((result) => (
        <div key={result.id}>
          <Link to={`/movies/${result.id}`} state={location}>
            <li>{result.title}</li>
          </Link>
        </div>
      ))}
    </ul>
  );
};

export default MovieList;
