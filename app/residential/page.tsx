import ResidentialHero from '@/components/ResidentialHero'
import ResidentialProjects from '@/components/ResidentialProjects'
import ResidentialFeatures from '@/components/ResidentialFeatures'

export default function Residential() {
  return (
    <div className="min-h-screen pt-20">
      <ResidentialHero />
      <ResidentialProjects />
      <ResidentialFeatures />
    </div>
  )
}

