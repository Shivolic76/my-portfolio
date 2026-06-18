import { useContext } from 'react';
import { ThemeContext, type ThemeMode, type ThemeContextValue } from './themeContext';

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};

export const useThemeMode = (): ThemeMode => {
  const { mode } = useTheme();
  return mode;
};
