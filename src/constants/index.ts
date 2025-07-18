// ============================================================================
// API CONSTANTS
// ============================================================================

/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  USERS: '/users',
  USER_BY_ID: (id: number) => `/users/${id}`,
} as const;

/**
 * HTTP status codes
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

/**
 * API timeout values (in milliseconds)
 */
export const API_TIMEOUT = {
  DEFAULT: 10000,
  UPLOAD: 30000,
  DOWNLOAD: 60000,
} as const;

// ============================================================================
// ROUTE CONSTANTS
// ============================================================================

/**
 * Application routes
 */
export const ROUTES = {
  HOME: '/',
  NOT_FOUND: '/404',
} as const;

/**
 * Route labels for navigation
 */
export const ROUTE_LABELS = {
  [ROUTES.HOME]: 'Portfolio',
} as const;

// ============================================================================
// UI CONSTANTS
// ============================================================================

/**
 * Toast notification settings
 */
export const TOAST_CONFIG = {
  POSITION: 'top-right' as const,
  AUTO_CLOSE: 5000,
  HIDE_PROGRESS_BAR: false,
  NEWEST_ON_TOP: false,
  CLOSE_ON_CLICK: true,
  RTL: false,
  PAUSE_ON_FOCUS_LOSS: true,
  DRAGGABLE: true,
  PAUSE_ON_HOVER: true,
};

/**
 * Breakpoints for responsive design
 * @deprecated Use theme.breakpoints instead
 */
export const BREAKPOINTS = {
  XS: 0,
  SM: 600,
  MD: 900,
  LG: 1200,
  XL: 1536,
} as const;

// ============================================================================
// VALIDATION CONSTANTS
// ============================================================================

/**
 * Validation rules
 */
export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\+?[\d\s-()]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 20,
} as const;

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  PASSWORD_TOO_SHORT: `Password must be at least ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} characters`,
  USERNAME_TOO_SHORT: `Username must be at least ${VALIDATION_RULES.USERNAME_MIN_LENGTH} characters`,
  USERNAME_TOO_LONG: `Username must not exceed ${VALIDATION_RULES.USERNAME_MAX_LENGTH} characters`,
  NETWORK_ERROR: 'Network error. Please check your connection.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
  USER_NOT_FOUND: 'User not found',
  UNAUTHORIZED: 'You are not authorized to perform this action',
} as const;

// ============================================================================
// STORAGE CONSTANTS
// ============================================================================

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'userPreferences',
  THEME_MODE: 'themeMode',
  AUTH_TOKEN: 'authToken',
  LAST_VISITED_ROUTE: 'lastVisitedRoute',
} as const;

// ============================================================================
// REDUX CONSTANTS
// ============================================================================

/**
 * Redux action types
 */
export const REDUX_ACTIONS = {
  USER: {
    FETCH_USERS: 'user/fetch-users',
    FETCH_USER_BY_ID: 'user/fetch-user-by-id',
    CREATE_USER: 'user/create-user',
    UPDATE_USER: 'user/update-user',
    DELETE_USER: 'user/delete-user',
  },
} as const;

/**
 * Loading states
 */
export const LOADING_STATES = {
  IDLE: 'idle',
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
} as const;

// ============================================================================
// ENVIRONMENT CONSTANTS
// ============================================================================

/**
 * Environment variables with defaults
 */
export const ENV = {
  API_URL: import.meta.env.VITE_API_URL || 'https://fakestoreapi.com',
  ENVIRONMENT: import.meta.env.MODE || 'development',
  ENABLE_LOGGING: import.meta.env.VITE_ENABLE_LOGGING === 'true',
  API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || '10000', 10),
} as const;

/**
 * Feature flags
 */
export const FEATURE_FLAGS = {
  ENABLE_DARK_MODE: true,
  ENABLE_NOTIFICATIONS: true,
  ENABLE_ANALYTICS: import.meta.env.MODE === 'production',
  ENABLE_DEBUG_MODE: import.meta.env.MODE === 'development',
} as const;
