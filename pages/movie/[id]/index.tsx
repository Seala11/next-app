import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import Meta from '../../../components/Meta';
import { fetchMovieById, fetchMovies } from '../../../shared/api/movieApi';
import { IMovieDetails, IMovies } from '../../../shared/api/types';

const Movie = ({ movie }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Meta title={movie.title} />
      <div>
        <Link href={'/'}>Go back</Link>
        <p>This is a movie {movie.title}</p>
        <p>A: {movie.adult}</p>
        <p>B: {movie.backdrop_path}</p>
        {movie.genres.map((genre) => (
          <p key={genre.id}>{genre.name}</p>
        ))}
        <p>{movie.id}</p>
        <p>{movie.original_title}</p>
        <p>{movie.popularity}</p>
        <p>{movie.video}</p>
        <p>{movie.vote_count}</p>
        <p>{movie.vote_average}</p>
        <p>{movie.original_language}</p>
      </div>
    </>
  );
};

export default Movie;

// export const getServerSideProps = async (context) => {
//   const res = await fetchMovieById(context.params.id);

//   const movieDetail: IMovieDetails = await res.json();

//   return {
//     props: {
//       movieDetail,
//     },
//   };
// };

export const getStaticProps = async (context) => {
  const res = await fetchMovieById(context.params.id);

  const movie: IMovieDetails = await res.json();

  return {
    props: {
      movie,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetchMovies();
  const movies: IMovies = await res.json();

  const ids = movies.results.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: `${id}` } }));

  return {
    paths,
    fallback: false,
  };
};
