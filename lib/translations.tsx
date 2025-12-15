"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface Translations {
  // Navbar
  navItems: { name: string; href: string }[]
  downloadApp: string
  platformName: string

  // Hero
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  viewStats: string
  mapTitle: string
  mapLocation: string
  watchVideo: string

  // What is CityHelp
  whatIsCityHelpTitle: string
  whatIsCityHelpSubtitle: string
  whatIsCityHelpDescription: string
  features: { title: string; description: string }[]
  downloadApplication: string

  // Metrics
  metricsTitle: string
  metricsSubtitle: string
  metricsDescription: string
  metrics: { label: string; description: string }[]

  // Problem Section
  challengeTitle: string
  challengeSubtitle: string
  challengeP1: string
  challengeP2: string
  howHelpsTitle: string
  benefits: string[]

  // Footer
  footerTagline: string
  footerCopyright: string
}

const esTranslations: Translations = {
  navItems: [
    { name: "Inicio", href: "#inicio" },
    { name: "CityHelp", href: "#que-es-cityhelp" },
    { name: "Métricas", href: "#metricas" },
    { name: "El Desafío", href: "#el-desafio" },
    { name: "Contacto", href: "#contacto" },
  ],
  downloadApp: "Ver App",
  platformName: "CityHelp",

  heroTitle: "CityHelp",
  heroSubtitle: "Seguridad vial impulsada por la comunidad",
  heroDescription:
    "Reporta baches, curvas peligrosas y riesgos viales en tiempo real. Juntos construimos una Medellín más segura con tecnología e inteligencia artificial.",
  viewStats: "Ver Estadísticas",
  mapTitle: "Mapa de riesgos viales",
  mapLocation: "Medellín, Colombia",
  watchVideo: "Ver video de presentación",

  whatIsCityHelpTitle: "¿Qué es CityHelp?",
  whatIsCityHelpSubtitle: "La plataforma ciudadana para una Medellín más segura",
  whatIsCityHelpDescription:
    "CityHelp es una aplicación que permite a los ciudadanos reportar baches, curvas peligrosas y todo tipo de riesgos viales. Utilizamos inteligencia artificial para analizar estos reportes y generar información valiosa para mejorar la infraestructura vial de la ciudad.",
  features: [
    {
      title: "Reporta Riesgos",
      description: "Informa sobre baches, huecos y daños en la vía de forma rápida y sencilla.",
    },
    {
      title: "Curvas Peligrosas",
      description: "Identifica y marca curvas peligrosas para alertar a otros conductores.",
    },
    {
      title: "Análisis con IA",
      description: "Nuestra inteligencia artificial analiza patrones y predice zonas de riesgo.",
    },
    {
      title: "Seguridad Vial",
      description: "Contribuye a crear rutas más seguras para toda la comunidad.",
    },
  ],
  downloadApplication: "Descargar Aplicación",

  metricsTitle: "Métricas",
  metricsSubtitle: "Impacto de la comunidad",
  metricsDescription: "Datos actualizados sobre los reportes y la actividad de los ciudadanos en nuestra plataforma.",
  metrics: [
    { label: "Total Reportes", description: "Reportes ciudadanos registrados" },
    { label: "Zonas Afectadas", description: "Áreas identificadas como críticas" },
    { label: "Tipos de Riesgo", description: "Categorías de riesgos viales" },
    { label: "Actividad Mensual", description: "Reportes en los últimos 30 días" },
  ],

  challengeTitle: "El Desafío",
  challengeSubtitle: "La seguridad vial es responsabilidad de todos",
  challengeP1:
    "Cada día, miles de conductores y peatones se enfrentan a peligros en las vías de Medellín: baches no reportados, curvas sin señalización y condiciones peligrosas que podrían causar accidentes prevenibles.",
  challengeP2:
    "CityHelp transforma a cada ciudadano en un agente de cambio. Nuestra plataforma permite reportar riesgos de forma inmediata, mientras nuestra inteligencia artificial analiza los datos para identificar patrones y priorizar soluciones.",
  howHelpsTitle: "¿Cómo ayuda CityHelp?",
  benefits: [
    "Reduce accidentes viales en zonas críticas",
    "Mejora la planificación de infraestructura urbana",
    "Empodera a los ciudadanos para participar activamente",
    "Genera datos valiosos para las autoridades",
    "Utiliza IA para predecir y prevenir riesgos",
  ],

  footerTagline: "Construyendo ciudades más seguras, un reporte a la vez.",
  footerCopyright: "CityHelp. Todos los derechos reservados.",
}

const enTranslations: Translations = {
  navItems: [
    { name: "Home", href: "#inicio" },
    { name: "CityHelp", href: "#que-es-cityhelp" },
    { name: "Metrics", href: "#metricas" },
    { name: "The Challenge", href: "#el-desafio" },
    { name: "Contact", href: "#contacto" },
  ],
  downloadApp: "Watch App",
  platformName: "CityHelp",

  heroTitle: "CityHelp",
  heroSubtitle: "Community-powered road safety",
  heroDescription:
    "Report potholes, dangerous curves and road hazards in real time. Together we build a safer Medellín with technology and artificial intelligence.",
  viewStats: "View Statistics",
  mapTitle: "Road hazards map",
  mapLocation: "Medellín, Colombia",
  watchVideo: "Watch presentation video",

  whatIsCityHelpTitle: "What is CityHelp?",
  whatIsCityHelpSubtitle: "The citizen platform for a safer Medellín",
  whatIsCityHelpDescription:
    "CityHelp is an application that allows citizens to report potholes, dangerous curves and all types of road hazards. We use artificial intelligence to analyze these reports and generate valuable information to improve the city's road infrastructure.",
  features: [
    {
      title: "Report Hazards",
      description: "Report potholes, holes and road damage quickly and easily.",
    },
    {
      title: "Dangerous Curves",
      description: "Identify and mark dangerous curves to alert other drivers.",
    },
    {
      title: "AI Analysis",
      description: "Our artificial intelligence analyzes patterns and predicts risk zones.",
    },
    {
      title: "Road Safety",
      description: "Help create safer routes for the entire community.",
    },
  ],
  downloadApplication: "Download Application",

  metricsTitle: "Metrics",
  metricsSubtitle: "Community impact",
  metricsDescription: "Updated data on reports and citizen activity on our platform.",
  metrics: [
    { label: "Total Reports", description: "Registered citizen reports" },
    { label: "Affected Zones", description: "Areas identified as critical" },
    { label: "Risk Types", description: "Road hazard categories" },
    { label: "Monthly Activity", description: "Reports in the last 30 days" },
  ],

  challengeTitle: "The Challenge",
  challengeSubtitle: "Road safety is everyone's responsibility",
  challengeP1:
    "Every day, thousands of drivers and pedestrians face dangers on Medellín's roads: unreported potholes, unmarked curves and dangerous conditions that could cause preventable accidents.",
  challengeP2:
    "CityHelp transforms every citizen into an agent of change. Our platform allows immediate hazard reporting, while our artificial intelligence analyzes data to identify patterns and prioritize solutions.",
  howHelpsTitle: "How does CityHelp help?",
  benefits: [
    "Reduces road accidents in critical zones",
    "Improves urban infrastructure planning",
    "Empowers citizens to participate actively",
    "Generates valuable data for authorities",
    "Uses AI to predict and prevent risks",
  ],

  footerTagline: "Building safer cities, one report at a time.",
  footerCopyright: "CityHelp. All rights reserved.",
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = language === "es" ? esTranslations : enTranslations

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
