import { InferGetStaticPropsType } from 'next';
import React from 'react';
import Meta from '../../../components/Meta';
import Movie from '../../../Layouts/Movie/Movie';
import { fetchMovieById, fetchMovies } from '../../../shared/api/movieApi';
import { IMovieDetails, IMovies } from '../../../shared/api/types';

const MoviePage = ({ movie }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  console.log(movie);
  return (
    <>
      <Meta title={movie.title} />
      <Movie movie={movie} />
    </>
  );
};

export default MoviePage;

export const getServerSideProps = async (context) => {
  const res = await fetchMovieById(context.params.id);

  const movie: IMovieDetails = await res.json();

  return {
    props: {
      movie,
    },
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetchMovieById(context.params.id);

//   const movie: IMovieDetails = await res.json();

//   return {
//     props: {
//       movie,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetchMovies();
//   const movies: IMovies = await res.json();

//   const ids = movies.results.map((movie) => movie.id);
//   const paths = ids.map((id) => ({ params: { id: `${id}` } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
