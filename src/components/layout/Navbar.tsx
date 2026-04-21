import { NavLink } from 'react-router-dom'
import { Menu, X, Send } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { useScrolled } from '../../hooks/useScrolled'
import { navItems } from '../../types'

export function Navbar() {
  const scrolled = useScrolled(80)
  const { isOpen, toggle, close } = useMobileMenu()
  const navBg = scrolled ? 'bg-white/95 shadow-xl shadow-navy-900/10 backdrop-blur-xl' : 'bg-white/90'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 ${navBg} transition-all duration-300`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Logo variant="dark" size="md" />
        </div>

        <nav className="hidden items-center gap-10 lg:flex" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `relative border-b-2 border-transparent pb-[2px] text-sm font-medium text-navy-900 transition hover:border-red-600 ${isActive ? 'font-semibold text-red-600 border-red-600' : ''}`
              }
            >
              {({ isActive }) => (
                <span className="inline-flex items-center gap-1">
                  {item.label}
                  <span
                    className={`absolute -bottom-1 h-[2px] w-full bg-red-600 transition-all duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="primary" size="md" href="/contact">
            Get in Touch
          </Button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-navy-800 shadow-sm transition hover:border-red-600 hover:text-red-600 lg:hidden"
            onClick={toggle}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Toggle mobile navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-navy-900/95 px-6 py-8 text-white lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between">
            <Logo variant="light" size="lg" />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
              onClick={toggle}
              aria-label="Close mobile navigation"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-12 flex flex-col gap-6 text-lg font-semibold">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={close}
                className={({ isActive }) =>
                  `border-b border-white/10 pb-4 ${isActive ? 'text-red-400' : 'text-gray-100'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-12">
            <Button variant="outline-white" size="md" href="/contact" className="w-full justify-center">
              <Send className="h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
