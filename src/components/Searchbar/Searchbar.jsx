import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik';
import { fetchApiSearch } from 'api/fetchApi';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { FormikForm, FormButton, FormikInput } from './Searchbar.styled';

const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const handleSubmit = ({ value }) => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (searchParams.get('query')) {
      const searchMovies = async () => {
        try {
          const data = await fetchApiSearch(searchParams.get('query'));

          setMovies(data.results);
          if (data.total_results === 0) {
            toast.warn('Nothing found! Try again, please.');
            return;
          }
          if (data.total_results > 1) {
            toast.success(`Hooray! We found movies `);
          }
        } catch (error) {
          setError(error.response.data);
        } finally {
          setIsLoading(false);
        }
      };

      searchMovies();
    }
  }, [searchParams]);

  return (
    <>
      <ToastContainer />
      {error && toast.error(error)}

      <Formik initialValues={{ value: '' }} onSubmit={handleSubmit}>
        <FormikForm>
          <FormikInput
            type="text"
            name="value"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <FormButton type="submit"></FormButton>
        </FormikForm>
      </Formik>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </>
  );
};

export default Searchbar;
