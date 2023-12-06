import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchApCredits } from 'api/fetchApi';
import Loader from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import {
  ContainerList,
  Image,
  ImageListItems,
  NamaStyle,
  TextStyle,
} from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const movieId = id;
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const searchMoviesCast = async () => {
      setIsLoading(true);
      try {
        const data = await fetchApCredits(movieId);
        console.log(data);
        setCasts(data.cast);
        setError('');
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    searchMoviesCast();
  }, [movieId]);

  return (
    <div>
      <ToastContainer />
      {isLoading && <Loader />}
      {error && toast.error(error)}
      <ContainerList>
        {casts.map(
          cast =>
            cast.profile_path && (
              <ImageListItems key={cast.id}>
                <Image
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                      : defaultImg
                  }
                  width={250}
                  alt={cast.name}
                />

                <NamaStyle>{cast.name}</NamaStyle>
                <TextStyle>Character: {cast.character}</TextStyle>
              </ImageListItems>
            )
        )}
      </ContainerList>
    </div>
  );
};
export default Cast;
