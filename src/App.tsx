import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme';

export default function App() {
  return (
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
    // </React.StrictMode>
  );
}
