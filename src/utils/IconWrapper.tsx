import React from 'react';
import type { IconType } from 'react-icons';

// Generic props interface for icon components
export interface IconProps {
  className?: string;
  size?: string | number;
  color?: string;
  style?: React.CSSProperties;
}

// Utility function to safely render icons in JSX
export const SafeIcon: React.FC<{ icon: IconType } & IconProps> = ({ icon: IconComponent, ...props }) => {
  // Type assertion to fix TS2786 issue
  const IconElement = IconComponent as React.ComponentType<IconProps>;
  return <IconElement {...props} />;
};
