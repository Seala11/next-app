import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { fetchAddMovie, fetchRemoveMovie } from '../../shared/api/moviesApi';
import { IMovie } from '../../shared/api/types';
import { useAppContext } from '../../shared/context/appProvider';
import { Card, MarkButton } from './movieCard.styled';
import { MdOutlineBookmarkAdd, MdOutlineBookmarkRemove } from 'react-icons/md';
import { motion } from 'framer-motion';
import { BookmarkedProviderActions } from '../../shared/context/bookmarkedPageReducer';

export enum Page {
  MOVIES = 'movies',
  BOOKMARKED = 'bookmarked',
}

type Props = {
  movie: IMovie;
  page: Page;
  index: number;
};

export default function MovieCard({ movie, page, index }: Props) {
  const [pending, setPending] = useState(false);
  const [src, setSrc] = React.useState(`https://image.tmdb.org/t/p/w500${movie.poster_path}`);
  const { bookmarkedPageDispatch } = useAppContext();

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
      bookmarkedPageDispatch({ type: BookmarkedProviderActions.ADD_MOVIE, movie: movie });
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

  const removeMovieHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setPending(true);
    try {
      const response = await fetchRemoveMovie(`${movie.id}`);

      if (!response.ok) {
        const err = await response.json();
        throw new Error(`${response.status}`);
      }

      await response.json();
      bookmarkedPageDispatch({ type: BookmarkedProviderActions.REMOVE_MOVIE, id: movie.id });
    } catch (err) {
      if (err.message === '404') {
        bookmarkedPageDispatch({ type: BookmarkedProviderActions.REMOVE_MOVIE, id: movie.id });
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
      <Card
        key={movie.id}
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 30 }}
        whileHover={{ scale: 1.06, transition: { ease: 'easeOut' } }}
        layout
      >
        <Image
          src={src}
          alt={`${movie.title} poster`}
          width={256}
          height={342}
          sizes="(max-width: 768px) 160px,
          (max-width: 480px) 140px,
          200px"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsKppeDwAE1QH8Cs9AOAAAAABJRU5ErkJggg=="
          onError={() => setSrc('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d8+sBwADLAFwmhbF1gAAAABJRU5ErkJggg==')}
          priority={index < 10 ? true : false}
        />
        <h2>{movie.title}</h2>
        <p>{date}</p>
        {page === Page.MOVIES && (
          <MarkButton onClick={addMovieHandler} disabled={pending} aria-label="add to bookmarked">
            <MdOutlineBookmarkAdd />
          </MarkButton>
        )}

        {page === Page.BOOKMARKED && (
          <MarkButton onClick={removeMovieHandler} disabled={pending} aria-label="remove from bookmarked">
            <MdOutlineBookmarkRemove />
          </MarkButton>
        )}
      </Card>
    </Link>
  );
}
