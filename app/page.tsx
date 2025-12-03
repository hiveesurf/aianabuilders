import Hero from '@/components/Hero'
import SuccessStory from '@/components/SuccessStory'
import Services from '@/components/Services'
import PopularProjects from '@/components/PopularProjects'
import ExclusiveDeals from '@/components/ExclusiveDeals'
import LatestProperties from '@/components/LatestProperties'
import WelcomeSection from '@/components/WelcomeSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PopularProjects />
      <ExclusiveDeals />
      <LatestProperties />
      <WelcomeSection />
      <SuccessStory />
      <Services />
    </div>
  )
}

