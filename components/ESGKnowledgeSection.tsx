"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ESGKnowledgeSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative px-4 sm:px-6 md:px-8 pt-12 md:pt-16 pb-12 md:pb-20 bg-[#192334] overflow-hidden rounded-[16px] md:rounded-[24px] mx-4 sm:mx-8 md:mx-[160px] mt-[16px] mb-6 md:mb-[48px]"
    >
      
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Frame%201171275922.png"
          alt="Background"
          fill
          className="object-cover object-center opacity-30 rounded-[16px] md:rounded-[24px]"
          priority
        />
      </div>
      <div className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center text-center mb-6 md:mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 px-2">
            Gain ESG Knowledge That Drives Individual and Business Impact
          </h2>
          <p className="text-white/80 max-w-4xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Whether you're an individual professional looking to build ESG expertise, or an organization aiming to drive sustainable business practices — our training programs are designed to support your goals.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {/* Upcoming Session Card */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-start justify-between min-h-[200px] sm:min-h-[220px] border border-white hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#27C26C]/10 text-[#27C26C] mr-2 sm:mr-3">
                <Image
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/div%20(3).png"
                  alt="Upcoming Session Icon"
                  width={32}
                  height={32}
                  className="object-contain w-4 h-4 sm:w-6 sm:h-6"
                />
              </span>
              <span className="font-semibold text-lg sm:text-xl text-gray-900">Upcoming Session</span>
            </div>
            <div className="mb-3 sm:mb-4">
              <div className="text-gray-700 font-medium mb-1 text-base sm:text-lg">29th - 30th September 2025</div>
              <div className="text-gray-500 text-sm sm:text-base">Limited seats available. Register early to secure your spot.</div>
            </div>
            <a
              href="https://drive.google.com/file/d/1yuaep8c1Uzs0hp7bK4Y6Z_BkMwv6R4i4/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#27C26C] hover:bg-[#1fa85a] text-white font-semibold px-6 py-2 rounded transition-all duration-300 text-sm inline-block text-center relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Program Details
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </motion.div>
          {/* Request a Custom Program Card */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-start justify-between min-h-[200px] sm:min-h-[220px] border border-white hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#009CDE]/10 text-[#009CDE] mr-2 sm:mr-3">
                <Image
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/div%20(5).png"
                  alt="Request a Custom Program Icon"
                  width={32}
                  height={32}
                  className="object-contain w-4 h-4 sm:w-6 sm:h-6"
                />
              </span>
              <span className="font-semibold text-lg sm:text-xl text-gray-900">Customized Training for Your Organisation</span>
            </div>
            <div className="mb-3 sm:mb-4">
              <div className="text-gray-700 text-sm sm:text-base mb-1">Need a training programme tailored to your team’s exact needs? 
              Book a call for a training programme tailored precisely to your team’s needs.</div> 
            </div>
            <a
              href="https://deu9t.share.hsforms.com/2XauVAU1EQX6OrmHo9xmllA"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#009CDE] hover:bg-[#007bb3] text-white font-semibold px-6 py-2 rounded transition-all duration-300 text-sm inline-block text-center relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Call
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 