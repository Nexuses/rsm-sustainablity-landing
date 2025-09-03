"use client"

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

type SupportedLanguage = "en" | "ar"

type TranslationDict = Record<string, { en: string; ar: string }>

type LanguageContextValue = {
  language: SupportedLanguage
  isArabic: boolean
  t: (key: string) => string
  setLanguage: (lang: SupportedLanguage) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const translations: TranslationDict = {
  // Navbar
  "navbar.aboutUs": { en: "About Us", ar: "عنا" },
  "navbar.courses": { en: "Courses", ar: "البرامج التدريبية" },
  "navbar.corporateTraining": { en: "Corporate Training", ar: "تدريب المؤسسات" },
  "navbar.trainingCalendar": { en: "Training Calendar", ar: "التقويم" },
  "navbar.blog": { en: "Blog", ar: "المدونة" },
  "navbar.gallery": { en: "Gallery", ar: "المعرض" },
  "navbar.contactUs": { en: "Contact Us", ar: "اتصل بنا" },
  "navbar.signIn": { en: "Sign in", ar: "تسجيل الدخول" },
  "navbar.search": { en: "Search", ar: "بحث" },
  "navbar.liveCourses": { en: "Live Courses", ar: "دورات مباشرة" },
  "navbar.recordedCourses": { en: "Recorded Courses", ar: "دورات مسجلة" },
  "navbar.foreword": { en: "Foreword", ar: "كلمة تمهيدية" },
  "navbar.vision": { en: "Vision", ar: "الرؤية" },
  "navbar.mission": { en: "Mission", ar: "الرسالة" },
  "navbar.objectives": { en: "Objectives", ar: "الأهداف" },
  "navbar.coreValues": { en: "Core Values", ar: "القيم الأساسية" },

  // Hero
  "hero.titlePrefix": { en: "The Sustainability Toolkit:", ar: "عدة الاستدامة:" },
  "hero.titleLine1": { en: "Empowering Businesses for", ar: "تمكين الأعمال من" },
  "hero.titleLine2": { en: "Positive Change", ar: "إحداث تأثير إيجابي" },
  "hero.description": {
    en: "Empowering organizations to build expertise, drive change, and lead with impact. Designed for forward-thinking companies ready to turn sustainability into strategic advantage.",
    ar: "نُمكِّن المؤسسات من بناء الخبرة وقيادة التغيير وتحقيق الأثر. صُمِّم البرنامج للشركات الطموحة لتحويل الاستدامة إلى ميزة استراتيجية."
  },
  "hero.cta.details": { en: "Explore Program Details", ar: "استكشف تفاصيل البرنامج" },
  "hero.cta.enroll": { en: "Enroll Now", ar: "سجّل الآن" },

  // Footer
  "footer.sections.nationalCenterPolicies": { en: "National Center Policies", ar: "سياسات المركز الوطني" },
  "footer.links.attendancePolicy": { en: "Attendance Policy", ar: "سياسة الحضور" },
  "footer.links.privacyUsagePolicy": { en: "Privacy and Usage Policy", ar: "سياسة الخصوصية والاستخدام" },
  "footer.links.supportPolicy": { en: "Technical and Educational Support Policy", ar: "سياسة الدعم الفني والتعليمي" },
  "footer.links.academicIntegrity": { en: "Academic Integrity", ar: "النزاهة الأكاديمية" },
  "footer.links.ipRights": { en: "Principles of Intellectual Property Rights and Copyrights", ar: "مبادئ حقوق الملكية الفكرية وحقوق النشر" },

  "footer.sections.guidelines": { en: "Guidelines", ar: "إرشادات" },
  "footer.links.orgStructure": { en: "Organizational Structure Document & Roles and Responsibilities", ar: "الهيكل التنظيمي والأدوار والمسؤوليات" },
  "footer.links.traineeGuide": { en: "Trainee's Guide", ar: "دليل المتدرب" },
  "footer.links.guidelinesTrainersTrainees": { en: "Guidelines for Trainers and Trainees", ar: "إرشادات للمدربين والمتدربين" },
  "footer.links.beneficiarySatisfaction": { en: "Beneficiary Satisfaction Measurement Questionnaire", ar: "استبيان قياس رضا المستفيدين" },

  "footer.sections.techSupport": { en: "Technical Support", ar: "الدعم الفني" },
  "footer.links.complaintsSuggestions": { en: "Complaints and Suggestions", ar: "الشكاوى والاقتراحات" },

  "footer.sections.eLearningAccreditation": { en: "National Center for E-Learning Accreditation", ar: "المركز الوطني لاعتماد التعلم الإلكتروني" },

  // Toggle
  "toggle.toArabic": { en: "Arabic", ar: "العربية" },
  "toggle.toEnglish": { en: "English", ar: "English" }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<SupportedLanguage>("en")

  // initialize from localStorage / browser language
  useEffect(() => {
    try {
      const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as SupportedLanguage | null) : null
      if (saved === "en" || saved === "ar") {
        setLanguage(saved)
      } else if (typeof navigator !== "undefined") {
        const prefersArabic = navigator.language?.toLowerCase().startsWith("ar")
        setLanguage(prefersArabic ? "ar" : "en")
      }
    } catch {
      // ignore
    }
  }, [])

  const isArabic = language === "ar"

  const t = useCallback((key: string) => {
    const item = translations[key]
    if (!item) return key
    return isArabic ? item.ar : item.en
  }, [isArabic])

  const applyDir = useCallback((lang: SupportedLanguage) => {
    if (typeof document === "undefined") return
    const dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.setAttribute("dir", dir)
    document.documentElement.setAttribute("lang", lang)
  }, [])

  useEffect(() => {
    applyDir(language)
    try {
      localStorage.setItem("lang", language)
    } catch {
      // ignore
    }
  }, [language, applyDir])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"))
  }, [])

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    isArabic,
    t,
    setLanguage,
    toggleLanguage
  }), [language, isArabic, t, toggleLanguage])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}


