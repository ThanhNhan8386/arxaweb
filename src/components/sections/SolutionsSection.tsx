import { motion } from 'framer-motion'
import { Check, Globe2, Lightbulb, Microscope, Truck } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import type { Solution } from '../../types'

const solutions: Solution[] = [
  {
    id: 1,
    icon: Truck,
    title: 'Pharmaceutical Distribution',
    description: 'Secure delivery and supply management for pharmaceutical brands and healthcare partners.',
    features: ['Temperature-controlled handling', 'Regulatory compliance', 'Real-time tracking'],
  },
  {
    id: 2,
    icon: Microscope,
    title: 'Clinical Research Support',
    description: 'Guidance through clinical programs with regulatory oversight and operational excellence.',
    features: ['Trial planning', 'Site coordination', 'Data integrity'],
  },
  {
    id: 3,
    icon: Lightbulb,
    title: 'Healthcare Innovation',
    description: 'Transformative programs that accelerate new therapies and patient-first solutions.',
    features: ['Product design', 'Strategy consulting', 'Technology enablement'],
  },
  {
    id: 4,
    icon: Globe2,
    title: 'Global Supply Chain',
    description: 'End-to-end sourcing and logistics for consistent access across international markets.',
    features: ['Custom sourcing', 'Risk mitigation', 'Global distribution'],
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-gray-50 py-24" id="solutions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
          <span className="guideline-title">Digital Applications</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Solution Modules</span>
        </div>
        <SectionTitle title="Our Solutions" subtitle="End-to-end pharmaceutical services designed to support every stage of healthcare delivery." align="center" theme="dark" />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.article
                key={solution.id}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.05 }}
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-red-50 text-red-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-4 h-1 w-12 rounded-full bg-red-600" />
                <h3 className="mt-6 text-xl font-bold text-navy-800">{solution.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{solution.description}</p>
                <ul className="mt-6 space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-red-600" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 h-[3px] w-full rounded-full bg-gradient-to-r from-navy-800 via-navy-800 to-red-600" />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
