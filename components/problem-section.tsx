"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, AlertTriangle, Users, BarChart3, Brain, Shield } from "lucide-react"
import { useLanguage } from "@/lib/translations"

const benefitIcons = [Shield, BarChart3, Users, BarChart3, Brain]

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="el-desafio"
      className="py-24 lg:py-32 px-4 bg-gradient-to-b from-primary/5 via-card/50 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 bg-primary/15 rounded-full mb-8 ${
              isVisible ? "animate-bounce-in" : "opacity-0"
            }`}
          >
            <AlertTriangle className="w-10 h-10 text-primary" />
          </div>

          <h2
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 text-center section-title tracking-tight ${
              isVisible ? "animate-bounce-in animate-text-glow" : "opacity-0"
            }`}
          >
            {t.challengeTitle}
          </h2>

          <h3
            className={`text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-10 text-center text-balance ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            {t.challengeSubtitle.split("responsabilidad")[0]}
            <span className="text-primary">responsabilidad{t.challengeSubtitle.split("responsabilidad")[1]}</span>
          </h3>
        </div>

        <div className="text-center mb-14 space-y-6">
          <p
            className={`text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            {t.challengeP1}
          </p>

          <p
            className={`text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-primary font-semibold">CityHelp</span> {t.challengeP2.replace("CityHelp", "").trim()}
          </p>
        </div>

        <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <div className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 lg:p-12 shadow-xl shadow-primary/5 hover-3d shimmer-border transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-10 text-center flex items-center justify-center gap-3">
              <CheckCircle2 className="w-7 h-7 text-primary" />
              {t.howHelpsTitle}
            </h3>

            <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
              {t.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index]
                return (
                  <div
                    key={index}
                    className={`w-full flex items-center justify-center gap-4 group cursor-default p-5 rounded-2xl bg-gradient-to-r from-background/80 to-background/40 border border-border hover:border-primary/40 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:shadow-primary/10 active:translate-y-[-3px] ${
                      isVisible ? "animate-slide-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/25 group-active:scale-110">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-base sm:text-lg text-foreground font-medium transition-colors group-hover:text-primary group-active:text-primary">
                      {benefit}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
