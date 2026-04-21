import { Button } from '../ui/Button'

export function CtaBannerSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-navy-100 bg-navy-800 px-4 py-14 text-center shadow-[0_16px_40px_rgba(13,31,92,0.25)] sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Ready to Partner with ARXA?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300">
          Connect with our team to discuss pharmaceutical distribution, clinical research, innovation services, and global supply chain solutions.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg" href="/contact">
            Get in Touch
          </Button>
          <Button variant="outline-white" size="lg" href="/solutions">
            View Solutions
          </Button>
        </div>
        <div className="mt-10 flex justify-center gap-2" aria-hidden="true">
          <span className="h-[3px] w-14 rounded-full bg-white" />
          <span className="h-[3px] w-10 rounded-full bg-red-500" />
        </div>
      </div>
    </section>
  )
}
