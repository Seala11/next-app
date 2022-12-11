import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IMovie } from '../../shared/api/types';
import { Card } from './CardList.styled';

type Props = {
  movie: IMovie;
};

export default function MovieItem({ movie }: Props) {
  const date = new Date(movie.release_date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const movieHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await fetch('/api/movies', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(response, data);
    } catch (err) {
      console.error(err);
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
      <button onClick={movieHandler}>Add movie</button>
    </Link>
  );
}
