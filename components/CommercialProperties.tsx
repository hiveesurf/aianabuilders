'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiSquare, FiArrowRight } from 'react-icons/fi'
import { generateWhatsAppUrl } from '@/utils/whatsapp'

export default function CommercialProperties() {
  const properties = [
    {
      name: 'Office Space - Sector 15',
      location: 'Sector 15, Faridabad',
      type: 'Office',
      area: '2000-5000 sq ft',
      price: '₹50/sq ft/month',
      features: ['Parking', 'Security', 'Lift']
    },
    {
      name: 'Retail Shop - Sector 16',
      location: 'Sector 16, Faridabad',
      type: 'Retail',
      area: '500-2000 sq ft',
      price: '₹80/sq ft/month',
      features: ['Main Road', 'Parking', 'Storage']
    },
    {
      name: 'Warehouse - Sector 18',
      location: 'Sector 18, Faridabad',
      type: 'Warehouse',
      area: '5000-10000 sq ft',
      price: '₹25/sq ft/month',
      features: ['Loading Dock', 'Security', '24/7 Access']
    },
    {
      name: 'Showroom - Sector 21',
      location: 'Sector 21, Faridabad',
      type: 'Showroom',
      area: '1500-3000 sq ft',
      price: '₹70/sq ft/month',
      features: ['Main Road', 'Parking', 'Display Area']
    },
    {
      name: 'Commercial Plot',
      location: 'Sector 22, Faridabad',
      type: 'Plot',
      area: '1000-5000 sq ft',
      price: '₹8000/sq ft',
      features: ['Corner Plot', 'HUDA Approved', 'Main Road']
    },
    {
      name: 'Co-working Space',
      location: 'Sector 25, Faridabad',
      type: 'Office',
      area: '100-500 sq ft',
      price: '₹12000/month',
      features: ['Furnished', 'WiFi', 'Meeting Room']
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-estate-dark mb-4">
            Available Commercial Properties
          </h2>
          <p className="text-xl text-estate-medium max-w-3xl mx-auto">
            Prime commercial spaces in Faridabad and NCR
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-accent-400 to-estate-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-primary-600/30 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-estate-dark">
                    {property.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-estate-dark mb-2">{property.name}</h3>
                <div className="flex items-center text-estate-medium mb-4">
                  <FiMapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-estate-medium text-sm">
                    <FiSquare className="w-4 h-4 mr-2" />
                    <span>{property.area}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-primary-50 text-estate-dark px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-2xl font-bold text-estate-dark mb-4">{property.price}</p>
                  <a
                    href={generateWhatsAppUrl({
                      name: property.name,
                      type: property.type,
                      location: property.location,
                      price: property.price,
                      area: property.area,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Enquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

