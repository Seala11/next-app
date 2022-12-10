import Head from 'next/head';
import React from 'react';

type Props = {
  title: string;
  keywords: string;
  description: string;
};

const Meta = ({ title, keywords, description }: Props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Popular Movies',
  keywords: 'Movies, TV Shows, API',
  description:
    'The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.',
};

export default Meta;
