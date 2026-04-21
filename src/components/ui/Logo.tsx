import { motion } from 'framer-motion'
import logoImage from '../../assets/logo-cropped.png'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'h-8 w-32',
  md: 'h-10 w-40',
  lg: 'h-12 w-48',
}

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const imageWrap = variant === 'light' ? 'rounded-lg bg-white/95 px-2 py-1 shadow-sm' : ''
  const subtitleColor = variant === 'light' ? 'text-slate-200' : 'text-gray-600'

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`${sizes[size]} ${imageWrap}`}>
            <img
              src={logoImage}
              alt="ARXA logo"
              className="h-full w-full object-contain"
              loading="eager"
              width={220}
              height={80}
            />
          </div>
        </motion.div>
      </div>
      <p className={`pl-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] ${subtitleColor}`}>
        THE AMERI-RX ALLIANCE LLC
      </p>
    </div>
  )
}
