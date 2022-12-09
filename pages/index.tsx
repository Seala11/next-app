import Head from 'next/head';
import { Title } from '../shared/styles/sharedstyles';
import { InferGetStaticPropsType } from 'next';
import CardList from '../Layouts/CardList/CardList';
import { fetchMovies } from '../shared/api/movieApi';
import { IMovies } from '../shared/api/types';

export const getStaticProps = async () => {
  const res = await fetchMovies();
  const movies: IMovies = await res.json();

  return {
    props: {
      movies,
    },
  };
};

export default function Movies({ movies }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Movies</Title>
      <CardList movies={movies.results} />
    </>
  );
}
