import { token } from './config';

export const fetchMovies = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
};

export const fetchMovieById = async (id: string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    return res;
  };