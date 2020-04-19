import React from "react";
const MovieStaticInfo = ({ movieData, routerProps }) => {
  console.log(routerProps);
  const posterUrl = "https://image.tmdb.org/t/p/w500/" + movieData.poster_path;
  return (
    <div>
      <img src={posterUrl} alt="poster" />
      <h2>Title:{movieData.title}</h2>
      <p>UserScore: {movieData.vote_average} </p>
      <p>{movieData.overview}</p>
      <p>Genres</p>
      <ul>
        {movieData.genres.map((gener) => (
          <li key={gener.id}>{gener.name}</li>
        ))}
      </ul>      
    </div>
  );
};

export default MovieStaticInfo;
