import { MongoClient } from 'mongodb';
import { InferGetStaticPropsType } from 'next';
import { useEffect, useState } from 'react';
import Meta from '../components/Meta';
import BookmarkedList from '../Layouts/MoviesList/BookmarkedList';
import { IMovie } from '../shared/api/types';
import { useAppContext } from '../shared/context/appProvider';
import { BookmarkedProviderActions } from '../shared/context/bookmarkedPageReducer';
import { Message, Title } from '../shared/styles/sharedstyles';

export default function BookMarked({ bookmarked }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { bookmarkedPageState, bookmarkedPageDispatch } = useAppContext();
  const { bookmarkedMovies } = bookmarkedPageState;

  useEffect(() => {
    if (bookmarkedMovies.length === 0) {
      bookmarkedPageDispatch({type: BookmarkedProviderActions.ADD_MOVIES, movies: bookmarked});
    }
    console.log(bookmarkedMovies, bookmarkedPageState, bookmarked)
  }, [bookmarked, bookmarkedMovies, bookmarkedPageDispatch, bookmarkedPageState]);

  return (
    <>
      <Meta title="Popular TV Shows" />
      {bookmarkedMovies && (
        <>
          <Title>Bookmarked Movies</Title>
          {bookmarkedMovies && bookmarkedMovies.length > 0 ? (
            <BookmarkedList bookmarked={bookmarkedMovies} />
          ) : (
            <Message>No bookmarked movies are available</Message>
          )}
        </>
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db();
  const moviesCollection = db.collection('movies');
  const movies = await moviesCollection.find().toArray();

  const bookmarked: IMovie[] = movies.map((movie) => ({
    poster_path: movie.poster_path,
    adult: movie.adult,
    overview: movie.overview,
    release_date: movie.release_date,
    genre_ids: movie.genre_ids,
    id: movie.id,
    original_title: movie.original_title,
    original_language: movie.original_language,
    title: movie.title,
    backdrop_path: movie.backdrop_path,
    popularity: movie.popularity,
    vote_count: movie.vote_count,
    video: movie.video,
    vote_average: movie.vote_average,
  }));

  client.close();

  return {
    props: {
      bookmarked,
    },
  };
};
