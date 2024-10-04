import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import type {ReactNode} from 'react';

interface MaterialProviderProps {
  theme?: any;
  children: ReactNode;
}

export const MaterialProvider = ({theme, children}: MaterialProviderProps) => {
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: '#1976D2',
      },
      secondary: {
        main: '#FF4081',
      },
    },
  });
  return (
    <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
  );
};
