import type { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import GlobalStyle from '../shared/styles/globalstyles';

const theme: DefaultTheme = {
  colors: {
    dark: '#10141f',
    darkL: '#161d2f',
    accent: '#586b91',
    light: '#f5f5f5',
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
