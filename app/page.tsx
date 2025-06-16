import Navbar from "@/components/navbar"
import HeroSection from "@/components/HeroSection";
import CoreModulesSection from "@/components/CoreModulesSection";
import ProgramDetailsSection from "@/components/ProgramDetailsSection";
import WhoShouldAttendSection from "@/components/WhoShouldAttendSection";
import ESGKnowledgeSection from "@/components/ESGKnowledgeSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CoreModulesSection />
      <ProgramDetailsSection />
      <WhoShouldAttendSection />
      <ESGKnowledgeSection />
    </main>
  )
}
