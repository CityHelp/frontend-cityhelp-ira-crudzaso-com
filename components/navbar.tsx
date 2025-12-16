"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Download, MapPin, Languages } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/translations"

export function Navbar() {
  const [isDark, setIsDark] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center icon-container group-hover:animate-wiggle group-active:animate-wiggle">
              <MapPin className="w-5 h-5 text-primary-foreground transition-transform" />
            </div>
            <span className="text-xl font-bold text-foreground transition-colors group-hover:text-primary group-active:text-primary">
              {t.platformName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {t.navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground nav-link-animate"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/10 active:scale-110"
              title={language === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Languages className="w-5 h-5" />
              <span className="sr-only">{language === "es" ? "EN" : "ES"}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:rotate-180 active:scale-110 active:rotate-180"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <a
              href="https://cityhelp.crudzaso.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 h-10 btn-ripple transition-all duration-300"
            >
              {t.downloadApp}
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden transition-transform hover:scale-110 active:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 transition-transform rotate-0 hover:rotate-90" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4">
              {t.navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground active:text-foreground transition-all px-2 py-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://cityhelp.crudzaso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-2 h-10 btn-ripple animate-slide-up transition-all duration-300"
                style={{ animationDelay: "0.25s" }}
              >
              
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
