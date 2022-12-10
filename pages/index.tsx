import Head from 'next/head';
import { Title } from '../shared/styles/sharedstyles';
import { InferGetStaticPropsType } from 'next';
import CardList from '../Layouts/CardList/CardList';
import { fetchMovies } from '../shared/api/movieApi';
import { IMovies } from '../shared/api/types';
import { useState } from 'react';

export default function Movies({ movies }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [moviesRes, setMoviesRes] = useState(movies.results);
  const [page, setPage] = useState(movies.page);

  const dataHandler = async () => {
    try {
      const res = await fetchMovies(`${page + 1}`);
      const movies: IMovies = await res.json();

      const result = moviesRes.concat(movies.results.filter(x => !moviesRes.some(y => y.id == x.id)));
      setMoviesRes(() => result);
      setPage(page + 1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Title>Popular Movies</Title>
      <CardList movies={moviesRes} />
      <button onClick={dataHandler}>Load more</button>
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
