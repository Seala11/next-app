import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMovieDetails } from '../../shared/api/types';
import { Container, FlexContainer } from './Movie.styled';

type Props = {
  movie: IMovieDetails;
};

const Movie = ({ movie }: Props) => {
  return (
    <Container src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
      <FlexContainer>
        <Link href={'/'}>Go back</Link>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
          width={300}
          height={450}
        />
        <p>This is a movie {movie.title}</p>
        {/* <p>A: {movie.adult}</p>
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
        <p>{movie.original_language}</p> */}
      </FlexContainer>
    </Container>
  );
};

export default Movie;

/* <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={`${movie.title} poster`}
        width={5500}
        height={3000}
      /> */
