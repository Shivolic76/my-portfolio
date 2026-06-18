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

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])
}

export default useGestureNavigation
