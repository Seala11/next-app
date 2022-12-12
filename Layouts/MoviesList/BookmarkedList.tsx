import React from 'react';
import MovieCard, { Page } from '../../components/MovieCard/MovieCard';
import { IMovie } from '../../shared/api/types';
import { FlexContainer } from './moviesList.styled';

type Props = {
  bookmarked: IMovie[];
};

const BookmarkedList = ({ bookmarked }: Props) => {
  return (
    <FlexContainer>
      {bookmarked.map((movie) => (
        <MovieCard key={movie.id} movie={movie} page={Page.BOOKMARKED} />
      ))}
    </FlexContainer>
  );
};

export default BookmarkedList;
