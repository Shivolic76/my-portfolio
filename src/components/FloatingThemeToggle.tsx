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
  const [hasMoved, setHasMoved] = useState(false);
  const dragTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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
    setHasMoved(false);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });

    // Clear any existing timeout
    if (dragTimeoutRef.current) {
      clearTimeout(dragTimeoutRef.current);
    }

    // Start dragging after a delay
    dragTimeoutRef.current = setTimeout(() => {
      setIsDragging(true);
    }, 200); // 200ms delay before starting drag

    // Add global mouse up listener immediately
    document.addEventListener("mouseup", handleMouseUp, { once: true });

    e.preventDefault();
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // Track if mouse has moved significantly (mark as moved to prevent click)
      if (!hasMoved) {
        setHasMoved(true);
      }

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
    [dragStart, isDragging, hasMoved]
  );

  const handleMouseUp = useCallback(() => {
    // Clear the drag timeout
    if (dragTimeoutRef.current) {
      clearTimeout(dragTimeoutRef.current);
      dragTimeoutRef.current = null;
    }

    const wasJustDragging = isDragging;

    setIsDragging(false);

    // If we weren't dragging and didn't move, treat as click
    if (!wasJustDragging && !hasMoved) {
      console.log('Toggle theme triggered!'); // Debug log
      toggleTheme();
    }

    // Reset movement tracking
    setHasMoved(false);
  }, [isDragging, hasMoved, toggleTheme]);



  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.body.style.userSelect = "none";
      document.body.style.cursor = "grabbing";
    } else {
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };
  }, [isDragging, handleMouseMove]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dragTimeoutRef.current) {
        clearTimeout(dragTimeoutRef.current);
      }
    };
  }, []);

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
          onClick={(e) => {
            // Fallback click handler
            e.stopPropagation();
            if (!isDragging && !hasMoved) {
              console.log('Fallback click triggered!');
              toggleTheme();
            }
          }}
          className={`
            shadow-lg hover:shadow-xl transition-all duration-300 border-2
            ${isDragging ? 'cursor-grabbing scale-105' : 'cursor-pointer'}
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
      </div>
    </div>
  );
};

export default FloatingThemeToggle;
