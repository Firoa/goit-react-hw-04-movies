import axios from 'axios';
const baseUrl = 'https://api.themoviedb.org/3/';
const key = '54307885011b6f62dcf986ccd48df2b0';

export const fetchByQuery = async (query, page = 1) => {
  if (query === undefined) return;
  const response = await axios.get(
    `${baseUrl}search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
  return response.data.results;
};

export const fetchTrends = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=54307885011b6f62dcf986ccd48df2b0`,
  );
  return response.data.results;
};

export const fetchById = async id => {
  const response = await axios.get(
    `${baseUrl}movie/${id}?api_key=${key}&language=en-US`,
  );
  return response.data;
};

export const fetchCastById = async id => {
  const response = await axios.get(
    `${baseUrl}movie/${id}/credits?api_key=${key}`,
  );
  return response.data;
};
export const fetchRevievsById = async id => {
  const response = await axios.get(
    `${baseUrl}movie/${id}/reviews?api_key=${key}`,
  );
  return response.data.results;
};
