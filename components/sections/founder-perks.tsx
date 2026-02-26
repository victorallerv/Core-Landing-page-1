"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { Rocket, Crown, Lock } from "lucide-react"

const perks = [
  {
    icon: Rocket,
    text: "Acceso anticipado al primer lote de produccion.",
  },
  {
    icon: Crown,
    text: "Suscripcion vitalicia gratuita a la App CORE Premium.",
  },
  {
    icon: Lock,
    text: "Precios fundadores bloqueados para siempre.",
  },
]

export function FounderPerks() {
  return (
    <section id="founders" className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Early Access
          </p>
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Ventajas de los Fundadores
          </SectionTitle>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Ser fundador no es solo llegar primero. Es acceder a condiciones que no se repetiran.
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-14 max-w-2xl mx-auto">
          {perks.map((perk) => (
            <div
              key={perk.text}
              className="flex items-center gap-5 p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-all"
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                style={{ backgroundColor: "rgba(15, 46, 47, 0.08)" }}
              >
                <perk.icon className="w-5 h-5" style={{ color: "#0F2E2F" }} />
              </div>
              <p className="text-foreground text-lg font-medium leading-snug">
                {perk.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
