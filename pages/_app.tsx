import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import GlobalStyle from '../shared/styles/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
