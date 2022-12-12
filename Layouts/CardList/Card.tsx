import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { fetchAddMovie } from '../../shared/api/moviesApi';
import { IMovie } from '../../shared/api/types';
import { Button } from '../../shared/styles/sharedstyles';
import { Card } from './CardList.styled';

type Props = {
  movie: IMovie;
};

export default function MovieItem({ movie }: Props) {
  const [pending, setPending] = useState(false);
  const date = new Date(movie.release_date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const movieHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setPending(true);
    toast.dismiss();
    try {
      const response = await fetchAddMovie(movie);

      if (!response.ok) {
        const err = await response.json();
        console.log(err);
        throw new Error(`${response.status}`);
      }

      await response.json();
      toast.info('Movie added to bookmarked');
    } catch (err) {
      if (err.message === '409') {
        toast.info('Movie already bookmarked');
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
      </Card>
      <Button onClick={movieHandler} disabled={pending}>
        Add movie
      </Button>
    </Link>
  );
}
