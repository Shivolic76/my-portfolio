import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticElementProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

const MagneticElement: React.FC<MagneticElementProps> = ({
  children,
  strength = 0.38,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 14 })
  const springY = useSpring(y, { stiffness: 180, damping: 14 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      data-cursor-hover="true"
    >
      {children}
    </motion.div>
  )
}

export default MagneticElement
