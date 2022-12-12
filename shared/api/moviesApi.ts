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

export const fetchRemoveMovie = async (id: string) => {
  const response = await fetch('/api/movies', {
    method: 'DELETE',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};
