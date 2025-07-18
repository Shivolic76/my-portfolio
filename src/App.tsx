import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './theme';
import { TOAST_CONFIG } from './constants';
import Portfolio from './pages/Portfolio';
import FloatingThemeToggle from './components/FloatingThemeToggle';
import "react-toastify/dist/ReactToastify.css";

/**
 * Main App component - Direct Portfolio Display with Floating Theme Toggle
 */
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App min-h-screen">
        <Portfolio />
        <FloatingThemeToggle />
        <ToastContainer
          position={TOAST_CONFIG.POSITION}
          autoClose={TOAST_CONFIG.AUTO_CLOSE}
          hideProgressBar={TOAST_CONFIG.HIDE_PROGRESS_BAR}
          newestOnTop={TOAST_CONFIG.NEWEST_ON_TOP}
          closeOnClick={TOAST_CONFIG.CLOSE_ON_CLICK}
          rtl={TOAST_CONFIG.RTL}
          pauseOnFocusLoss={TOAST_CONFIG.PAUSE_ON_FOCUS_LOSS}
          draggable={TOAST_CONFIG.DRAGGABLE}
          pauseOnHover={TOAST_CONFIG.PAUSE_ON_HOVER}
          theme="colored"
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
