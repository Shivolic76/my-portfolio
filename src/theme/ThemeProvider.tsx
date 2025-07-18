// ============================================================================
// THEME PROVIDER COMPONENT
// ============================================================================

import React from 'react';
import { ConfigProvider } from 'antd';
import { ThemeContextProvider } from './ThemeContext';
import { useThemeMode } from './themeHooks';
import { getAntdTheme } from './antdTheme';
import '../styles/antd-custom.css';

// Theme mode type
export type ThemeMode = 'light' | 'dark';

/**
 * Inner theme provider that uses the theme context
 */
const InnerThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mode = useThemeMode();
  const theme = getAntdTheme(mode);

  return (
    <ConfigProvider theme={theme}>
      {children}
    </ConfigProvider>
  );
};

/**
 * Theme provider props
 */
interface ThemeProviderProps {
  children: React.ReactNode;
  /** Initial theme mode (optional) */
  initialMode?: ThemeMode;
}

/**
 * Main theme provider component that combines context and Ant Design theme provider
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialMode
}) => {
  return (
    <ThemeContextProvider initialMode={initialMode}>
      <InnerThemeProvider>
        {children}
      </InnerThemeProvider>
    </ThemeContextProvider>
  );
};

/**
 * Default export
 */
export default ThemeProvider;
