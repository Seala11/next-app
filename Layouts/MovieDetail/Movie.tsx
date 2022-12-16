import React from 'react';
import Image from 'next/image';
import { IMovieDetails } from '../../shared/api/types';
import {
  Container,
  FlexContainer,
  Button,
  Title,
  InfoContainer,
  ImageContainer,
  TitleWrapper,
  Tagline,
  SubTitle,
  SubTitleInfo,
} from './Movie.styled';
import { useRouter } from 'next/router';
import { LazyMotion, domAnimation, m } from 'framer-motion';

type Props = {
  movie: IMovieDetails;
};

const Movie = ({ movie }: Props) => {
  const router = useRouter();

  const date = new Date(movie.release_date).toLocaleString('en-US', {
    year: 'numeric',
  });

  const hours = Math.floor(movie.runtime / 60);
  const min = movie.runtime - hours * 60;
  const movieTime = min ? `${hours}h ${min}min` : `${hours}h`;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let languageNames = new Intl.DisplayNames(['en'], { type: 'language' });

  return (
    <LazyMotion features={domAnimation}>
      <Container
        key={router.route}
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        as={m.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <FlexContainer>
          <Button onClick={() => router.back()}>Go Back</Button>
          <ImageContainer as={m.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} poster`}
              width={300}
              height={450}
              priority
            />

            <InfoContainer>
              <Title>
                {movie.title} <span>({date})</span>
              </Title>
              <TitleWrapper>
                <p>{movieTime}</p>
                {movie.genres.map((genre) => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </TitleWrapper>

              {movie.tagline && <Tagline>{movie.tagline}</Tagline>}
              {movie.overview && (
                <>
                  <SubTitle>Overview</SubTitle>
                  <p>{movie.overview}</p>
                </>
              )}
              <SubTitleInfo>
                User score:{' '}
                <span>{movie.vote_average ? `${movie.vote_average.toFixed(1)}%` : '-'}</span>
              </SubTitleInfo>
              <SubTitleInfo>
                Status: <span>{movie.status ? movie.status : '-'}</span>
              </SubTitleInfo>
              <SubTitleInfo>
                Original language:{' '}
                <span>
                  {movie.original_language ? languageNames.of(movie.original_language) : '-'}
                </span>
              </SubTitleInfo>
              <SubTitleInfo>
                Budget: <span>{movie.budget > 0 ? formatter.format(movie.budget) : '-'}</span>
              </SubTitleInfo>
              <SubTitleInfo>
                Revenue: <span>{movie.revenue > 0 ? formatter.format(movie.revenue) : '-'}</span>
              </SubTitleInfo>
            </InfoContainer>
          </ImageContainer>
        </FlexContainer>
      </Container>
    </LazyMotion>
  );
};

export default Movie;
