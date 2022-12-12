import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { fetchAddMovie, fetchRemoveMovie } from '../../shared/api/moviesApi';
import { IMovie } from '../../shared/api/types';
import { useAppContext } from '../../shared/context/appProvider';
import { Card, MarkButton } from './movieCard.styled';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { MdOutlineBookmarkRemove } from 'react-icons/md';



export enum Page {
  MOVIES = 'movies',
  BOOKMARKED = 'bookmarked',
}

type Props = {
  movie: IMovie;
  page: Page;
};

export default function MovieCard({ movie, page }: Props) {
  const [pending, setPending] = useState(false);
  const { bookmarkedRes, setBookmarkedRes } = useAppContext();
  const date = new Date(movie.release_date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const addMovieHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setPending(true);
    try {
      const response = await fetchAddMovie(movie);

      if (!response.ok) {
        const err = await response.json();
        throw new Error(`${response.status}`);
      }

      await response.json();
      toast.info(`${movie.title} added to bookmarked`);
    } catch (err) {
      if (err.message === '409') {
        toast.info(`${movie.title} already bookmarked`);
      } else {
        toast.error('Oops, something went wrong...');
        console.error(err);
      }
    } finally {
      setPending(false);
    }
  };

  const removeMovieFromStore = () => {
    const updatedList = bookmarkedRes.filter((storedMovie) => storedMovie.id !== movie.id);
    setBookmarkedRes(updatedList);
  };

  const removeMovieHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setPending(true);
    try {
      const response = await fetchRemoveMovie(`${movie.id}`);

      if (!response.ok) {
        const err = await response.json();
        console.log(err);
        throw new Error(`${response.status}`);
      }

      console.log(response);
      await response.json();
      toast.info(`${movie.title} removed from bookmarked`);
      removeMovieFromStore();
    } catch (err) {
      if (err.message === '404') {
        toast.error(`${movie.title} removed from bookmarked`);
        removeMovieFromStore();
      } else {
        toast.error('Oops, something went wrong...');
        console.error(err);
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <Link href="/movie/[id]" as={`/movie/${movie.id}`}>
      <Card key={movie.id}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
          width={200}
          height={300}
        />
        <h2>{movie.title}</h2>
        <p>{date}</p>
      {page === Page.MOVIES && (
        <MarkButton onClick={addMovieHandler} disabled={pending}>
          <MdOutlineBookmarkAdd />
        </MarkButton>
      )}

      {page === Page.BOOKMARKED && (
        <MarkButton onClick={removeMovieHandler} disabled={pending}>
          <MdOutlineBookmarkRemove />
        </MarkButton>
      )}
      </Card>
    </Link>
  );
}
