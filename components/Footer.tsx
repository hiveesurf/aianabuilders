'use client'

import Link from 'next/link'
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Aiana Builders</h3>
            <p className="text-gray-300 mb-4">
              Serving clients since 1990 with excellence in real estate services across Faridabad and NCR.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/residential" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/renting" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Renting
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Property Sale & Purchase</li>
              <li>Property Renting</li>
              <li>Property Registry</li>
              <li>Power of Attorney</li>
              <li>Property Maintenance</li>
              <li>House Tax Payment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 mt-1 text-accent-400" />
                <div>
                  <p className="text-gray-300">Head Office</p>
                  <p className="text-sm text-gray-400">Villa No. - 10 Ground Floor, Block- V</p>
                  <p className="text-sm text-gray-400">Charmwood Village Faridabad</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 mt-1 text-accent-400" />
                <div>
                  <p className="text-gray-300">Branch Office</p>
                  <p className="text-sm text-gray-400">C/129, Kant Enclave, Near Surajkund</p>
                  <p className="text-sm text-gray-400">Faridabad (Haryana)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-accent-400" />
                <a href="https://wa.me/917008310868" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                  +91 7008310868
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-accent-400" />
                <a href="mailto:info@aianabuilders.com" className="text-gray-300 hover:text-accent-400">
                  info@aianabuilders.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aiana Builders and Promoters Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

