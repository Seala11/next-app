import { MongoClient } from 'mongodb';
import { InferGetStaticPropsType } from 'next';
import { useEffect, useState } from 'react';
import Meta from '../components/Meta';
import BookmarkedList from '../Layouts/MoviesList/BookmarkedList';
import { IMovie } from '../shared/api/types';
import { useAppContext } from '../shared/context/appProvider';
import { Message, Title } from '../shared/styles/sharedstyles';

export default function BookMarked({ bookmarked }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { bookmarkedRes, setBookmarkedRes } = useAppContext();

  useEffect(() => {
    if (!bookmarkedRes) {
      setBookmarkedRes(bookmarked);
    }
  }, [bookmarked, bookmarkedRes, setBookmarkedRes]);

  return (
    <>
      <Meta title="Popular TV Shows" />
      {bookmarkedRes && (
        <>
          <Title>Bookmarked Movies</Title>
          {bookmarkedRes && bookmarkedRes.length > 0 ? (
            <BookmarkedList bookmarked={bookmarkedRes} />
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
