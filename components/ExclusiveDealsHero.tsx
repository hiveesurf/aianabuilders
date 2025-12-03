'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ExclusiveDealsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
          alt="Exclusive Deals"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-900/70"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-lg">
            Exclusive Deal - M3M Projects
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Aiana Builders is authorised associate broker partner with M3M builder and we offers some exclusive deals for our clients in M3M Projects.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

