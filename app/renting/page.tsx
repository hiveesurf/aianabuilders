import RentingHero from '@/components/RentingHero'
import RentalProperties from '@/components/RentalProperties'
import RentingFeatures from '@/components/RentingFeatures'

export default function Renting() {
  return (
    <div className="min-h-screen pt-20">
      <RentingHero />
      <RentalProperties />
      <RentingFeatures />
    </div>
  )
}

