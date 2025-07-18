// ============================================================================
// THEME CONTEXT DEFINITION
// ============================================================================

import { createContext } from 'react';

// Theme mode type
export type ThemeMode = 'light' | 'dark';

/**
 * Theme context value interface
 */
export interface ThemeContextValue {
  /** Current theme mode */
  mode: ThemeMode;
  /** Toggle between light and dark theme */
  toggleTheme: () => void;
  /** Set specific theme mode */
  setThemeMode: (mode: ThemeMode) => void;
  /** Check if current theme is dark */
  isDark: boolean;
  /** Check if current theme is light */
  isLight: boolean;
}

/**
 * Theme context
 */
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
