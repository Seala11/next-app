# Movie App

## About

Movie App is a PWA made with [The Movie Database (TMDB) API](https://developers.themoviedb.org/3/getting-started/introduction), Next.js API Routes and MongoDB.

## Key Features

* Display popular movies from [The Movie Database (TMDB) API](https://developers.themoviedb.org/3/getting-started/introduction)
* Display single movie page with full movie description from [The Movie Database (TMDB) API](https://developers.themoviedb.org/3/getting-started/introduction)
* Add/remove movies to/from bookmarked (API Routes)
* Fully responsive

## What it looks like

![movie1](https://user-images.githubusercontent.com/77016227/208253348-3eb5c860-1ea4-4e1d-8533-affbd68cb7ba.gif)

## How to quickly try it?

👉 The project is hosted on Vercel: https://movie-app-seala11.vercel.app/

## Stack

* Next.js
* Styled-components
* MongoDB
* TypeScript
* Framer Motion

## Lighthouse Metrics

![image](https://user-images.githubusercontent.com/77016227/208317576-a3503383-f1c1-4472-8a98-2c87a0263b15.png)

## Setup and Running

Change .env.example file to .env.local and replace example variables with your mongodb collection and [themoviedb token](https://www.themoviedb.org/settings/api)

### Install dependencies

```bash
$ npm install
```

### Running the app in the development mode

```bash
$ npm run dev
```

### Prepare for production

```bash
$ npm run build
```

```bash
$ npm run start // run build locally
```

### Run webpack bundle analyzer

```bash
$ ANALYZE=true npm run build
```

