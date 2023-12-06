import { useLocation } from 'react-router-dom';
import { LiStyle, LinkStyle } from './MoviesListItem.styled';
const MovieListItem = ({ movie }) => {
  const location = useLocation();

  return (
    <LiStyle>
      <LinkStyle to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.title}{' '}
      </LinkStyle>
    </LiStyle>
  );
};

export default MovieListItem;
