import { Title } from '../shared/styles/sharedstyles';
import { InferGetStaticPropsType } from 'next';
import CardList from '../Layouts/CardList/CardList';
import { fetchMovies } from '../shared/api/themoviedbApi';
import { IMovies } from '../shared/api/types';
import { useEffect } from 'react';
import { useAppContext } from '../shared/context/appProvider';

export default function Movies({ movies }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { moviesRes, setMoviesRes, setPage } = useAppContext();

  useEffect(() => {
    if (!moviesRes) {
      setMoviesRes(movies.results);
      setPage(movies.page);
    }
  }, [movies.page, movies.results, moviesRes, setMoviesRes, setPage]);

  return (
    <>
      {moviesRes && (
        <>
          <Title>Popular Movies</Title>
          <CardList movies={moviesRes} />
        </>
      )}
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
