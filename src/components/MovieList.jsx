import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MovieList = ({ movieList }) => {
  return (
    <ul>
      {movieList.results.map((result) => (
        <div key={result.id}>
          <Link to={`/movies/${result.id}`}>
            <li>{result.title}</li>
          </Link>
        </div>
      ))}
    </ul>
  );
};

export default MovieList;
