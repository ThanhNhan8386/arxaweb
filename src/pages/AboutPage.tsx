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
            </div>
            <div>
              <PlaceholderImage label="Company Overview" aspectRatio="16/9" theme="dark" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-navy-800">Core Brand Value</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                At the heart of our brand is "How We Live." We are committed to sustainable growth, serving with responsibility, maintaining trust, and improving health outcomes.
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-navy-800">Mission</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                As leaders in next-generation healthcare, we prioritize community service, integrity, and understanding of diverse needs. Our mission is to simplify patient healthcare access, go above and beyond for pharmacies, and serve as a golden bridge between high-standard therapies and your well-being.
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-navy-800">Vision</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We aspire to be pioneers in promoting top-tier health products worldwide. Our aim is to become the foremost distributor of natural, organic, and plant-based products in the U.S.
              </p>
            </div>

            <div className="pt-8">
              <Button variant="outline" size="lg" href="/about/details">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
