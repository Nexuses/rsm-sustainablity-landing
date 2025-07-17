"use client";

import Image from "next/image";

export default function ProgramDetailsSection() {
  return (
    <section className="bg-[#0A173C] py-20">
      <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row gap-20 items-center justify-between">
        {/* Left Side */}
        <div className="flex-1 text-white max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 relative">
            Upskill Your Entire Organization With <br /> Our Comprehensive Program
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-[#16A34A] rounded-full"></div>
          </h2>
          <p className="mb-10 text-[#cfd8e3] leading-relaxed">
            The Sustainability Toolkit provides the skills, tools, and insights needed to navigate the evolving landscape of ESG practices in Saudi Arabia.
          </p>
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
              <div className="min-w-[40px] bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Mask%20group.png" alt="Vision 2030" width={40} height={40} />
              </div>
              <div>
                <div className="font-semibold mb-1">Global ESG Program with Regional Relevance</div>
                <div className="text-[#cfd8e3] text-sm leading-relaxed">Aligned with international standards and relevant to initiatives like Saudi Arabia’s Vision 2030.</div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
              <div className="min-w-[40px] bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Mask%20group%20(1).png" alt="Certified" width={40} height={40} />
              </div>
              <div>
                <div className="font-semibold mb-1">Globally Certified Program</div>
                <div className="text-[#cfd8e3] text-sm leading-relaxed">Accredited by leading industry bodies including TVTC, GRI, and PRC.</div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
              <div className="min-w-[40px] bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Mask%20group%20(2).png" alt="Case Studies" width={40} height={40} />
              </div>
              <div>
                <div className="font-semibold mb-1">Real Case Studies</div>
                <div className="text-[#cfd8e3] text-sm leading-relaxed">Learn from real–world examples from KSA and global markets.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-lg border-2 border-[#009BDE] transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-xl font-bold mb-8 text-[#00163A] relative">
              Program Details
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#16A34A] rounded-full"></div>
            </h3>
            <div className="space-y-8 mb-8">
              {/* Duration */}
              <div className="flex items-center gap-5 group">
                <div className="bg-[#E6F7FD] rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/div.png" alt="Duration" width={40} height={40} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#00163A]">Duration</div>
                  <div className="text-sm text-[#717171]">4 Days (16 Accredited Hours)</div>
                </div>
              </div>
              {/* Delivery */}
              <div className="flex items-center gap-5 group">
                <div className="bg-[#E6F7FD] rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/div%20(1).png" alt="Online Mode" width={40} height={40} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#00163A]">Delivery</div>
                  <div className="text-sm text-[#717171]">Online Mode</div>
                </div>
              </div>
              {/* Certification */}
              <div className="flex items-center gap-5 group">
                <div className="bg-[#E6F7FD] rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/div%20(2).png" alt="Certificate" width={40} height={40} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#00163A]">Certification</div>
                  <div className="text-sm text-[#717171]">Industry-recognized certificate upon completion</div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => window.open('https://deu9t.share.hsforms.com/2XauVAU1EQX6OrmHo9xmllA', '_blank')}
              className="w-full bg-[#16A34A] hover:bg-[#1fa85a] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              Register for the program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 