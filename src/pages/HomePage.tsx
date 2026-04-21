import { AboutSection } from '../components/sections/AboutSection'
import { CtaBannerSection } from '../components/sections/CtaBannerSection'
import { CareersSection } from '../components/sections/CareersSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ScienceSection } from '../components/sections/ScienceSection'
import { SolutionsSection } from '../components/sections/SolutionsSection'
import { StatsSection } from '../components/sections/StatsSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SolutionsSection />
      <ScienceSection />
      <TestimonialsSection />
      <CareersSection />
      <CtaBannerSection />
    </>
  )
}
