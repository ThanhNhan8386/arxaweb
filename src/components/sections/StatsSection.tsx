import { Clock3, Package, Globe2, Star } from 'lucide-react'
import type { StatItem } from '../../types'

const stats: StatItem[] = [
  { value: '10+', label: 'Years of Experience', icon: Clock3 },
  { value: '500+', label: 'Products Delivered', icon: Package },
  { value: '50+', label: 'Partner Countries', icon: Globe2 },
  { value: '99%', label: 'Client Satisfaction', icon: Star },
]

export function StatsSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="rounded-3xl border border-gray-200 bg-white px-6 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-4xl font-bold text-navy-800">{stat.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-600">{stat.label}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <div className="h-1 w-16 rounded-full bg-red-600" />
        </div>
      </div>
    </section>
  )
}
