import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Movie({ id, coverImg, title, avg, overview }) {
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w200';
  return (
    <div>
      <img src={IMG_BASE_URL + coverImg} alt="영화 포스터" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <span>{avg.toFixed(1)}</span>
      <p>{overview}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};
export default Movie;
