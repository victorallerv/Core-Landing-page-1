"use client"

import { useState } from "react"

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">Acceso anticipado</p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance text-foreground">
            Tu cerebro merece el mejor combustible
          </h2>

          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Unete al primer lote de fundadores y accede al sistema de biohacking mas inteligente del mercado. Plazas limitadas.
          </p>

          {/* Email Capture */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-10 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu mejor email..."
                required
                className="flex-1 px-5 py-4 text-base rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#39C04E] transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 text-base font-medium text-white rounded-full transition-all whitespace-nowrap"
                style={{
                  backgroundColor: "#0d241b",
                  boxShadow: "0 4px 20px rgba(13, 36, 27, 0.35)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(13, 36, 27, 0.55)"
                  e.currentTarget.style.backgroundColor = "#091a13"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(13, 36, 27, 0.35)"
                  e.currentTarget.style.backgroundColor = "#0d241b"
                }}
              >
                Solicitar Acceso Beta
              </button>
            </form>
          ) : (
            <div className="mt-10 px-6 py-4 rounded-2xl border border-[#39C04E]/30 bg-[#39C04E]/5 max-w-lg mx-auto">
              <p className="text-foreground font-medium">Solicitud recibida.</p>
              <p className="text-muted-foreground text-sm mt-1">Te contactaremos pronto con los detalles del acceso beta.</p>
            </div>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            Plazas limitadas para el primer lote de fundadores.
          </p>
        </div>
      </div>
    </section>
  )
}
