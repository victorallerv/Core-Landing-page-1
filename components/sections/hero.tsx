"use client"

import Image from "next/image"
import { useEffect, useState, useRef, useCallback, lazy, Suspense } from "react"

const Spline = lazy(() => import("@splinetool/react-spline"))

export function Hero() {
  const titleText = "Sincroniza tu biologia con tu agenda"
  const words = titleText.split(" ")
  const [opacity, setOpacity] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const splineContainerRef = useRef<HTMLDivElement>(null)

  // Block wheel events from reaching Spline to prevent zoom/shrink
  useEffect(() => {
    const container = splineContainerRef.current
    if (!container) return
    const blockWheel = (e: WheelEvent) => {
      e.stopPropagation()
    }
    container.addEventListener("wheel", blockWheel, { passive: false, capture: true })
    return () => {
      container.removeEventListener("wheel", blockWheel, { capture: true } as EventListenerOptions)
    }
  }, [])

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
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-32 md:pb-8 pb-4 pt-4 md:pt-32 w-full">
        {/* Two-column layout: text 40% left, 3D 60% right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">

          {/* Left column — text content (40%) */}
          <div className="w-full lg:w-[40%] lg:pr-8 flex flex-col justify-center">
            <p className="text-muted-foreground mb-4 font-normal tracking-wide uppercase text-xs">
              Biohacking as a Service
            </p>

            {/* Main Title with animated words */}
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="hero-word my-0 py-1 font-mono font-normal text-4xl lg:text-5xl"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    marginRight: index < words.length - 1 ? "0.2em" : "0",
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-md leading-relaxed text-left text-base text-muted-foreground">
              No eres una maquina, pero tu cerebro necesita un sistema operativo. CORE cruza tus biomarcadores de sueno con tu calendario laboral para adaptar tu suplementacion diaria.
            </p>

            {/* Email Capture Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu mejor email..."
                  required
                  className="flex-1 px-5 py-3.5 text-sm rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0F2E2F] transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 text-sm font-medium text-white rounded-full transition-all whitespace-nowrap"
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
              <div className="mt-8 px-5 py-3.5 rounded-2xl border border-[#0F2E2F]/30 bg-[#0F2E2F]/5 max-w-md">
                <p className="text-foreground font-medium text-sm">Solicitud recibida.</p>
                <p className="text-muted-foreground text-xs mt-1">Te contactaremos pronto con los detalles del acceso beta.</p>
              </div>
            )}

            <p className="mt-3 text-xs text-muted-foreground">
              Plazas limitadas para el primer lote de fundadores.
            </p>
          </div>

          {/* Right column — Spline 3D (60%) */}
          <div
            ref={splineContainerRef}
            className="w-full lg:w-[60%] h-[400px] sm:h-[450px] lg:h-[600px] relative rounded-2xl overflow-hidden"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#0F2E2F]/20 border-t-[#0F2E2F] rounded-full animate-spin" />
              </div>
            }>
              <Spline scene="https://prod.spline.design/6V0R4hY63ecE9PIS/scene.splinecode" />
            </Suspense>
          </div>

        </div>
      </div>

      {/* Bottom images with scroll reveal */}
      <div
        className="relative w-full mt-8 max-w-[1280px] mx-auto px-6 md:px-12 transition-all duration-300 ease-out"
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
