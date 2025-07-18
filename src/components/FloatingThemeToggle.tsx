import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "antd";
import { useTheme } from "../theme/themeHooks";
import { FaSun, FaMoon } from "react-icons/fa";
import { SafeIcon } from "../utils/IconWrapper";

// ✅ Use SafeIcon wrapper to avoid TS2786 issues

interface Position {
  x: number;
  y: number;
}

const FloatingThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [position, setPosition] = useState<Position>({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartTime, setDragStartTime] = useState(0);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPosition({
      x: window.innerWidth - 80,
      y: window.innerHeight - 80,
    });

    const updatePos = () => {
      setPosition({
        x: window.innerWidth - 80,
        y: window.innerHeight - 80,
      });
    };

    window.addEventListener("resize", updatePos);
    return () => window.removeEventListener("resize", updatePos);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const startTime = Date.now();
    setDragStartTime(startTime);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });

    // Start dragging after a short delay to distinguish from click
    const dragTimeout = setTimeout(() => {
      setIsDragging(true);
    }, 150); // 150ms delay before starting drag

    const cleanup = () => {
      clearTimeout(dragTimeout);
    };

    // Store cleanup function for later use
    (e.target as any).dragCleanup = cleanup;

    e.preventDefault();
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      const maxX = window.innerWidth - 60;
      const maxY = window.innerHeight - 60;

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      });
    },
    [dragStart, isDragging]
  );

  const handleMouseUp = useCallback(() => {
    const wasJustDragging = isDragging;
    setIsDragging(false);

    // If we weren't dragging and it was a quick release, treat as click
    if (!wasJustDragging && Date.now() - dragStartTime < 200) {
      toggleTheme();
    }
  }, [isDragging, dragStartTime, toggleTheme]);



  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "none";
      document.body.style.cursor = "grabbing";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={buttonRef}
      className="fixed z-50 floating-theme-toggle"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "transform 0.2s ease",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        {/* Toggle Theme Button - Now draggable */}
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={isDark ? <SafeIcon icon={FaSun} /> : <SafeIcon icon={FaMoon} />}
          onMouseDown={handleMouseDown}
          className={`
            shadow-lg hover:shadow-xl transition-all duration-300 border-2
            ${isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab'}
            ${
              isDark
                ? "bg-yellow-500 hover:bg-yellow-400 border-yellow-400 hover:border-yellow-300 text-gray-900"
                : "bg-indigo-600 hover:bg-indigo-500 border-indigo-500 hover:border-indigo-400 text-white"
            }
          `}
          style={{
            width: "60px",
            height: "60px",
            fontSize: "24px",
            boxShadow: isDragging
              ? (isDark
                  ? "0 8px 25px 0 rgba(251, 191, 36, 0.6), 0 0 30px rgba(251, 191, 36, 0.4)"
                  : "0 8px 25px 0 rgba(79, 70, 229, 0.6), 0 0 30px rgba(79, 70, 229, 0.4)")
              : (isDark
                  ? "0 4px 14px 0 rgba(251, 191, 36, 0.4), 0 0 20px rgba(251, 191, 36, 0.2)"
                  : "0 4px 14px 0 rgba(79, 70, 229, 0.4), 0 0 20px rgba(79, 70, 229, 0.2)")
          }}
        />

        {/* Tooltip */}
        <div
          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 ${
            isDark
              ? "bg-slate-800 text-slate-100 border border-slate-600"
              : "bg-gray-900 text-white"
          } text-xs rounded-lg transition-opacity shadow-lg ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
            isDark ? "border-t-slate-800" : "border-t-gray-900"
          }`}></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingThemeToggle;
