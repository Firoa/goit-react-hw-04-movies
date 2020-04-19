import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/NotFound";

import Navigation from '../Nav'
import queryString from 'query-string';
import MoviesPage from '../pages/MoviesPage/MoviesPage'
import MovieInfoPage from '../pages/MovieInfoPage/MovieInfoPage'
//queryString.parse(this.prop.location.search)
const getCategotyFromLocation = (location) => queryString.parse(location.search).category;
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:id" component={MovieInfoPage} />
        <Route path="/movies"  component={MoviesPage} />        
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
