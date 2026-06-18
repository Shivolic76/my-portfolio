import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const isTouchDevice = () =>
  typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

const AICursor: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const dotX = useSpring(mouseX, { stiffness: 650, damping: 38 })
  const dotY = useSpring(mouseY, { stiffness: 650, damping: 38 })
  const ringX = useSpring(mouseX, { stiffness: 100, damping: 18 })
  const ringY = useSpring(mouseY, { stiffness: 100, damping: 18 })

  useEffect(() => {
    if (isTouchDevice()) return

    document.body.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('a, button, [data-cursor-hover]')
      setHovering(!!el)
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [mouseX, mouseY])

  if (isTouchDevice()) return null

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        initial={{ width: 28, height: 28, opacity: 0 }}
        animate={{
          opacity: visible ? (hovering ? 0.9 : 0.5) : 0,
          width: hovering ? 52 : 28,
          height: hovering ? 52 : 28,
          scale: clicking ? 0.88 : 1,
          backgroundColor: hovering ? 'rgba(99, 102, 241, 0.12)' : 'transparent',
          borderColor: hovering ? 'rgba(99, 102, 241, 0.85)' : 'rgba(99, 102, 241, 0.5)',
          boxShadow: hovering ? '0 0 18px rgba(99,102,241,0.35)' : 'none',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-indigo-500"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          boxShadow: '0 0 6px rgba(99,102,241,0.6)',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.5 : clicking ? 0.4 : 1,
        }}
        transition={{ duration: 0.12 }}
      />
    </>
  )
}

export default AICursor
