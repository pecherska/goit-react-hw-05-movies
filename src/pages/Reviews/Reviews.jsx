import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApReviews } from 'api/fetchApi';
import NotFound from 'components/NotFound/NotFound';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import { ReviewListItems, TextStyle } from './Reviews.styled';
const Reviews = () => {
  const { id } = useParams();
  const movieId = id;
  console.log(id);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const searchMoviesReviews = async () => {
      setIsLoading(true);
      try {
        const data = await fetchApReviews(movieId);
        console.log(data);
        setReviews(data.results);
        setError('');
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    searchMoviesReviews();
  }, [movieId]);

  return (
    <>
      <ToastContainer />
      {error && toast.error(error)}

      {isLoading && <Loader />}
      <ul>
        {!reviews && (
          <NotFound message={"We don't have any reviews for this movie."} />
        )}
        {reviews &&
          reviews.map(review => (
            <ReviewListItems key={review.id}>
              <TextStyle> {review.author}:</TextStyle>
              <TextStyle>{review.content}</TextStyle>
            </ReviewListItems>
          ))}
      </ul>
    </>
  );
};
export default Reviews;
<li>
  <p>
    <p></p>
  </p>
</li>;
