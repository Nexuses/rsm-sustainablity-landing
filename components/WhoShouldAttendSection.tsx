'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const attendees = [
  {
    title: "Business Leaders & Executives",
    desc: "Drive organizational change and integrate sustainability into business strategy.",
    icon: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Mask%20group%20(3).png" // logo link placeholder
  },
  {
    title: "ESG & Sustainability Officers",
    desc: "Enhance your expertise and stay current with global sustainability standards.",
    icon: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Mask%20group%20(4).png" // logo link placeholder
  },
  {
    title: "Risk Management Teams",
    desc: "Identify and mitigate ESG risks while capitalizing on new opportunities.",
    icon: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Mask%20group%20(5).png" // logo link placeholder
  },
  {
    title: "Corporate Communication Teams",
    desc: "Learn effective strategies for communicating sustainability initiatives and engaging with various stakeholders..",
    icon: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Mask%20group%20(6).png" // logo link placeholder
  }
];

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: (index: number) => ({
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: index * 0.1
    }
  }),
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export default function WhoShouldAttendSection() {
  const { isArabic } = useLanguage();
  const localizedAttendees = isArabic
    ? [
        {
          title: "قادة الأعمال والتنفيذيون",
          desc: "قد قِ التغيير المؤسسي وادمج الاستدامة ضمن استراتيجية العمل.",
          icon: attendees[0].icon,
        },
        {
          title: "مسؤولو ESG والاستدامة",
          desc: "عزّز خبرتك وواكب المعايير العالمية للاستدامة.",
          icon: attendees[1].icon,
        },
        {
          title: "فرق إدارة المخاطر",
          desc: "حدّد وقلّل مخاطر ESG مع اغتنام الفرص الجديدة.",
          icon: attendees[2].icon,
        },
        {
          title: "فرق الاتصال المؤسسي",
          desc: "تعلّم استراتيجيات فعّالة للتواصل حول مبادرات الاستدامة والتفاعل مع أصحاب المصلحة.",
          icon: attendees[3].icon,
        },
      ]
    : attendees
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-black">
          {isArabic ? "من يجب أن يحضر؟" : "Who Should Attend?"}
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
          {isArabic ? "صُمم برنامجنا للمهنيين عبر أدوار متعددة ممن يرغبون في دفع ممارسات الاستدامة داخل مؤسساتهم." : "Our program is designed for professionals across various roles who want to drive sustainable practices in their organizations."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {localizedAttendees.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl flex flex-col items-start text-left p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Border Container */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                {/* Main Border */}
                <div className="absolute inset-0 border-2 border-[#009CDE] rounded-xl transition-all duration-300 group-hover:border-[#009CDE]/80" />
                
                {/* Corner Accents (pinned to physical corners; do not mirror in RTL) */}
                <div className="absolute w-12 h-12" style={{ top: 0, left: 0 }}>
                  <div className="absolute w-6 h-6 border-t-2 border-l-2 border-[#009CDE] rounded-tl-xl transition-all duration-300 group-hover:border-[#009CDE]/80" style={{ top: 0, left: 0 }} />
                </div>
                <div className="absolute w-12 h-12" style={{ bottom: 0, right: 0 }}>
                  <div className="absolute w-6 h-6 border-b-2 border-r-2 border-[#009CDE] rounded-br-xl transition-all duration-300 group-hover:border-[#009CDE]/80" style={{ bottom: 0, right: 0 }} />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#009CDE]/0 to-[#009CDE]/0 group-hover:from-[#009CDE]/5 group-hover:to-[#009CDE]/10 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full">
                <div className="bg-[#E6F7FD] rounded-lg mb-6 flex items-center justify-center p-1" style={{ width: 56, height: 56 }}>
                  {item.icon ? (
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      custom={idx}
                      className="w-full h-full"
                    >
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={54} 
                        height={54} 
                        className="object-cover rounded-lg"
                        style={{objectFit: 'cover', borderRadius: '0.5rem'}} 
                      />
                    </motion.div>
                  ) : (
                    <span className="inline-block w-10 h-10 bg-blue-100 rounded-full" />
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-[#009CDE] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 