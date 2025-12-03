import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-estate-dark text-center mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-estate-medium text-center max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}

