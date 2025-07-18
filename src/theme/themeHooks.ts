// ============================================================================
// THEME HOOKS
// ============================================================================

import { useContext } from 'react';
import { ThemeContext, type ThemeMode, type ThemeContextValue } from './themeContext';

/**
 * Hook to use theme context
 */
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
};

/**
 * Hook to get current theme mode
 */
export const useThemeMode = (): ThemeMode => {
  const { mode } = useTheme();
  return mode;
};

/**
 * Hook to toggle theme
 */
export const useToggleTheme = (): (() => void) => {
  const { toggleTheme } = useTheme();
  return toggleTheme;
};

/**
 * Hook to check if dark theme is active
 */
export const useIsDarkTheme = (): boolean => {
  const { isDark } = useTheme();
  return isDark;
};

/**
 * Hook to check if light theme is active
 */
export const useIsLightTheme = (): boolean => {
  const { isLight } = useTheme();
  return isLight;
};
