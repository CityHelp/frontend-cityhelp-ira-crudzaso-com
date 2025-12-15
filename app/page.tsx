"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhatIsCityHelp } from "@/components/what-is-cityhelp"
import { Metrics } from "@/components/metrics"
import { ProblemSection } from "@/components/problem-section"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/translations"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <WhatIsCityHelp />
        <Metrics />
        <ProblemSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
