'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-green-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left: Text Content (60%) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:basis-3/5 max-w-2xl flex flex-col justify-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[2.4rem] md:text-[2.8rem] leading-tight mb-0"
            >
              <span className="text-[#3F9C35] font-bold inline-block hover:text-[#2E7D32] transition-colors duration-300">
                The Sustainability Toolkit:
              </span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[2.6rem] md:text-[3rem] leading-tight mb-1 text-[#5A5A5A]"
            >
              Empowering Businesses for
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[2.6rem] md:text-[3rem] leading-tight mb-6 text-[#5A5A5A]"
            >
              Positive Change
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-600 text-base md:text-lg mb-8"
            >
              Empowering organizations to build expertise, drive change, and lead with impact. Designed for forward-thinking companies ready to turn sustainability into strategic advantage.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="https://rsmacademy-sa.com/courses/36"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-sky-600 hover:bg-sky-700 text-white px-8 py-3.5 rounded-lg min-w-[180px] font-medium transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 inline-block text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Program Details
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a 
                href="https://rsmacademy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-blue-950 hover:bg-blue-900 text-white px-8 py-3.5 rounded-lg sm:ml-8 min-w-[180px] font-medium transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 inline-block text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Enroll Now
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </motion.div>
          </motion.div>
          {/* Right: Video Only (40%) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:basis-3/5 flex justify-end items-center"
          >
            <video
              src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/RSM-Hero.webm"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen"
              className="object-cover w-full h-auto max-w-[140%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 