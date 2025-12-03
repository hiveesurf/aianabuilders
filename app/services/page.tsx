import ServicesHero from '@/components/ServicesHero'
import ServicesList from '@/components/ServicesList'
import ServiceDetails from '@/components/ServiceDetails'

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      <ServicesHero />
      <ServicesList />
      <ServiceDetails />
    </div>
  )
}

