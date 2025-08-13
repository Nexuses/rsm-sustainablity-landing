import Navbar from "@/components/navbar"
import HeroSection from "@/components/HeroSection";
import CoreModulesSection from "@/components/CoreModulesSection";
import ESGCourseCatalogueSection from "@/components/ESGCourseCatalogueSection";
import ProgramDetailsSection from "@/components/ProgramDetailsSection";
import WhoShouldAttendSection from "@/components/WhoShouldAttendSection";
import ESGKnowledgeSection from "@/components/ESGKnowledgeSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CoreModulesSection />
      <ESGCourseCatalogueSection />
      <ProgramDetailsSection />
      <WhoShouldAttendSection />
      <ESGKnowledgeSection />
    </main>
  )
}
