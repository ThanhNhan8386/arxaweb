import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="guideline-shell min-h-screen bg-white text-navy-900">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-900 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-red-600">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="relative z-[1] pt-28">
        {children}
      </main>
      <Footer />
    </div>
  )
}
