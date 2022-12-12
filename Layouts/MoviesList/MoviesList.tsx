import React from 'react';
import { fetchMovies } from '../../shared/api/themoviedbApi';
import { IMovie, IMovies } from '../../shared/api/types';
import { useAppContext } from '../../shared/context/appProvider';
import { LoadButton } from '../../shared/styles/sharedstyles';
import MovieCard from '../../components/MovieCard/MovieCard';
import { FlexContainer } from './moviesList.styled';

type Props = {
  movies: IMovie[];
};

export default function MoviesList({ movies }: Props) {
  const { moviesRes, setMoviesRes, page, setPage } = useAppContext();

  const dataHandler = async () => {
    try {
      const res = await fetchMovies(`${page + 1}`);
      const movies: IMovies = await res.json();

      const result = moviesRes.concat(
        movies.results.filter((x) => !moviesRes.some((y) => y.id == x.id))
      );
      setMoviesRes(() => result);
      setPage(page + 1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <FlexContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </FlexContainer>
      <LoadButton onClick={dataHandler}>Load more</LoadButton>
    </>
  );
}
