"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, ShoppingBag, User, Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isEnterpriseOpen, setIsEnterpriseOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const cartRef = useRef<HTMLDivElement>(null)
  const enterpriseRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false)
      }
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false)
      }
      if (enterpriseRef.current && !enterpriseRef.current.contains(event.target as Node)) {
        setIsEnterpriseOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="border-b border-gray-200 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo area */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-48 md:w-64"
          >
            <Link 
              href="https://rsmacademy-sa.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center h-full"
            >
              <img
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/rsm%20logo.png"
                alt="RSM Logo"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* About Us with dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                About Us
                <motion.div
                  animate={{ rotate: isAboutOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 rounded-lg bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <Link 
                        href="https://rsmacademy-sa.com/foreword" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                      >
                        Presentation
                      </Link>
                    </motion.div>
                    <div className="border-t border-gray-100"></div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                    >
                      <Link 
                        href="https://rsmacademy-sa.com/vision" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                      >
                        Vision
                      </Link>
                    </motion.div>
                    <div className="border-t border-gray-100"></div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    >
                      <Link 
                        href="https://rsmacademy-sa.com/mission" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                      >
                        Message
                      </Link>
                    </motion.div>
                    <div className="border-t border-gray-100"></div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.25 }}
                    >
                      <Link 
                        href="https://rsmacademy-sa.com/objectives" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                      >
                        Objectives
                      </Link>
                    </motion.div>
                    <div className="border-t border-gray-100"></div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      <Link 
                        href="https://rsmacademy-sa.com/core_values" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                      >
                        Our Values
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Enterprise Training with dropdown */}
            <div className="relative" ref={enterpriseRef}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setIsEnterpriseOpen(!isEnterpriseOpen)}
              >
                Institutional Training
                <motion.div
                  animate={{ rotate: isEnterpriseOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {isEnterpriseOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 rounded-lg bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <Link 
                        href="https://rsm-academy-landing.vercel.app/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                      >
                        Corporate Training
                      </Link>
                    </motion.div>
                    <div className="border-t border-gray-100"></div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                    >
                      <Link 
                        href="https://rsm-sustainability-landing.vercel.app/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                      >
                        Sustainability Toolkit Training
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav items */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="https://rsmacademy-sa.com/courses" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                Courses
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="https://rsmacademy-sa.com/courses/recorded" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                Recorded Courses
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="https://rsmacademy-sa.com/courses/online" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                Live Courses
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="https://rsmacademy-sa.com/contact_us"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-gray-900"
              >
                Contact Us
              </Link>
            </motion.div>
          </nav>

          {/* Right side - Sign in, Cart and Search */}
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:flex">
              <Link 
                href="https://rsmacademy-sa.com/login" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <User className="mr-1 h-5 w-5" />
                <span>Sign in</span>
              </Link>
            </motion.div>
            
            <div className="relative" ref={cartRef}>
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setIsCartOpen(true)}
                className="cursor-pointer"
              >
                <div className="text-gray-700 hover:text-gray-900">
                  <ShoppingBag className="h-5 w-5" />
                </div>
              </motion.div>

              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-72 rounded-lg bg-white py-4 px-6 shadow-xl ring-1 ring-black ring-opacity-5"
                    onMouseLeave={() => setIsCartOpen(false)}
                  >
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ShoppingBag className="h-12 w-12 text-gray-300" />
                      </motion.div>
                      <p className="text-gray-500 text-sm font-medium">Your shopping bag is empty</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link
                href="https://rsmacademy-sa.com/courses/search/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <Search className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="px-4 py-3 space-y-3">
              {/* Mobile About Us */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900"
                >
                  <span>About Us</span>
                  <motion.div
                    animate={{ rotate: isAboutOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      <Link href="https://rsmacademy-sa.com/foreword" className="block text-sm text-gray-600 hover:text-gray-900">Presentation</Link>
                      <Link href="https://rsmacademy-sa.com/vision" className="block text-sm text-gray-600 hover:text-gray-900">Vision</Link>
                      <Link href="https://rsmacademy-sa.com/mission" className="block text-sm text-gray-600 hover:text-gray-900">Message</Link>
                      <Link href="https://rsmacademy-sa.com/objectives" className="block text-sm text-gray-600 hover:text-gray-900">Objectives</Link>
                      <Link href="https://rsmacademy-sa.com/core_values" className="block text-sm text-gray-600 hover:text-gray-900">Our Values</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Enterprise Training */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsEnterpriseOpen(!isEnterpriseOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900"
                >
                  <span>Institutional Training</span>
                  <motion.div
                    animate={{ rotate: isEnterpriseOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isEnterpriseOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      <Link href="https://rsm-academy-landing.vercel.app/" className="block text-sm text-gray-600 hover:text-gray-900">Corporate Training</Link>
                      <Link href="https://rsm-sustainability-landing.vercel.app/" className="block text-sm text-gray-600 hover:text-gray-900">Sustainability Toolkit Training</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other mobile menu items */}
              <Link href="https://rsmacademy-sa.com/courses" className="block text-gray-700 hover:text-gray-900">Courses</Link>
              <Link href="https://rsmacademy-sa.com/courses/recorded" className="block text-gray-700 hover:text-gray-900">Recorded Courses</Link>
              <Link href="https://rsmacademy-sa.com/courses/online" className="block text-gray-700 hover:text-gray-900">Live Courses</Link>
              <Link href="https://rsmacademy-sa.com/contact_us" className="block text-gray-700 hover:text-gray-900">Contact Us</Link>
              
              {/* Mobile Sign In */}
              <Link 
                href="https://rsmacademy-sa.com/login" 
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <User className="mr-2 h-5 w-5" />
                <span>Sign in</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
