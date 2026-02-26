"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { Zap, ShieldCheck, Moon } from "lucide-react"

const benefits = [
  {
    title: "Flow bajo demanda",
    description: "Elimina la niebla mental en 20 minutos.",
    icon: Zap,
  },
  {
    title: "Cero Ansiedad",
    description: "Energia estable sin los bajones del cafe.",
    icon: ShieldCheck,
  },
  {
    title: "Recuperacion Profunda",
    description: "Optimiza tu cortisol para un descanso real.",
    icon: Moon,
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Beneficios</p>
            <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Tu cerebro, optimizado
            </SectionTitle>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              CORE combina nootropicos de grado clinico con inteligencia artificial para darte exactamente lo que tu cerebro necesita, cuando lo necesita.
            </p>
          </div>

          {/* Right: Benefit cards */}
          <div className="flex flex-col gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-all group"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "rgba(15, 46, 47, 0.08)" }}
                >
                  <benefit.icon className="w-5 h-5" style={{ color: "#0F2E2F" }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
