import { SectionTitle } from '../components/ui/SectionTitle'
import { Button } from '../components/ui/Button'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'

export function AboutPage() {
  return (
    <section className="bg-white">
      <section className="bg-navy-800 py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                eyebrow="About ARXA"
                title="A trusted pharmaceutical alliance built to deliver scale, safety, and care."
                subtitle="ARXA bridges regional expertise, global logistics, and clinical knowledge to create pharmaceutical partnerships built for today’s healthcare challenges."
                theme="light"
              />
              <p className="mt-8 max-w-2xl text-base text-gray-300">
                We work with manufacturers, investigators, and healthcare providers to simplify access and strengthen outcomes. From trials to long-term distribution, our approach is defined by clarity, compliance, and compassion.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button variant="outline-white" size="lg" href="/contact">
                  Contact Our Team
                </Button>
                <Button variant="primary" size="lg" href="/solutions">
                  Explore Solutions
                </Button>
              </div>
            </div>
            <div>
              <PlaceholderImage label="Company Overview" aspectRatio="16/9" theme="dark" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                headline: 'Regulatory Leadership',
                text: 'Our compliance-first systems keep products safe and market-ready across countries.',
              },
              {
                headline: 'Patient Focus',
                text: 'Every service is designed with patient access, quality, and care at the center.',
              },
              {
                headline: 'Global Operations',
                text: 'Logistics and sourcing expertise ensure consistent availability across multiple regions.',
              },
            ].map((item) => (
              <article key={item.headline} className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-navy-800">{item.headline}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
