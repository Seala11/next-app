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
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#161d2f" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
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
