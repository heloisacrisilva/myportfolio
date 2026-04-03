'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

import { themes } from '../themes';

type ThemeContextType = {
  theme: DefaultTheme;
  setTheme: (theme: DefaultTheme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProviderContext = ({ children }: ThemeProviderProps) => {
  type ThemeName = keyof typeof themes;

  const [theme, setTheme] = useState<DefaultTheme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as ThemeName | null;
      if (storedTheme && themes[storedTheme]) {
        return themes[storedTheme];
      }
    }
    return themes.darkTheme;
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledThemeProvider theme={theme ?? themes.darkTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProviderContext');
  }
  return context;
};
