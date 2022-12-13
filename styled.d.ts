import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string;
      darkL: string;
      accent: string;
      accentL: string;
      light: string;
    };
  }
}
