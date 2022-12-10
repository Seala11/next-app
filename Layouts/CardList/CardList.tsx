import React from 'react';
import { IMovie } from '../../shared/api/types';
import MovieItem from './Card';
import { FlexContainer } from './CardList.styled';

type Props = {
  movies: IMovie[];
};

export default function CardList({ movies }: Props) {
  // console.log(movies);
  return (
    <FlexContainer>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </FlexContainer>
  );
}
