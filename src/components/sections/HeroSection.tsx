import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-12 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-navy-100 bg-white shadow-[0_18px_45px_rgba(13,31,92,0.08)]">
        <div className="flex items-center justify-between border-b border-navy-100 px-6 py-4 sm:px-10">
          <span className="guideline-title">Website Application</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">Version 1.0</span>
        </div>

        <div className="grid gap-10 bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-8 text-white">
            <Badge label="Trusted Pharmaceutical Partner" variant="red" />
            <div className="space-y-6">
              <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Better Health.
                <br />
                Better Life.
              </h1>
              <p className="max-w-xl text-lg text-gray-200">
                Delivering trusted pharmaceutical solutions through science, innovation, and care.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href="#solutions">
                Learn More
              </Button>
              <Button variant="outline-white" size="lg" href="/solutions">
                Our Solutions
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {['FDA Compliant', 'ISO Certified', 'Global Network'].map((label) => (
                <div key={label} className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-red-400" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-gray-100">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/20 bg-navy-700 p-6 shadow-2xl shadow-black/30">
              <svg viewBox="0 0 520 520" className="h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#70a4ff" />
                  <stop offset="100%" stopColor="#ff7182" />
                </linearGradient>
              </defs>
              <rect width="520" height="520" rx="48" fill="url(#heroGradient)" opacity="0.08" />
              <g stroke="rgba(255,255,255,0.35)" strokeWidth="2">
                <line x1="120" y1="120" x2="240" y2="210" />
                <line x1="170" y1="320" x2="320" y2="260" />
                <line x1="320" y1="160" x2="430" y2="240" />
                <line x1="230" y1="120" x2="420" y2="100" />
                <line x1="150" y1="210" x2="100" y2="340" />
              </g>
              <motion.circle cx="120" cy="110" r="18" fill="#70a4ff" animate={{ y: [0, -14, 0] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.circle cx="250" cy="220" r="22" fill="#ffffff" animate={{ y: [0, -20, 0] }} transition={{ duration: 3.4, repeat: Infinity, delay: 0.2 }} />
              <motion.circle cx="380" cy="160" r="16" fill="#ff6b6b" animate={{ y: [0, -12, 0] }} transition={{ duration: 2.8, repeat: Infinity, delay: 0.4 }} />
              <motion.circle cx="330" cy="320" r="24" fill="#70a4ff" animate={{ y: [0, -18, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.6 }} />
              <motion.circle cx="160" cy="320" r="14" fill="#ffffff" animate={{ y: [0, -10, 0] }} transition={{ duration: 2.6, repeat: Infinity, delay: 0.8 }} />
              <circle cx="120" cy="110" r="10" fill="#ffffff" />
              <circle cx="250" cy="220" r="10" fill="#122470" />
              <circle cx="380" cy="160" r="10" fill="#d93a3f" />
              <circle cx="330" cy="320" r="10" fill="#ffffff" />
              <circle cx="160" cy="320" r="10" fill="#122470" />
              </svg>
              <div className="absolute bottom-0 left-0 h-3 w-28 bg-white/80" />
              <div className="absolute bottom-0 right-0 h-3 w-20 bg-red-600" />
              <div className="absolute right-[-25px] top-[55%] h-24 w-24 rotate-45 rounded-lg bg-red-600/30" />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 border-t border-navy-100 px-6 py-5 text-sm sm:grid-cols-3 sm:px-10">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <p className="font-semibold text-navy-800">Modern</p>
            <p className="mt-1 text-gray-600">Clean and structured visual system.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <p className="font-semibold text-navy-800">Medical</p>
            <p className="mt-1 text-gray-600">Science-forward identity and details.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <p className="font-semibold text-navy-800">Trustworthy</p>
            <p className="mt-1 text-gray-600">Professional touchpoints and consistency.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
