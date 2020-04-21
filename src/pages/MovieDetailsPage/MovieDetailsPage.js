import React, { Component, lazy, Suspense } from 'react';
import MovieStaticInfo from '../../components/MovieInfo/MovieStaticInfo';
import * as Services from '../../services/services';
import { Route, Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './MovieDetailsPage.module.css';

const AsyncReviewsPage = lazy(()=>import('../ReviewsPage/ReviewsPage'/* webpackChunkName: "reviews-page" */))
const AsyncCastsPage = lazy(()=>import('../CastsPage/CastsPage'/* webpackChunkName: "casts-page" */))

const getMatchId = props => props.match.params.id;

class MovieInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = { movieData: null };
    this.id = getMatchId(this.props);
    this.goBackLocation = {};
  }

  componentDidMount(prevProps, prevState) {
    const { location } = this.props;
    if (location.state) {
      this.goBackLocation = location.state.from;
    }
    Services.fetchById(this.id).then(data => {
      this.setState({ movieData: data });
    });
  }

  handleGoBack = () => {
    this.props.history.push(this.goBackLocation);
  };

  render() {
    const { match } = this.props;
    const { movieData } = this.state;
    return (
      <div>
        <Button
          text="← Go back"
          type="button"
          callbackfunc={this.handleGoBack}
        />
        {movieData && <MovieStaticInfo movieData={movieData} />}
        <div className={styles.adition}>
          <h2 className={styles.aditionTitle}> Aditional information</h2>
          <ul className={styles.aditionList}>
            <li>
              <Link to={`${match.url}/casts`}>Casts</Link>
            </li>
            <li>
              <Link to={`${match.url}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<h1>Loading...</h1>}>
          <Route path={`${match.path}/casts`} component={AsyncCastsPage} />
          <Route path={`${match.path}/reviews`} component={AsyncReviewsPage} />
          </Suspense>
          
        </div>
      </div>
    );
  }
}

export default MovieInfoPage;
