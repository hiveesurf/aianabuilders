'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FiMenu, 
  FiX, 
  FiHome, 
  FiInfo, 
  FiBriefcase, 
  FiImage, 
  FiLayers,
  FiShoppingBag, 
  FiDollarSign, 
  FiMail 
} from 'react-icons/fi'

const navItems = [
  { href: '/', label: 'Home', iconName: 'home' },
  { href: '/about', label: 'About', iconName: 'info' },
  { href: '/services', label: 'Services', iconName: 'briefcase' },
  { href: '/gallery', label: 'Gallery', iconName: 'image' },
  { href: '/residential', label: 'Residential', iconName: 'building' },
  { href: '/commercial', label: 'Commercial', iconName: 'shoppingBag' },
  { href: '/renting', label: 'Renting', iconName: 'dollarSign' },
  { href: '/contact', label: 'Contact', iconName: 'mail' },
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: FiHome,
  info: FiInfo,
  briefcase: FiBriefcase,
  image: FiImage,
  building: FiLayers,
  shoppingBag: FiShoppingBag,
  dollarSign: FiDollarSign,
  mail: FiMail,
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const renderIcon = (iconName: string, className: string) => {
    const IconComponent = iconMap[iconName]
    if (!IconComponent) return null
    return <IconComponent className={className} />
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="text-3xl font-bold text-primary-600 tracking-tight">
              Aiana Builders
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-1 font-medium ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {renderIcon(item.iconName, 'w-4 h-4')}
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-primary-50"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all font-medium ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {renderIcon(item.iconName, 'w-5 h-5')}
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
