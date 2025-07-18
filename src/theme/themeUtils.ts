// ============================================================================
// THEME UTILITIES
// ============================================================================

import type { ThemeMode } from './themeContext';

// Theme mode constants
export const DEFAULT_THEME_MODE: ThemeMode = 'light';
export const THEME_STORAGE_KEY = 'app-theme-mode';

/**
 * Safely get item from localStorage
 */
function getStorageItem<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error reading from localStorage for key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Safely set item in localStorage
 */
function setStorageItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error writing to localStorage for key "${key}":`, error);
  }
}

/**
 * Get initial theme mode from localStorage or system preference
 */
export const getInitialThemeMode = (initialMode?: ThemeMode): ThemeMode => {
  // If initial mode is provided, use it
  if (initialMode) {
    return initialMode;
  }

  // Try to get from localStorage first
  if (typeof window !== 'undefined') {
    const storedMode = getStorageItem<ThemeMode | null>(THEME_STORAGE_KEY, null);
    if (storedMode && (storedMode === 'light' || storedMode === 'dark')) {
      return storedMode;
    }

    // Fall back to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }

  return DEFAULT_THEME_MODE;
};

/**
 * Save theme mode to localStorage
 */
export const saveThemeMode = (mode: ThemeMode): void => {
  setStorageItem(THEME_STORAGE_KEY, mode);
};

/**
 * Get theme mode from localStorage
 */
export const getThemeMode = (): ThemeMode => {
  return getStorageItem(THEME_STORAGE_KEY, DEFAULT_THEME_MODE);
};

/**
 * Check if current theme is dark
 */
export const isDarkMode = (mode: ThemeMode): boolean => mode === 'dark';

/**
 * Check if current theme is light
 */
export const isLightMode = (mode: ThemeMode): boolean => mode === 'light';

/**
 * Toggle theme mode
 */
export const toggleThemeMode = (currentMode: ThemeMode): ThemeMode => {
  return currentMode === 'light' ? 'dark' : 'light';
};
