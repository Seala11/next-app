import { Title } from '../shared/styles/sharedstyles';
import { InferGetStaticPropsType } from 'next';
import MoviesList from '../layouts/MoviesList/MoviesList';
import { fetchMovies } from '../shared/api/themoviedbApi';
import { IMovies } from '../shared/api/types';
import { useEffect } from 'react';
import { useAppContext } from '../shared/context/appProvider';
import { motion } from 'framer-motion';

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
      {moviesRes && moviesRes.length > 0 && (
        <>
          <Title
            as={motion.h2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            Popular Movies
          </Title>
          <MoviesList movies={moviesRes} />
        </>
      )}
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetchMovies();
    const movies: IMovies = await res.json();

    return {
      props: {
        movies,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
