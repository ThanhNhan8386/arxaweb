import type { Testimonial } from '../../types'
import { SectionTitle } from '../ui/SectionTitle'

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Lisa Moreno',
    title: 'Chief Medical Officer',
    company: 'VitalHealth Partners',
    quote: 'ARXA delivered a seamless clinical trial supply chain and helped our team stay on schedule with complete confidence.',
    initials: 'LM',
  },
  {
    id: 2,
    name: 'Michael Reed',
    title: 'Head of Global Procurement',
    company: 'PharmaReach',
    quote: 'Their regulatory expertise and logistics network made our product launch feel effortless across multiple countries.',
    initials: 'MR',
  },
  {
    id: 3,
    name: 'Amira Khan',
    title: 'Director of Research',
    company: 'Nova Clinical',
    quote: 'The ARXA team is reliable, forward-thinking, and deeply knowledgeable in every aspect of pharmaceutical innovation.',
    initials: 'AK',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Trusted by Partners Worldwide" subtitle="Hear from the organizations who rely on ARXA for pharmaceutical solutions and research support." align="center" theme="dark" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-red-200 text-6xl font-serif leading-none">“</div>
              <p className="mt-6 text-gray-700 italic">{testimonial.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 text-white">{testimonial.initials}</div>
                <div>
                  <p className="font-semibold text-navy-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
              <div className="mt-6 h-[3px] w-full rounded-full bg-gradient-to-r from-navy-800 to-red-600" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
