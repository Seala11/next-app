import Head from 'next/head';
import { Title } from '../shared/styles/sharedstyles';
import { InferGetStaticPropsType } from 'next';
import CardList from '../Layouts/CardList/CardList';
import { fetchMovies } from '../shared/api/movieApi';
import { IMovies } from '../shared/api/types';

export default function Movies({ movies }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Title>Popular Movies</Title>
      <CardList movies={movies.results} />
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
