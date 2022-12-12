import { MongoClient } from 'mongodb';
import { InferGetStaticPropsType } from 'next';
import Meta from '../components/Meta';
import MovieItem from '../components/MovieCard/MovieCard';
import { FlexContainer } from '../Layouts/MoviesList/moviesList.styled';
import { IMovie } from '../shared/api/types';
import { Title } from '../shared/styles/sharedstyles';

export default function BookMarked({ bookmarked }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Meta title="Popular TV Shows" />
      <Title>Bookmarked Movies</Title>
      {bookmarked && (
        <FlexContainer>
          {bookmarked.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </FlexContainer>
      )}
      {!bookmarked && <p>No bookmarked movies are available</p>}
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
    revalidate: 1,
  };
};
