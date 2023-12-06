import MovieListItem from 'components/MoviesListItem/MoviesListItem';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
    </ul>
  );
};

export default MoviesList;
