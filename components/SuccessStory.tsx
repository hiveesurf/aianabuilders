'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiTarget, FiAward } from 'react-icons/fi'

export default function SuccessStory() {
  const stats = [
    {
      icon: FiTrendingUp,
      title: '25 Years',
      description: 'Of Excellence',
      gradient: 'from-primary-500 to-primary-700',
      bgGradient: 'from-primary-50 to-primary-100',
      chartData: [20, 40, 60, 80, 100],
      color: '#0284c7'
    },
    {
      icon: FiTarget,
      title: 'Best Quality',
      description: 'Services',
      gradient: 'from-blue-500 to-blue-700',
      bgGradient: 'from-blue-50 to-blue-100',
      chartData: [30, 50, 70, 90, 95],
      color: '#3b82f6'
    },
    {
      icon: FiAward,
      title: 'Reputed',
      description: 'Real Estate Consultant',
      gradient: 'from-green-500 to-green-700',
      bgGradient: 'from-green-50 to-green-100',
      chartData: [25, 45, 65, 85, 100],
      color: '#10b981'
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-estate-dark mb-4">
            Success Story
          </h2>
          <p className="text-xl text-estate-medium max-w-3xl mx-auto">
            Aiana Builders working since last 25 Year in the real estate sector and serving our clients with the best quality of Services
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => {
            const IconComponent = item.icon
            const maxValue = Math.max(...item.chartData)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${item.bgGradient} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  {IconComponent && <IconComponent className="w-10 h-10 text-white" />}
                </div>
                
                {/* Circular Progress Chart */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke={item.color}
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 56 * (1 - 0.85) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className="drop-shadow-md"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold" style={{ color: item.color }}>85%</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-estate-dark text-center mb-2">{item.title}</h3>
                <p className="text-estate-medium text-center font-medium">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

