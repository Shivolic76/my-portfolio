import { useEffect, useRef } from 'react'

const SECTIONS = [
  'hero',
  'about',
  'skills',
  'experience',
  'projects',
  'testimonials',
  'education',
  'certifications',
  'blogs',
]

const SWIPE_THRESHOLD = 65
const NAV_COOLDOWN = 900

const getTargetSection = (direction: 'next' | 'prev'): string | null => {
  const midY = window.innerHeight / 2

  if (direction === 'next') {
    for (const id of SECTIONS) {
      const el = document.getElementById(id)
      if (!el) continue
      const { top } = el.getBoundingClientRect()
      if (top > midY + 60) return id
    }
  } else {
    let result: string | null = null
    for (const id of SECTIONS) {
      const el = document.getElementById(id)
      if (!el) continue
      const { top } = el.getBoundingClientRect()
      if (top < midY - 60) result = id
      else break
    }
    return result
  }
  return null
}

const useGestureNavigation = () => {
  const touchStartY = useRef(0)
  const touchStartX = useRef(0)
  const lastNav = useRef(0)

  useEffect(() => {
    const navigate = (direction: 'next' | 'prev') => {
      const now = Date.now()
      if (now - lastNav.current < NAV_COOLDOWN) return
      const target = getTargetSection(direction)
      if (!target) return
      lastNav.current = now
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
    }

    const onTouchEnd = (e: TouchEvent) => {
      const dy = touchStartY.current - e.changedTouches[0].clientY
      const dx = touchStartX.current - e.changedTouches[0].clientX
      // Only fire for clearly vertical swipes (not horizontal carousel drags)
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) >= SWIPE_THRESHOLD) {
        navigate(dy > 0 ? 'next' : 'prev')
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return
      if ((e.target as HTMLElement)?.isContentEditable) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        navigate('next')
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        navigate('prev')
      }
    }

    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])
}

export default useGestureNavigation
