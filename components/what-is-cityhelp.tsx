"use client"

import { useEffect, useRef, useState } from "react"
import { Download, AlertTriangle, Brain, MapPin, Shield } from "lucide-react"
import { useLanguage } from "@/lib/translations"

const featureIcons = [AlertTriangle, MapPin, Brain, Shield]

export function WhatIsCityHelp() {
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
    <section ref={sectionRef} id="que-es-cityhelp" className="py-24 lg:py-32 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center section-title ${
              isVisible ? "animate-bounce-in animate-text-glow" : "opacity-0"
            }`}
          >
            {t.whatIsCityHelpTitle}
          </h2>
          <h3
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance subtitle-animate ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            {t.whatIsCityHelpSubtitle.split("Medellín")[0]}
            <span className="text-primary">Medellín{t.whatIsCityHelpSubtitle.split("Medellín")[1]}</span>
          </h3>
          <p
            className={`text-lg text-muted-foreground max-w-3xl mx-auto text-pretty ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            {t.whatIsCityHelpDescription}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 perspective-1000">
          {t.features.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <div
                key={feature.title}
                className={`group bg-card border border-border rounded-2xl p-6 hover-3d transform-style-3d shimmer-border cursor-default transition-all duration-300 ${
                  isVisible ? "animate-card-slide" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 icon-container group-hover:bg-primary/20 group-active:bg-primary/20">
                    <Icon className="w-6 h-6 text-primary transition-transform group-hover:scale-110 group-active:scale-110" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors group-hover:text-primary group-active:text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`text-center ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-lg btn-ripple transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-0.5" />
            {t.downloadApplication}
          </a>
        </div>
      </div>
    </section>
  )
}
