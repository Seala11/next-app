import { IMovie } from '../api/types';

export enum BookmarkedProviderActions {
  ADD_MOVIES = 'add initial movies',
  ADD_MOVIE = 'add one movie',
  REMOVE_MOVIE = 'remove one movie',
}

export type BookmarkedState = {
  bookmarkedMovies: IMovie[];
};

export const initialBookmarkedState = {
  bookmarkedMovies: [],
};

export type BookmarkedAction =
  | { type: BookmarkedProviderActions.ADD_MOVIES; movies: IMovie[] }
  | { type: BookmarkedProviderActions.ADD_MOVIE; movie: IMovie }
  | { type: BookmarkedProviderActions.REMOVE_MOVIE; id: number };

export const bookmarkPageReducer = (
  state: BookmarkedState,
  action: BookmarkedAction
): BookmarkedState => {
  switch (action.type) {
    case BookmarkedProviderActions.ADD_MOVIES:
      return {
        ...state,
        bookmarkedMovies: action.movies,
      };

    case BookmarkedProviderActions.ADD_MOVIE:
      return {
        ...state,
        bookmarkedMovies: [...state.bookmarkedMovies, action.movie],
      };

    case BookmarkedProviderActions.REMOVE_MOVIE:
      const newState = state.bookmarkedMovies.filter((movie) => movie.id !== action.id);
      return {
        ...state,
        bookmarkedMovies: newState,
      };

    default:
      return state;
  }
};
