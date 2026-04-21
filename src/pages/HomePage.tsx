import { AboutSection } from '../components/sections/AboutSection'
import { CtaBannerSection } from '../components/sections/CtaBannerSection'
import { CareersSection } from '../components/sections/CareersSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { StatsSection } from '../components/sections/StatsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <CareersSection />
      <CtaBannerSection />
    </>
  )
}
