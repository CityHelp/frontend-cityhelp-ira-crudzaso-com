"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Play, BarChart3 } from "lucide-react"
import { useLanguage } from "@/lib/translations"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/medellin-colombia-cityscape-aerial-view-night-ligh.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 z-10" />
      </div>

      {/* Video Section */}
      <div className="relative z-20 pt-24 lg:pt-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`perspective-1000 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-2xl group cursor-pointer hover-3d transform-style-3d shimmer-border animate-glow-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center play-button-pulse group-hover:bg-primary group-active:bg-primary transition-colors">
                  <Play className="w-8 h-8 text-primary-foreground ml-1 transition-transform group-hover:scale-110 group-active:scale-110" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-sm text-muted-foreground transition-all duration-300 group-hover:translate-x-2 group-active:translate-x-2">
                {t.watchVideo}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6">
            <span
              className={`inline-block text-primary animate-hero-title animate-text-glow ${isVisible ? "" : "opacity-0"}`}
              style={{ animationDelay: "0.1s" }}
            >
              {t.heroTitle}
            </span>
            <br />
            <span
              className={`inline-block text-balance subtitle-animate transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              {t.heroSubtitle}
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty paragraph-animate ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.7s" }}
          >
            {t.heroDescription}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? "animate-pop-in" : "opacity-0"}`}
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="#metricas"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-lg btn-ripple transition-all duration-300"
            >
              <BarChart3 className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
              {t.viewStats}
            </a>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative z-20 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div
            className={`perspective-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "1.1s" }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card hover-3d transform-style-3d map-pulse">
              <div className="aspect-[16/9] lg:aspect-[21/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.63852695498!2d-75.63800562636719!3d6.244203500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[30%] contrast-[1.1]"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-border transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-105">
                <p className="text-sm font-medium text-foreground">{t.mapTitle}</p>
                <p className="text-xs text-muted-foreground">{t.mapLocation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 scroll-indicator">
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}
