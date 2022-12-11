import React from 'react';
import { fetchMovies } from '../../shared/api/movieApi';
import { IMovie, IMovies } from '../../shared/api/types';
import { useAppContext } from '../../shared/context/appProvider';
import { LoadButton } from '../../shared/styles/sharedstyles';
import MovieItem from './Card';
import { FlexContainer } from './CardList.styled';

type Props = {
  movies: IMovie[];
};

export default function CardList({ movies }: Props) {
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
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </FlexContainer>
      <LoadButton onClick={dataHandler}>Load more</LoadButton>
    </>
  );
}
