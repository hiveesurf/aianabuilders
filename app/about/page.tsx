import AboutHero from '@/components/AboutHero'
import AboutContent from '@/components/AboutContent'
import Experts from '@/components/Experts'
import SpecialProjects from '@/components/SpecialProjects'

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <AboutHero />
      <AboutContent />
      <Experts />
      <SpecialProjects />
    </div>
  )
}

