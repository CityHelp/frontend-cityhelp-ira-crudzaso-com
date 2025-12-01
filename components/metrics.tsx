"use client"

import { useEffect, useRef, useState } from "react"
import { FileWarning, MapPin, TrendingUp, Activity } from "lucide-react"
import { useLanguage } from "@/lib/translations"

const metricIcons = [FileWarning, MapPin, TrendingUp, Activity]
const metricColors = [
  { color: "text-chart-1", bgColor: "bg-chart-1/10" },
  { color: "text-chart-2", bgColor: "bg-chart-2/10" },
  { color: "text-chart-3", bgColor: "bg-chart-3/10" },
  { color: "text-chart-4", bgColor: "bg-chart-4/10" },
]
const metricValues = ["0", "0", "0", "0"]

function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const numericValue = Number.parseInt(value.replace(/,/g, ""))
    if (numericValue === 0) {
      setDisplayValue("0")
      return
    }

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current).toLocaleString())
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return <span ref={ref}>{displayValue}</span>
}

export function Metrics() {
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="metricas" className="py-24 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center section-title ${
              isVisible ? "animate-bounce-in animate-text-glow" : "opacity-0"
            }`}
            style={{ color: "#2B7FFF", animationDelay: "0.1s" }}
          >
            {t.metricsTitle}
          </h2>
          <h3
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance subtitle-animate ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            {t.metricsSubtitle}
          </h3>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto text-pretty ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            {t.metricsDescription}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {t.metrics.map((metric, index) => {
            const Icon = metricIcons[index]
            const colors = metricColors[index]
            const value = metricValues[index]

            return (
              <div
                key={metric.label}
                className={`group relative bg-card border border-border rounded-2xl p-8 hover-3d transform-style-3d shimmer-border cursor-default transition-all duration-300 hover:animate-glow-border active:animate-glow-border ${
                  isVisible ? "animate-bounce-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:from-primary/25 group-active:from-primary/25 group-hover:w-40 group-hover:h-40" />

                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-14 h-14 ${colors.bgColor} rounded-xl flex items-center justify-center mb-6 icon-container`}
                  >
                    <Icon
                      className={`w-7 h-7 ${colors.color} transition-transform group-hover:scale-110 group-active:scale-110`}
                    />
                  </div>

                  <div
                    className={`text-4xl lg:text-5xl font-bold ${colors.color} mb-2 transition-transform group-hover:scale-105 group-active:scale-105`}
                  >
                    <AnimatedNumber value={value} />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-1 transition-colors group-hover:text-primary group-active:text-primary">
                    {metric.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
