import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { fetchApiDetails } from 'api/fetchApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import {
  DetailsContainer,
  FormButton,
  TextStyle,
  ListDetails,
  ListItemDetails,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [movieData, setMovieData] = useState({});
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const { id } = useParams();
  const movieId = id;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    const searchMoviesDetails = async () => {
      setIsLoading(true);
      try {
        const data = await fetchApiDetails(movieId);

        setMovieData(data);
        setError('');
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    searchMoviesDetails();
  }, [movieId]);

  const { poster_path, original_title, vote_average, overview, genres } =
    movieData;

  return (
    <>
      <ToastContainer />
      {error && toast.error(error)}
      {isLoading && <Loader />}
      <DetailsContainer>
        <Link to={backLink}>
          <FormButton>Go back</FormButton>
        </Link>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <h2>{original_title}</h2>
        <TextStyle>{`User score: ${Math.round(vote_average * 10)}%`}</TextStyle>
        <h3>Overview</h3>
        <TextStyle>{overview}</TextStyle>
        <h3>Genres</h3>
        {genres && (
          <TextStyle>{genres.map(genre => genre.name).join(', ')}</TextStyle>
        )}
      </DetailsContainer>
      <div>
        <ul>
          <ListDetails>
            <ListItemDetails to="cast" state={backLink}>
              Cast
            </ListItemDetails>
          </ListDetails>
          <ListDetails>
            <ListItemDetails to="reviews" state={backLink}>
              Reviews
            </ListItemDetails>
          </ListDetails>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
