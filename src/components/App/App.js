import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from '../Nav/Nav';

const AsyncHomePage = lazy(() =>
  import('../../pages/Home/HomePage' /* webpackChunkName: "home-page" */),
);
const AsyncMoviesPage = lazy(() =>
  import(
    '../../pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
  ),
);
const AsyncMovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={AsyncHomePage} />
          <Route path="/movies/:id" component={AsyncMovieDetailsPage} />
          <Route path="/movies" component={AsyncMoviesPage} />          
          <Redirect to='/'/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
