"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { ClipboardCheck, Package, Smartphone } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "The Bio-Assessment",
    description:
      "Analizamos tu carga de estres, calidad de sueno y objetivos mediante un cuestionario clinico detallado.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "The CORE System",
    description:
      "Recibe en casa nuestro kit premium de 3 frascos (Flow, Balance, Restore) formulados con nootropicos y adaptogenos de grado clinico.",
    icon: Package,
  },
  {
    number: "03",
    title: "La App Inteligente",
    description:
      "Conecta tu Apple Watch o Google Calendar. Cada manana, la App te indica tu dosis exacta basada en como has dormido y que reuniones tienes hoy.",
    icon: Smartphone,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Proceso</p>
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Como funciona
          </SectionTitle>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-start p-8 rounded-3xl border border-border bg-card hover:shadow-lg transition-all group"
            >
              {/* Step number accent */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                style={{ backgroundColor: "rgba(15, 46, 47, 0.08)" }}
              >
                <step.icon className="w-6 h-6" style={{ color: "#0F2E2F" }} />
              </div>

              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Paso {step.number}
              </span>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-base">
                {step.description}
              </p>

              {/* Decorative corner line */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  borderTop: "2px solid #0F2E2F",
                  borderRight: "2px solid #0F2E2F",
                  borderTopRightRadius: "1.5rem",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
