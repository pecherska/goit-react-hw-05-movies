import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'a17205dfa6fa5b193518a339ddb277e7';

export const fetchApiTrending = async () => {
  const url = `${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US`;
  const response = await axios.get(url);

  return response.data;
};

export const fetchApiSearch = async query => {
  const url = `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&include_adult=false&language=en-US`;
  const response = await axios.get(url);

  return response.data;
};
export const fetchApiDetails = async movie_id => {
  const url = `${BASE_URL}movie/${movie_id}?api_key=${KEY}&language=en-US`;
  const response = await axios.get(url);

  return response.data;
};

export const fetchApCredits = async movie_id => {
  const url = `${BASE_URL}movie/${movie_id}/credits?api_key=${KEY}&language=en-US`;
  const response = await axios.get(url);

  return response.data;
};

export const fetchApReviews = async movie_id => {
  const url = `${BASE_URL}movie/${movie_id}/reviews?api_key=${KEY}&language=en-US`;
  const response = await axios.get(url);

  return response.data;
};
