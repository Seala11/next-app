import { InferGetStaticPropsType } from 'next';
import React from 'react';
import Meta from '../../../components/Meta';
import Movie from '../../../layouts/MovieDetail/Movie';
import { fetchMovieById, fetchMovies } from '../../../shared/api/themoviedbApi';
import { IMovieDetails, IMovies } from '../../../shared/api/types';

const MoviePage = ({ movie }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Meta title={movie.title} />
      <Movie movie={movie} />
    </>
  );
};

export default MoviePage;

export const getStaticProps = async (context) => {
  const res = await fetchMovieById(context.params.id);
  const movie: IMovieDetails = await res.json();

  if (!res.ok || !movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const res = await fetchMovies();
  const movies: IMovies = await res.json();

  const ids = movies.results.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: `${id}` } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

// export const getServerSideProps = async (context) => {
//   const res = await fetchMovieById(context.params.id);

//   if (!res.ok) {
//     return {
//       notFound: true,
//     }
//   }

//   const movie: IMovieDetails = await res.json();

//   return {
//     props: {
//       movie,
//     },
//   };
// };
