import { motion } from 'framer-motion'
import { Award, Beaker, ShieldCheck } from 'lucide-react'
import { Button } from '../ui/Button'

const scienceFeatures = [
  {
    id: 1,
    icon: Beaker,
    title: 'Advanced R&D Labs',
    description: 'State-of-the-art laboratories that accelerate pharmaceutical discovery and formulation.',
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: 'Clinical Trial Support',
    description: 'Operational and regulatory support for successful trial execution across regions.',
  },
  {
    id: 3,
    icon: Award,
    title: 'Regulatory Compliance',
    description: 'Documentation, certification, and quality processes built for global standards.',
  },
]

export function ScienceSection() {
  return (
    <section className="bg-navy-800 py-24 text-white" id="science">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between border-b border-white/20 pb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Photography & Visual Style</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">Science and Technology</span>
        </div>

        <div className="grid gap-16 rounded-[2rem] border border-white/15 bg-white/5 p-6 backdrop-blur-sm lg:grid-cols-2 lg:p-10">
        <div className="space-y-8">
          <span className="inline-flex rounded-full bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Research & Science
          </span>
          <div className="space-y-6">
            <h2 className="text-5xl font-black leading-tight sm:text-6xl">Science.<br />Care.<br />Trust.</h2>
            <p className="max-w-xl text-base text-gray-300">
              Our scientific practice blends proven research with compassionate care to deliver therapies and services that communities can rely on.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { value: '200+', label: 'Research Projects' },
              { value: '50+', label: 'Publications' },
              { value: '15+', label: 'Patents' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/15 bg-white/10 p-6">
                <p className="text-4xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>

          <Button variant="primary" size="lg" href="/solutions">
            Explore Research
          </Button>
        </div>

        <div className="space-y-6">
          {scienceFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
      </div>
    </section>
  )
}
