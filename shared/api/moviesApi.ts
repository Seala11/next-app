import { IMovie } from './types';

export const fetchAddMovie = async (movie: IMovie) => {
  const response = await fetch('/api/movies', {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};
