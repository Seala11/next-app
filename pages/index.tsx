import { LoadButton, Title } from '../shared/styles/sharedstyles';
import { InferGetStaticPropsType } from 'next';
import CardList from '../Layouts/CardList/CardList';
import { fetchMovies } from '../shared/api/movieApi';
import { IMovies } from '../shared/api/types';
import { useEffect, useState } from 'react';

export default function Movies({ movies }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Title>Popular Movies</Title>
      {hydrated && <CardList movies={movies} />}
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
