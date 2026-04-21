import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { SectionTitle } from '../ui/SectionTitle'
import { PlaceholderImage } from '../ui/PlaceholderImage'

export function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
        <div className="relative">
          <PlaceholderImage label="About ARXA" aspectRatio="4/3" theme="light" />
          <div className="absolute bottom-0 left-0 h-3 w-24 bg-navy-800" aria-hidden="true" />
          <div className="absolute bottom-0 left-24 h-3 w-16 bg-red-600" aria-hidden="true" />
        </div>

        <div className="flex flex-col justify-center gap-8">
          <SectionTitle
            eyebrow="About ARXA"
            title="Driving pharmaceutical care with global reach and trusted science."
            subtitle="ARXA combines regulatory expertise, clinical insight, and global distribution to deliver reliable medicines and research solutions for patients and partners worldwide."
          />

          <div className="space-y-5 text-gray-700">
            <p>
              At ARXA, we partner with healthcare providers, manufacturers, and research teams to bring compliant and innovative pharmaceutical services to market. Our work is grounded in ethical governance, precise operations, and a deep commitment to patient outcomes.
            </p>
            <p>
              With regional expertise, international logistics, and science-first research, we help organizations scale treatments responsibly, improve access, and preserve quality across every step of the supply chain.
            </p>
          </div>

          <Button variant="ghost" size="md" href="/about" icon={ArrowRight} iconPosition="right">
            Learn More
          </Button>
        </div>
      </div>
      </div>
    </section>
  )
}
