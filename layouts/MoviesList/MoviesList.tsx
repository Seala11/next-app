import React from 'react';
import { fetchMovies } from '../../shared/api/themoviedbApi';
import { IMovie, IMovies } from '../../shared/api/types';
import { useAppContext } from '../../shared/context/appProvider';
import { LoadButton } from '../../shared/styles/sharedstyles';
import MovieCard, { Page } from '../../components/MovieCard/MovieCard';
import { FlexContainer } from './moviesList.styled';
import { toast } from 'react-toastify';

type Props = {
  movies: IMovie[];
};

export default function MoviesList({ movies }: Props) {
  const { moviesRes, setMoviesRes, page, setPage } = useAppContext();

  const dataHandler = async () => {
    try {
      const result = await fetchMovies(`${page + 1}`);

      if (!result.ok) {
        switch (result.status) {
          case 401:
          case 404: {
            const err = await result.json();
            throw new Error(err.status_message);
          }
          default: {
            throw new Error('Something went wrong. Please try again later.');
          }
        }
      }
      const movies: IMovies = await result.json();

      const moviesState = moviesRes.concat(
        movies.results.filter((x) => !moviesRes.some((y) => y.id == x.id))
      );
      setMoviesRes(() => moviesState);
      setPage(page + 1);
    } catch (err) {
      toast.error(`${err}`);
    }
  };

  return (
    <>
      <FlexContainer>
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} page={Page.MOVIES} index={index} />
        ))}
      </FlexContainer>
      <LoadButton onClick={dataHandler}>Load more</LoadButton>
    </>
  );
}
