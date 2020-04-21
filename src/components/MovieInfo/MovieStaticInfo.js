import React from "react";
import { withRouter } from "react-router-dom";
import styles from './MovieStaticInfo.module.css'
const MovieStaticInfo = ({ movieData, routerProps }) => {
  const posterUrl = "https://image.tmdb.org/t/p/w342/" + movieData.poster_path;
  return (
    <div className={styles.infoPageWraper}>
      <img src={posterUrl} alt="poster" />
      <div className={styles.infoText}>
        <h2>Title:{movieData.title}</h2>
        <p>UserScore: {movieData.vote_average} </p>
        <p>{movieData.overview}</p>
        <h2>Genres</h2>
        <ul className={styles.genresList}>
          {movieData.genres.map((gener) => (
            <li key={gener.id}>{gener.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(MovieStaticInfo);
