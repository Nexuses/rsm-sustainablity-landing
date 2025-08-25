"use client"

import { useLanguage } from "./LanguageProvider"
import { Languages } from "lucide-react"

export default function TranslateToggle() {
  const { isArabic, toggleLanguage, t } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      aria-label={isArabic ? t("toggle.toEnglish") : t("toggle.toArabic")}
      className="fixed bottom-4 left-4 z-[60] w-16 h-16 rounded-full bg-[#34A853] text-white shadow-xl hover:shadow-2xl transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34A853]/60 flex items-center justify-center hover:scale-105"
    >
      <Languages className="w-8 h-8" />
      <span className="sr-only">{isArabic ? t("toggle.toEnglish") : t("toggle.toArabic")}</span>
    </button>
  )
}


