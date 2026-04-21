import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface ButtonProps {
  variant: 'primary' | 'outline' | 'ghost' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  onClick?: () => void
  className?: string
  href?: string
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  ariaLabel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3 text-base',
}

const variantClasses: Record<ButtonProps['variant'], string> = {
  primary: 'bg-red-600 text-white hover:bg-red-500',
  outline: 'border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white',
  'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-navy-800',
  ghost: 'text-navy-800 underline hover:text-red-600',
}

export function Button({
  variant,
  size = 'md',
  children,
  onClick,
  className,
  href,
  icon: Icon,
  iconPosition = 'left',
  ariaLabel,
  type,
  disabled = false,
}: ButtonProps) {
  const content = (
    <span className="inline-flex items-center justify-center gap-2">
      {Icon && iconPosition === 'left' ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      <span>{children}</span>
      {Icon && iconPosition === 'right' ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </span>
  )

  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className ?? ''}`

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    )
  }

  return (
    <button type={type ?? 'button'} disabled={disabled} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
