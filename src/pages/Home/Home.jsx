import { useEffect, useState } from 'react';
import { fetchApiTrending } from 'api/fetchApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const trandingMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchApiTrending();
        console.log(data.results);

        setMovies(data.results);
        setError('');
        setIsLoading(false);

        if (!data.results) {
          toast.warn('Nothing found! Try again, please.');
          return;
        }
        if (data.results) {
          toast.success(`Hooray! We found movies.`);
        }
      } catch (error) {
        setError(error.response.data);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    trandingMovies();
  }, []);

  return (
    <div>
      <ToastContainer />
      {error && toast.error(error)}
      {isLoading && <Loader />}
      <h2>Trending today</h2>
      {Boolean(movies.length) && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
