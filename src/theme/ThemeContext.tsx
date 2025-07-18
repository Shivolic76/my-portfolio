// ============================================================================
// THEME CONTEXT
// ============================================================================

import React, { useCallback, useEffect, useState } from 'react';
import { DEFAULT_THEME_MODE, THEME_STORAGE_KEY } from './themeUtils';
import { ThemeContext, type ThemeMode, type ThemeContextValue } from './themeContext';

// Local storage utilities
function getStorageItem<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error reading from localStorage for key "${key}":`, error);
    return defaultValue;
  }
}

function setStorageItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error writing to localStorage for key "${key}":`, error);
  }
}

/**
 * Theme context provider props
 */
interface ThemeContextProviderProps {
  children: React.ReactNode;
  /** Initial theme mode (optional, defaults to stored value or system preference) */
  initialMode?: ThemeMode;
}

/**
 * Get system theme preference
 */
function getSystemThemePreference(): ThemeMode {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return DEFAULT_THEME_MODE;
}

/**
 * Get initial theme mode from storage or system preference
 */
function getInitialThemeMode(initialMode?: ThemeMode): ThemeMode {
  if (initialMode) {
    return initialMode;
  }

  // Try to get from localStorage first
  const storedMode = getStorageItem<ThemeMode | null>(THEME_STORAGE_KEY, null);
  if (storedMode && (storedMode === 'light' || storedMode === 'dark')) {
    return storedMode;
  }

  // Fall back to system preference
  return getSystemThemePreference();
}

/**
 * Theme context provider component
 */
export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
  initialMode,
}) => {
  const [mode, setMode] = useState<ThemeMode>(() => getInitialThemeMode(initialMode));

  /**
   * Toggle between light and dark theme
   */
  const toggleTheme = useCallback(() => {
    setMode(prevMode => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      setStorageItem(THEME_STORAGE_KEY, newMode);
      return newMode;
    });
  }, []);

  /**
   * Set specific theme mode
   */
  const setThemeMode = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
    setStorageItem(THEME_STORAGE_KEY, newMode);
  }, []);

  /**
   * Listen for system theme changes
   */
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        // Only update if no theme is stored (user hasn't manually set a preference)
        const storedMode = getStorageItem<ThemeMode | null>(THEME_STORAGE_KEY, null);
        if (!storedMode) {
          setMode(e.matches ? 'dark' : 'light');
        }
      };

      // Modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      }
      // Legacy browsers
      else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    }
  }, []);

  /**
   * Update document class for theme-aware CSS (Tailwind CSS and Ant Design)
   */
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Remove old theme classes
      document.documentElement.classList.remove('theme-light', 'theme-dark', 'light', 'dark');

      // Add new theme classes for both Tailwind and custom CSS
      document.documentElement.classList.add(`theme-${mode}`, mode);
      document.documentElement.setAttribute('data-theme', mode);

      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', mode === 'dark' ? '#111827' : '#ffffff');
      }
    }
  }, [mode]);

  // Derived values
  const isDark = mode === 'dark';
  const isLight = mode === 'light';

  const contextValue: ThemeContextValue = {
    mode,
    toggleTheme,
    setThemeMode,
    isDark,
    isLight,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};




