import React, { useEffect } from 'react';
import { fetchMovies } from '../../shared/api/movieApi';
import { IMovie, IMovies } from '../../shared/api/types';
import { useAppContext } from '../../shared/context/appProvider';
import { LoadButton } from '../../shared/styles/sharedstyles';
import MovieItem from './Card';
import { FlexContainer } from './CardList.styled';

type Props = {
  movies: IMovies;
};

export default function CardList({ movies }: Props) {
  const { moviesRes, setMoviesRes, page, setPage } = useAppContext();

  useEffect(() => {
    if (!moviesRes) {
      setMoviesRes(movies.results);
      setPage(movies.page);
    }
  }, [movies.page, movies.results, moviesRes, setMoviesRes, setPage]);

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
        {!moviesRes && <p>Loading</p>}
        {moviesRes && moviesRes.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </FlexContainer>
      <LoadButton onClick={dataHandler}>Load more</LoadButton>
    </>
  );
}
