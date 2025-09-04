"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function ProgramDetailsSection() {
  const { isArabic } = useLanguage();
  return (
    <section className="bg-[#0A173C] py-20">
      <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row gap-20 items-center justify-between">
        {/* Left Side */}
        <div className="flex-1 text-white max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 relative">
            {isArabic ? (
              <>
                طوّر مهارات مؤسستك بالكامل<br />مع برنامجنا الشامل
              </>
            ) : (
              <>Upskill Your Entire Organization With <br /> Our Comprehensive Program</>
            )}
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-[#16A34A] rounded-full"></div>
          </h2>
          <p className="mb-10 text-[#cfd8e3] leading-relaxed">
            {isArabic ? "توفر عدة الاستدامة المهارات والأدوات والرؤى اللازمة للتعامل مع مشهد ممارسات ESG المتطور في المملكة العربية السعودية." : "The Sustainability Toolkit provides the skills, tools, and insights needed to navigate the evolving landscape of ESG practices in Saudi Arabia."}
          </p>
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl grid place-items-center group-hover:bg-white/20 transition-colors duration-300">
                <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Mask%20group.png" alt="Vision 2030" width={36} height={36} style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div className="font-semibold mb-1">{isArabic ? "برنامج ESG دولي بملاءمة إقليمية" : "International ESG Program with Regional Relevance"}</div>
                <div className="text-[#cfd8e3] text-sm leading-relaxed">{isArabic ? "برنامج ESG مشترك بين RSM السعودية والكويت، متوافق مع المعايير الدولية وملائم لمبادرات مثل رؤية السعودية 2030." : "A Joint ESG Program between RSM Saudi Arabia and Kuwait Aligned with international standards and relevant to initiatives such as Saudi Arabia's Vision 2030."}</div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl grid place-items-center group-hover:bg-white/20 transition-colors duration-300">
                <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Mask%20group%20(1).png" alt="Certified" width={36} height={36} style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div className="font-semibold mb-1">{isArabic ? "برنامج معتمد دوليًا" : "International Certified Program"}</div>
                <div className="text-[#cfd8e3] text-sm leading-relaxed">{isArabic ? "معتمد من جهات رائدة مثل المؤسسة العامة للتدريب التقني والمهني وRSM." : "Accredited by leading industry bodies including TVTC, and RSM."}</div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl grid place-items-center group-hover:bg-white/20 transition-colors duration-300">
                <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Mask%20group%20(2).png" alt="Case Studies" width={36} height={36} style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div className="font-semibold mb-1">{isArabic ? "دراسات حالة واقعية" : "Real Case Studies"}</div>
                <div className="text-[#cfd8e3] text-sm leading-relaxed">{isArabic ? "تعلّم من أمثلة حقيقية في المملكة العربية السعودية والأسواق العالمية." : "Learn from real–world examples from KSA and global markets."}</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-lg border-2 border-[#009BDE] transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-xl font-bold mb-8 text-[#00163A] relative">
              {isArabic ? "تفاصيل البرنامج" : "Program Details"}
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#16A34A] rounded-full"></div>
            </h3>
            <div className="space-y-8 mb-8">
              {/* Duration */}
              <div className="flex items-center gap-5 group">
                <div className="bg-[#E6F7FD] rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/div.png" alt="Duration" width={40} height={40} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#00163A]">{isArabic ? "المدة" : "Duration"}</div>
                  <div className="text-sm text-[#717171]">{isArabic ? "3 أيام (9 ساعات)" : "3 Days (9 Hours)"}</div>
                </div>
              </div>
              {/* Delivery */}
              <div className="flex items-center gap-5 group">
                <div className="bg-[#E6F7FD] rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/div%20(1).png" alt="Online Mode" width={40} height={40} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#00163A]">{isArabic ? "طريقة التقديم" : "Mode of Delivery"}</div>
                  <div className="text-sm text-[#717171]">{isArabic ? "عن بُعد" : "Online"}</div>
                </div>
              </div>
              {/* Dates */}
              <div className="flex items-center gap-5 group">
                <div className="bg-[#E6F7FD] rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/div.png" alt="Dates" width={40} height={40} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#00163A]">{isArabic ? "التواريخ" : "Dates"}</div>
                  <div className="text-sm text-[#717171]">{isArabic ? "29 سبتمبر - 1 أكتوبر 2025" : "29th September - 1st October 2025"}</div>
                </div>
              </div>
              {/* Certification */}
              <div className="flex items-center gap-5 group">
                <div className="bg-[#E6F7FD] rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Image src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/div%20(2).png" alt="Certificate" width={40} height={40} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#00163A]">{isArabic ? "الشهادة" : "Certification"}</div>
                  <div className="text-sm text-[#717171]">{isArabic ? "شهادة معترف بها في القطاع بعد الإكمال" : "Industry-recognized certificate upon completion"}</div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => window.open('https://rsmacademy-sa.com/courses/36', '_blank')}
              className="w-full bg-[#16A34A] hover:bg-[#1fa85a] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              {isArabic ? "سجّل في البرنامج" : "Register for the program"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 