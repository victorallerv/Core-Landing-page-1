"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

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
      {/* Clarity aura glow */}
      <div
        className="absolute -right-10 md:right-[-5%] top-16 md:top-4 w-[550px] h-[550px] md:w-[750px] md:h-[750px] pointer-events-none -z-20 rounded-full blur-3xl opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, #0F2E2F 0%, rgba(15,46,47,0.4) 40%, transparent 70%)",
        }}
      />

      {/* Fluid data-wave SVG — 7-layer oceanic flow */}
      <div className="absolute -right-10 md:right-[-5%] top-16 md:top-4 w-[600px] h-[600px] md:w-[850px] md:h-[850px] pointer-events-none -z-10">
        <svg
          viewBox="0 0 900 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Wave 1 — deepest background, wide & gentle */}
          <path
            d="M 40 480 C 160 340, 340 600, 450 460 S 680 280, 860 500"
            stroke="#0F2E2F"
            strokeWidth="3"
            strokeDasharray="0 16"
            strokeLinecap="round"
            opacity="0.05"
            fill="none"
            className="wave-flow-1"
          />
          {/* Wave 2 — deep mid layer */}
          <path
            d="M 60 420 C 200 540, 320 300, 440 440 S 640 580, 840 400"
            stroke="#0F2E2F"
            strokeWidth="2.8"
            strokeDasharray="0 18"
            strokeLinecap="round"
            opacity="0.08"
            fill="none"
            className="wave-flow-2"
          />
          {/* Wave 3 — mid layer, more amplitude */}
          <path
            d="M 80 380 C 180 260, 360 540, 460 360 S 660 200, 820 420"
            stroke="#0F2E2F"
            strokeWidth="3"
            strokeDasharray="0 15"
            strokeLinecap="round"
            opacity="0.12"
            fill="none"
            className="wave-flow-3"
          />
          {/* Wave 4 — core rhythm, prominent */}
          <path
            d="M 50 450 C 200 320, 300 580, 420 420 S 600 260, 850 470"
            stroke="#0F2E2F"
            strokeWidth="3.2"
            strokeDasharray="0 14"
            strokeLinecap="round"
            opacity="0.20"
            fill="none"
            className="wave-flow-4"
          />
          {/* Wave 5 — upper harmonic */}
          <path
            d="M 100 340 C 240 460, 380 220, 500 360 S 680 500, 800 320"
            stroke="#0F2E2F"
            strokeWidth="2.5"
            strokeDasharray="0 18"
            strokeLinecap="round"
            opacity="0.25"
            fill="none"
            className="wave-flow-5"
          />
          {/* Wave 6 — sharp foreground accent */}
          <path
            d="M 70 520 C 220 400, 350 620, 480 490 S 650 340, 830 540"
            stroke="#0F2E2F"
            strokeWidth="2.5"
            strokeDasharray="0 20"
            strokeLinecap="round"
            opacity="0.15"
            fill="none"
            className="wave-flow-6"
          />
          {/* Wave 7 — topmost whisper layer */}
          <path
            d="M 120 300 C 260 440, 400 200, 520 340 S 700 480, 780 290"
            stroke="#0F2E2F"
            strokeWidth="2"
            strokeDasharray="0 22"
            strokeLinecap="round"
            opacity="0.10"
            fill="none"
            className="wave-flow-7"
          />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-32 md:pb-4 pb-4 pt-4 md:pt-32">
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
            Rendimiento cognitivo dinamico. CORE conecta tus datos de sueno y carga laboral para decirte exactamente que nutrientes necesita tu cerebro cada manana. Disenado para High Performers.
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

      {/* Bottom image with scroll reveal */}
      <div className="w-full mt-8">
        <Image
          src="/images/designer.png"
          alt="CORE Performance workspace"
          width={1200}
          height={800}
          className="w-full h-auto transition-all duration-100 ease-out"
          style={{
            opacity: opacity,
            clipPath: isDesktop ? `inset(${100 - Math.min(100, opacity * 100)}% 0 0 0)` : "none",
            filter: "hue-rotate(100deg) saturate(0.8) brightness(1.05)",
          }}
          priority
        />
      </div>
    </section>
  )
}
