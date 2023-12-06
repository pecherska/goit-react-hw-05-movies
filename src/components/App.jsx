import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout/Layout';
import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import NotFound from './NotFound/NotFound';
import { lazy } from 'react';

const Movies = lazy(() => import('pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('pages/MovieDetails'));
// const Cast = lazy(() => import('components/MovieDetails/Cast'));
// const Reviews = lazy(() => import('components/MovieDetails/Reviews'));
// const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound message={'Not found'} />} />
        </Route>
      </Routes>
    </>
  );
};
