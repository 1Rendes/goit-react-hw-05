import { Link } from "react-router-dom";

const MovieList = ({ movieList }) => {
  return (
    <ul>
      {movieList.map((result) => (
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
