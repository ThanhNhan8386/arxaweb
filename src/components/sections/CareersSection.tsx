import { Briefcase, FlaskConical, Globe2, ShieldCheck } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'

const careerItems = [
  { icon: ShieldCheck, label: 'Operational leaders for pharmaceutical logistics and compliance' },
  { icon: FlaskConical, label: 'Clinical research specialists with trial management experience' },
  { icon: Globe2, label: 'Supply chain experts focused on global distribution' },
  { icon: Briefcase, label: 'Quality assurance professionals driving regulatory excellence' },
]

export function CareersSection() {
  return (
    <section className="bg-white py-24" id="careers">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
          <span className="guideline-title">People, Culture & Community</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Employee Experience</span>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Careers"
              title="Join ARXA and help shape the future of pharmaceutical care."
              subtitle="We are looking for collaborators who share our dedication to quality, compliance, and patient-first innovation."
            />
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <ul className="space-y-4 text-gray-700">
              {careerItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-6">{item.label}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
