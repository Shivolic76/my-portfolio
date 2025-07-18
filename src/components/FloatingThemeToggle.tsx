import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "antd";
import { useTheme } from "../theme/themeHooks";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
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
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
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
    setIsDragging(false);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (!isDragging) toggleTheme();
    e.stopPropagation();
  };

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
      className="fixed z-50"
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
        {/* Drag Button */}
        <div
          onMouseDown={handleMouseDown}
          className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center cursor-grab ${
            isHovered ? "opacity-70" : "opacity-0"
          } transition-opacity`}
        >
          <SafeIcon icon={MdDragIndicator} className="text-white text-xs" />
        </div>

        {/* Toggle Theme */}
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={isDark ? <SafeIcon icon={FaSun} /> : <SafeIcon icon={FaMoon} />}
          onClick={handleClick}
          className={`
            shadow-lg hover:shadow-xl transition-all duration-300
            ${
              isDark
                ? "bg-yellow-500 hover:bg-yellow-400 border-yellow-500 hover:border-yellow-400"
                : "bg-indigo-600 hover:bg-indigo-500 border-indigo-600 hover:border-indigo-500"
            }
          `}
          style={{ width: "60px", height: "60px", fontSize: "24px" }}
        />

        {/* Tooltip */}
        <div
          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-lg transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </div>
      </div>
    </div>
  );
};

export default FloatingThemeToggle;
