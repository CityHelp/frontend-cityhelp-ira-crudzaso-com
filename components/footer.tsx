"use client"

import { MapPin, Github } from "lucide-react"
import { useLanguage } from "@/lib/translations"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contacto" className="py-12 lg:py-16 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#inicio" className="flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center icon-container group-hover:animate-wiggle group-active:animate-wiggle">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground transition-colors group-hover:text-primary group-active:text-primary">
              CityHelp
            </span>
          </a>

          <p className="text-muted-foreground max-w-md mb-8 transition-colors hover:text-foreground">
            {t.footerTagline}
          </p>

          <a
            href="https://github.com/CityHelp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mb-8 text-muted-foreground hover:text-foreground active:text-foreground transition-colors group"
          >
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center social-icon group-hover:bg-primary/20 group-active:bg-primary/20">
              <Github className="w-5 h-5" />
            </div>
          </a>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
