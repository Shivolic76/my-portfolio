import type { ThemeConfig } from 'antd';
// ============================================================================
// ANT DESIGN THEME CONFIGURATION
// ============================================================================

// Theme mode type
type ThemeMode = 'light' | 'dark';

/**
 * Base theme tokens
 */
const baseTokens = {
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: 14,
  borderRadius: 12,
  borderRadiusLG: 16,
  borderRadiusSM: 8,
  wireframe: false,
  motion: true,
  motionDurationSlow: '0.3s',
  motionDurationMid: '0.2s',
  motionDurationFast: '0.1s',
};

/**
 * Light theme configuration
 */
export const lightTheme: ThemeConfig = {
  token: {
    ...baseTokens,
    colorPrimary: '#3b82f6',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    colorInfo: '#06b6d4',
    colorTextBase: '#111827',
    colorTextSecondary: '#6b7280',
    colorBgBase: '#ffffff',
    colorBgContainer: '#ffffff',
    colorBgElevated: '#ffffff',
    colorBorder: '#e5e7eb',
    colorBorderSecondary: '#f3f4f6',
    colorFill: '#f9fafb',
    colorFillSecondary: '#f3f4f6',
    colorFillTertiary: '#e5e7eb',
    colorFillQuaternary: '#d1d5db',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    boxShadowSecondary: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    boxShadowTertiary: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      bodyBg: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      siderBg: '#ffffff',
    },
    Menu: {
      itemBg: 'transparent',
      itemSelectedBg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 100%)',
      itemHoverBg: 'rgba(59, 130, 246, 0.05)',
      itemSelectedColor: '#3b82f6',
      itemActiveBg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.15) 100%)',
    },
    Button: {
      primaryShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.25)',
      defaultShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
      borderRadius: 12,
    },
    Card: {
      headerBg: '#ffffff',
      boxShadowTertiary: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      borderRadius: 16,
    },
    Table: {
      headerBg: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      rowHoverBg: 'rgba(59, 130, 246, 0.02)',
      borderRadius: 12,
    },
    Modal: {
      headerBg: '#ffffff',
      contentBg: '#ffffff',
      borderRadius: 20,
    },
    Drawer: {
      colorBgElevated: '#ffffff',
      borderRadius: 16,
    },
    Input: {
      borderRadius: 10,
      hoverBorderColor: '#3b82f6',
      activeBorderColor: '#3b82f6',
    },
    Select: {
      borderRadius: 10,
    },
  },
};

/**
 * Dark theme configuration
 */
export const darkTheme: ThemeConfig = {
  token: {
    ...baseTokens,
    colorPrimary: '#60a5fa',
    colorSuccess: '#34d399',
    colorWarning: '#fbbf24',
    colorError: '#f87171',
    colorInfo: '#38bdf8',
    colorTextBase: '#f9fafb',
    colorTextSecondary: '#d1d5db',
    colorBgBase: '#0f172a',
    colorBgContainer: '#1e293b',
    colorBgElevated: '#334155',
    colorBorder: '#475569',
    colorBorderSecondary: '#64748b',
    colorFill: '#334155',
    colorFillSecondary: '#475569',
    colorFillTertiary: '#64748b',
    colorFillQuaternary: '#94a3b8',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    boxShadowSecondary: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
    boxShadowTertiary: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
  },
  components: {
    Layout: {
      headerBg: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      bodyBg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      siderBg: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    },
    Menu: {
      itemBg: 'transparent',
      itemSelectedBg: 'linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(56, 189, 248, 0.15) 100%)',
      itemHoverBg: 'rgba(96, 165, 250, 0.08)',
      itemSelectedColor: '#60a5fa',
      itemColor: '#f9fafb',
      itemActiveBg: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(56, 189, 248, 0.2) 100%)',
    },
    Button: {
      primaryShadow: '0 4px 14px 0 rgba(96, 165, 250, 0.3)',
      defaultShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.3)',
      borderRadius: 12,
    },
    Card: {
      headerBg: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      colorBgContainer: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      boxShadowTertiary: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      borderRadius: 16,
    },
    Table: {
      headerBg: 'linear-gradient(135deg, #334155 0%, #475569 100%)',
      rowHoverBg: 'rgba(96, 165, 250, 0.05)',
      colorBgContainer: '#1e293b',
      borderRadius: 12,
    },
    Modal: {
      headerBg: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      contentBg: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      colorBgElevated: '#1e293b',
      borderRadius: 20,
    },
    Drawer: {
      colorBgElevated: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      borderRadius: 16,
    },
    Input: {
      colorBgContainer: '#334155',
      colorBorder: '#475569',
      borderRadius: 10,
      hoverBorderColor: '#60a5fa',
      activeBorderColor: '#60a5fa',
    },
    Select: {
      colorBgContainer: '#334155',
      colorBorder: '#475569',
      borderRadius: 10,
    },
  },
};

/**
 * Get theme configuration based on mode
 */
export const getAntdTheme = (mode: ThemeMode): ThemeConfig => {
  return mode === 'dark' ? darkTheme : lightTheme;
};

/**
 * Algorithm for theme switching
 */
export const themeAlgorithm = {
  light: undefined, // Default algorithm
  dark: undefined,  // We'll use custom tokens instead of algorithm
};
