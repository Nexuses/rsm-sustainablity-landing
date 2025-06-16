import Image from "next/image";

const modules = [
  {
    title: "Introduction to Sustainability & Ethics",
    desc: "Gain a strong foundation in sustainability practices tailored for Saudi Vision 2030.",
    img: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/GettyImages-1595491547.png",
  },
  {
    title: "ESG Risks & Opportunities",
    desc: "Learn to identify risks, drive innovation, and unlock opportunities for sustainable growth.",
    img: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/business-people-are-brainstorming.png",
  },
  {
    title: "ESG Standards and Guidelines for Responsible Business",
    desc: "Get hands-on with ISO standards, GRI, TCFD, and IFRS frameworks for competitive advantage.",
    img: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/455%202.png",
  },
  {
    title: "Stakeholder Engagement for Sustainability",
    desc: "Build strong relationships and learn the art of sustainable decision-making and reporting.",
    img: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/three-wind-turbines-located-field%204.png",
  },
];

export default function CoreModulesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
          Core Modules to Build Your ESG Competence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100 hover:border-[#009BDE] duration-300 group"
              style={{ minHeight: 380 }}
            >
              <div className="h-44 w-full relative bg-gradient-to-t from-[#e6f7fd] to-white group-hover:from-[#d0f0ff]">
                <Image
                  src={mod.img}
                  alt={mod.title}
                  fill
                  className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-semibold mb-2 text-center hover:text-blue-900 cursor-pointer transition-colors duration-200" style={{ color: '#009BDE' }}>
                  {mod.title}
                </h3>
                <p className="text-sm text-center" style={{ color: '#717171' }}>
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 