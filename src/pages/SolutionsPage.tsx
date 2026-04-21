import { SolutionsSection } from '../components/sections/SolutionsSection'
import { CtaBannerSection } from '../components/sections/CtaBannerSection'

export function SolutionsPage() {
  return (
    <>
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-navy-800 px-8 py-16 text-white shadow-2xl sm:px-12">
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Solutions built for every stage of pharmaceutical growth.</h1>
            <p className="mt-6 max-w-3xl text-base text-gray-300">
              ARXA provides integrated services from research support to distribution and supply chain management, helping organizations deliver medicines safely and consistently.
            </p>
          </div>
        </div>
      </section>
      <SolutionsSection />
      <CtaBannerSection />
    </>
  )
}
