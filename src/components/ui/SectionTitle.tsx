interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'dark',
}: SectionTitleProps) {
  const textColor = theme === 'dark' ? 'text-navy-900' : 'text-white'
  const subtitleColor = theme === 'dark' ? 'text-gray-600' : 'text-gray-300'
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  const lineAlignment = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={`flex flex-col gap-5 ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-red-600">
          {eyebrow}
        </span>
      ) : null}
      <div>
        <h2 className={`font-bold tracking-tight text-3xl lg:text-4xl ${textColor}`}>{title}</h2>
        <span className={`mt-5 block h-[3px] w-20 rounded-full bg-red-600 ${lineAlignment}`} />
      </div>
      {subtitle ? <p className={`max-w-2xl text-[0.95rem] leading-7 ${subtitleColor}`}>{subtitle}</p> : null}
    </div>
  )
}
