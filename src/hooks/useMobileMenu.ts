import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggle = useCallback(() => {
    setIsOpen((current) => !current)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEsc)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [close, isOpen])

  useEffect(() => {
    close()
  }, [location.pathname, close])

  return { isOpen, toggle, close }
}
