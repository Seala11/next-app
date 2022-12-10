import { LoadButton, Title } from '../shared/styles/sharedstyles';
import { InferGetStaticPropsType } from 'next';
import CardList from '../Layouts/CardList/CardList';
import { fetchMovies } from '../shared/api/movieApi';
import { IMovies } from '../shared/api/types';
import { useAppContext } from '../shared/context/appProvider';
import { useEffect } from 'react';

export default function Movies({ movies }: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <Title>Popular Movies</Title>
      {moviesRes ? <CardList movies={moviesRes} /> : <CardList movies={movies.results} />}
      <LoadButton onClick={dataHandler}>Load more</LoadButton>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetchMovies();
  const movies: IMovies = await res.json();

  return {
    props: {
      movies,
    },
  };
};
