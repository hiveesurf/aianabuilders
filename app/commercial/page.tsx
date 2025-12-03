import CommercialHero from '@/components/CommercialHero'
import CommercialProperties from '@/components/CommercialProperties'
import CommercialFeatures from '@/components/CommercialFeatures'

export default function Commercial() {
  return (
    <div className="min-h-screen pt-20">
      <CommercialHero />
      <CommercialProperties />
      <CommercialFeatures />
    </div>
  )
}

