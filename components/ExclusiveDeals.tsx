'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiTag } from 'react-icons/fi'
import { generateWhatsAppUrl } from '@/utils/whatsapp'

export default function ExclusiveDeals() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  
  const deals = [
    {
      name: 'M3M_Golfestates',
      displayName: 'M3M Golfestate™',
      description: 'Finest Golf Resort Living',
      color: 'text-green-600',
      image: '/img/image.png'
    },
    {
      name: 'M3M_Merlin',
      displayName: 'M3M Merlin™',
      description: 'SINGAPORE STYLE WORLD CLASS APARTMENTS',
      color: 'text-gray-900',
      image: '/img/image copy.png'
    },
    {
      name: 'M3M_Urbana',
      displayName: 'M3M Urbana™',
      description: 'The Latest in the Evolution of Urban Business & Retail',
      color: 'text-gray-900',
      image: '/img/image copy 2.png'
    },
    {
      name: 'M3M_Cosmopolitan',
      displayName: 'M3M Cosmopolitan™',
      description: 'STYLISH RETAIL & COMMERCIAL HUB',
      color: 'text-blue-600',
      image: '/img/image copy 3.png'
    },
    {
      name: 'M3M_Escala',
      displayName: 'M3M Escala™',
      description: 'Premium Living Experience',
      color: 'text-gray-900',
      image: '/img/image copy 4.png'
    },
    {
      name: 'M3M_Woodshire',
      displayName: 'M3M Woodshire™',
      description: 'Luxury Residential Living',
      color: 'text-gray-900',
      image: '/img/image copy 5.png'
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <FiTag className="w-5 h-5" />
            <span className="font-semibold">Exclusive Deals</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Exclusive Deal - M3M Projects
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-2">
            Aiana Builders have some M3M Exclusive deals
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Aiana Builders is authorised associate broker partner with M3M builder and we offers some exclusive deals for our clients in M3M Projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="relative h-40 w-full overflow-hidden bg-gray-200">
                {imageErrors[index] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                    <span className="text-white font-bold text-lg">{deal.displayName}</span>
                  </div>
                ) : (
                  <Image
                    src={deal.image}
                    alt={deal.displayName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${deal.color}`}>{deal.displayName}</h3>
                <p className="text-gray-600 mb-4 text-sm">{deal.description}</p>
                <a
                  href={generateWhatsAppUrl({ name: deal.name, type: 'M3M Project' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Get Deal via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/exclusive-deals"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Exclusive Deals
          </a>
        </motion.div>
      </div>
    </section>
  )
}

