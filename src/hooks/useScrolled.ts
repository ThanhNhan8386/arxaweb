import { useEffect, useState } from 'react'

const DEFAULT_THRESHOLD = 80

export function useScrolled(threshold: number = DEFAULT_THRESHOLD) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return scrolled
}
