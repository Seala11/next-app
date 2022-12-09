import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card } from './CardList.styled';

export default function MovieItem({ movie }) {
  const date = new Date(movie.release_date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link href="/movie/[id]" as={`/movie/${movie.id}`}>
        <Card key={movie.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            width={200}
            height={300}
          />
          <h2>{movie.original_title}</h2>
          <p>{date}</p>
        </Card>
    </Link>
  );
}
