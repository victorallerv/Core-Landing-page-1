"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#how-it-works", label: "Como Funciona", number: "01" },
  { href: "#benefits", label: "Beneficios", number: "02" },
  { href: "#founders", label: "Fundadores", number: "03" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent",
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-xl font-semibold tracking-tight text-foreground"
            >
              CORE
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                  <span className="text-xs ml-1 opacity-50">({item.number})</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full text-white transition-all hover:shadow-xl"
                style={{
                  backgroundColor: "#0F2E2F",
                  boxShadow: "0 4px 20px rgba(15, 46, 47, 0.35)",
                }}
              >
                Solicitar Acceso
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 -mr-2" aria-label="Abrir menu">
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
                CORE
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2" aria-label="Cerrar menu">
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-3xl font-semibold hover:text-muted-foreground transition-colors text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Link
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, "#contact")
                  setIsMobileMenuOpen(false)
                }}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium rounded-full text-white transition-all hover:shadow-xl"
                style={{
                  backgroundColor: "#0F2E2F",
                  boxShadow: "0 4px 20px rgba(15, 46, 47, 0.35)",
                }}
              >
                Solicitar Acceso
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
