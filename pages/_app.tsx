import type { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import GlobalStyle from '../shared/styles/globalstyles';
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
