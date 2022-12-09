import Link from 'next/link';
import React from 'react';
import { fetchMovieById } from '../../../shared/api/movieApi';
import { IMovieDetails } from '../../../shared/api/types';

const Movie = ({ movieDetail }) => {
  return (
    <div>
      <Link href={'/'}>Go back</Link>
      <p>This is a movie {movieDetail.title}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetchMovieById(context.params.id);

  const movieDetail: IMovieDetails = await res.json();

  return {
    props: {
      movieDetail,
    },
  };
};

export default Movie;
