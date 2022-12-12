import { createContext, useContext, useState } from 'react';
import { IMovie } from '../api/types';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [moviesRes, setMoviesRes] = useState<IMovie[]>();
  const [bookmarkedRes, setBookmarkedRes] = useState<IMovie[]>();
  const [page, setPage] = useState<number>();

  return (
    <AppContext.Provider
      value={{
        moviesRes,
        setMoviesRes,
        bookmarkedRes,
        setBookmarkedRes,
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
