import { SectionTitle } from '../components/ui/SectionTitle'
import { Button } from '../components/ui/Button'

export function AboutDetailsPage() {
  return (
    <section className="bg-white">
      <section className="bg-navy-800 py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="About ARXA"
            title="Our Complete Story"
            subtitle="Learn more about our journey, values, and commitment to healthcare excellence."
            theme="light"
          />
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-navy-800">Our Story</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  ARXA was founded with a clear vision: to bridge the gap between high-quality pharmaceutical products and the communities that need them most. Our journey began with a commitment to excellence, integrity, and patient-centered care.
                </p>
                <p>
                  Today, we stand as a trusted partner in the healthcare ecosystem, working alongside manufacturers, healthcare providers, and pharmacies to ensure that life-changing therapies reach those who need them.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-navy-800">Our Values</h2>
              <div className="space-y-6">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-navy-800">Integrity</h3>
                  <p className="text-gray-600">
                    We operate with transparency and honesty in every interaction, building trust through consistent, ethical practices.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-navy-800">Excellence</h3>
                  <p className="text-gray-600">
                    We pursue the highest standards in pharmaceutical distribution, ensuring quality and compliance at every step.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-navy-800">Compassion</h3>
                  <p className="text-gray-600">
                    We understand that behind every prescription is a person seeking better health, and we serve with empathy and care.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-navy-800">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously evolve our processes and partnerships to meet the changing needs of modern healthcare.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-navy-800">Our Commitment</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  We are committed to sustainable growth that benefits all stakeholders—from patients and healthcare providers to our partners and communities. Our approach prioritizes long-term relationships over short-term gains.
                </p>
                <p>
                  Through rigorous compliance standards, global logistics expertise, and a patient-first mindset, we ensure that every product we distribute meets the highest quality standards and reaches its destination safely and on time.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-8">
              <Button variant="primary" size="lg" href="/contact">
                Contact Us
              </Button>
              <Button variant="outline" size="lg" href="/about">
                Back to About
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
