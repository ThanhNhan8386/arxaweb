import type { ReactNode } from 'react'

interface CardProps {
  variant?: 'default' | 'elevated' | 'dark'
  hover?: boolean
  className?: string
  children: ReactNode
}

export function Card({
  variant = 'default',
  hover = false,
  className = '',
  children,
}: CardProps) {
  const base = 'rounded-3xl p-6 transition-all duration-300'
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white border border-gray-200 shadow-sm',
    dark: 'bg-navy-800 border border-white/10 text-white',
  }
  const hoverClass = hover ? 'hover:-translate-y-1 hover:shadow-xl' : ''

  return <div className={`${base} ${variantClasses[variant]} ${hoverClass} ${className}`}>{children}</div>
}
