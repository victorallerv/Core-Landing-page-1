"use client"

import Image from "next/image"
import { useEffect, useState, lazy, Suspense } from "react"

const Spline = lazy(() => import("@splinetool/react-spline"))

export function Hero() {
  const titleText = "Sincroniza tu biologia con tu agenda"
  const words = titleText.split(" ")
  const [opacity, setOpacity] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 500
      const calculatedOpacity = Math.min(1, scrollPosition / maxScroll)
      setOpacity(calculatedOpacity)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkDesktop)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      {/* Spline 3D background scene */}
      <div className="absolute inset-0 w-full h-full -z-10 opacity-65 pointer-events-none">
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </Suspense>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-32 md:pb-4 pb-4 pt-4 md:pt-32">
        <div className="max-w-4xl">
          <p className="text-muted-foreground mb-6 text-lg font-normal tracking-wide uppercase text-sm">
            Biohacking as a Service
          </p>

          {/* Main Title with animated words */}
          <h1 className="text-5xl sm:text-6xl lg:text-[96px] font-semibold tracking-tight leading-[1] text-balance md:text-9xl">
            {words.map((word, index) => (
              <span
                key={index}
                className={`hero-word my-0 py-2 font-mono font-normal text-5xl md:text-7xl`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  marginRight: index < words.length - 1 ? "0.25em" : "0",
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-xl leading-relaxed text-left text-lg text-muted-foreground ml-0">
            No eres una maquina, pero tu cerebro necesita un sistema operativo. CORE cruza tus biomarcadores de sueno con tu calendario laboral para adaptar tu suplementacion diaria. El fin del burnout y la niebla mental.
          </p>

          {/* Email Capture Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-10 max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu mejor email..."
                required
                className="flex-1 px-5 py-4 text-base rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0F2E2F] transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 text-base font-medium text-white rounded-full transition-all whitespace-nowrap"
                style={{
                  backgroundColor: "#0F2E2F",
                  boxShadow: "0 4px 20px rgba(15, 46, 47, 0.35)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(15, 46, 47, 0.55)"
                  e.currentTarget.style.backgroundColor = "#0a2122"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(15, 46, 47, 0.35)"
                  e.currentTarget.style.backgroundColor = "#0F2E2F"
                }}
              >
                Solicitar Acceso Beta
              </button>
            </form>
          ) : (
            <div className="mt-10 px-6 py-4 rounded-2xl border border-[#0F2E2F]/30 bg-[#0F2E2F]/5 max-w-lg">
              <p className="text-foreground font-medium">Solicitud recibida.</p>
              <p className="text-muted-foreground text-sm mt-1">Te contactaremos pronto con los detalles del acceso beta.</p>
            </div>
          )}

          <p className="mt-4 text-xs text-muted-foreground ml-1">
            Plazas limitadas para el primer lote de fundadores.
          </p>
        </div>
      </div>

      {/* Bottom images with scroll reveal */}
      <div
        className="relative z-10 w-full mt-8 max-w-[1280px] mx-auto px-6 md:px-12 transition-all duration-300 ease-out"
        style={{ opacity: opacity }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1615397323628-76672fc149af?q=80&w=1200&auto=format&fit=crop"
            alt="Wellness y bienestar natural"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop"
            alt="Estilo de vida y tecnologia"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
