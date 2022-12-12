import { createContext, useContext, useState, useReducer, SetStateAction } from 'react';
import { IMovie } from '../api/types';
import {
  BookmarkedAction,
  BookmarkedState,
  bookmarkPageReducer,
  initialBookmarkedState,
} from './bookmarkedPageReducer';

export interface IAppContext {
  bookmarkedPageState: BookmarkedState;
  bookmarkedPageDispatch: React.Dispatch<BookmarkedAction>;
  moviesRes: IMovie[];
  setMoviesRes: React.Dispatch<SetStateAction<IMovie[]>>;
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
}

export const defaultContext = {
  bookmarkedPageState: initialBookmarkedState,
  bookmarkedPageDispatch: () => {},
  moviesRes: [],
  setMoviesRes: () => {},
  page: 1,
  setPage: () => {},
};

const AppContext = createContext<IAppContext>(defaultContext);

export default AppContext;

export function AppProvider({ children }) {
  const [bookmarkedPageState, bookmarkedPageDispatch] = useReducer(
    bookmarkPageReducer,
    initialBookmarkedState
  );

  const [moviesRes, setMoviesRes] = useState<IMovie[]>();
  const [page, setPage] = useState<number>();

  return (
    <AppContext.Provider
      value={{
        moviesRes,
        setMoviesRes,
        bookmarkedPageState,
        bookmarkedPageDispatch,
        page,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) throw new Error('useAppContext must be used inside a `AppProvider`');

  return context;
}
