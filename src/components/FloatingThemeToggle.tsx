import React from "react";
import { Button } from "antd";
import { useTheme } from "../theme/themeHooks";
import { FaSun, FaMoon } from "react-icons/fa";
import { SafeIcon } from "../utils/IconWrapper";

const FloatingThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();



  return (
    <div className="fixed top-5 right-5 z-50 floating-theme-toggle">
      <Button
        type="primary"
        shape="circle"
        size="large"
        icon={isDark ? <SafeIcon icon={FaSun} /> : <SafeIcon icon={FaMoon} />}
        onClick={toggleTheme}
        className="theme-toggle-btn"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      />
    </div>
  );
};

export default FloatingThemeToggle;
