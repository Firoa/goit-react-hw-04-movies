import React, { Component } from "react";
import MovieStaticInfo from "../../MovieInfo/MovieStaticInfo";
import * as Services from "../../services/services";
import {Route, Link } from "react-router-dom";
import CastsPage from '../CastsPage/CastsPage'
const getMatchId = (props) => props.match.params.id;

class MovieInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = { movieData: null };
    this.id = getMatchId(this.props);
  }

  componentDidMount(prevProps, prevState) {
    Services.fetchById(this.id).then((data) => {
      console.log(data);
      this.setState({ movieData: data });
    });
  }
  render() {
    const { movieData } = this.state;
    return (
      <div>
        {movieData && <MovieStaticInfo movieData={movieData} />}
        <div>
          <h2> Aditional information</h2>
          <Link to="">Casts</Link>
          <Link to="">Reviews</Link>
          <Route component={CastsPage}/>
          
        </div>
      </div>
    );
  }
}

export default MovieInfoPage;
