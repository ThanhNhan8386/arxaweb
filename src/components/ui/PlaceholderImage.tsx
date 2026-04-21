interface PlaceholderImageProps {
  label: string
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4'
  theme?: 'light' | 'dark'
}

const ratioClasses: Record<NonNullable<PlaceholderImageProps['aspectRatio']>, string> = {
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '3/4': 'aspect-[3/4]',
}

export function PlaceholderImage({
  label,
  aspectRatio = '4/3',
  theme = 'light',
}: PlaceholderImageProps) {
  const background =
    theme === 'dark'
      ? 'bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700'
      : 'bg-gradient-to-br from-gray-100 via-white to-gray-100'
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-500'
  const borderColor = theme === 'dark' ? 'border-white/15' : 'border-gray-200'

  return (
    <div className={`${background} ${ratioClasses[aspectRatio]} relative w-full overflow-hidden rounded-[1.8rem] border ${borderColor}`}>
      <div className="absolute inset-0 opacity-60">
        <svg viewBox="0 0 240 180" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="overlayGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2A3FAA" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#CC2229" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect width="240" height="180" fill="url(#overlayGradient)" />
          <g stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
            <line x1="35" y1="36" x2="102" y2="82" />
            <line x1="102" y1="82" x2="164" y2="72" />
            <line x1="102" y1="82" x2="82" y2="138" />
            <line x1="164" y1="72" x2="205" y2="124" />
          </g>
          <circle cx="35" cy="36" r="8" fill="#ffffff" />
          <circle cx="102" cy="82" r="10" fill="#CC2229" />
          <circle cx="164" cy="72" r="8" fill="#122470" />
          <circle cx="82" cy="138" r="7" fill="#ffffff" />
          <circle cx="205" cy="124" r="9" fill="#2A3FAA" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 h-4 w-32 bg-navy-800" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-4 w-20 bg-red-600" aria-hidden="true" />
      <div className="relative flex h-full w-full items-center justify-center px-6 text-center">
        <div className="rounded-2xl border border-white/30 bg-white/70 px-6 py-5 backdrop-blur-sm">
          <span className={`text-xs uppercase tracking-[0.3em] ${textColor}`}>ARXA visual</span>
          <p className={`mt-2 text-xl font-semibold ${textColor}`}>{label}</p>
        </div>
      </div>
    </div>
  )
}
