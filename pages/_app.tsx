import type { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import MainLayout from '../layouts/MainLayout/MainLayout';
import GlobalStyle from '../shared/styles/globalstyles';
import { Inter } from '@next/font/google';
import { AppProvider } from '../shared/context/appProvider';

const inter = Inter({ subsets: ['latin'] });

const theme: DefaultTheme = {
  colors: {
    dark: '#10141f',
    darkL: '#161d2f',
    accent: '#586b91',
    accentL: '#798cb1',
    light: '#f5f5f5',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <GlobalStyle />
          <style jsx global>{`
            html {
              font-family: ${inter.style.fontFamily};
            }
          `}</style>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AppProvider>
      </ThemeProvider>
    </>
  );
}
