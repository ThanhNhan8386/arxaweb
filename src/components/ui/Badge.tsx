interface BadgeProps {
  label: string
  variant?: 'red' | 'navy' | 'gray'
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  red: 'bg-red-600 text-white',
  navy: 'bg-navy-800 text-white',
  gray: 'bg-gray-100 text-gray-700',
}

export function Badge({ label, variant = 'red' }: BadgeProps) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${variantClasses[variant]}`}>
      {label}
    </span>
  )
}
