"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/section-title"

const testimonials = [
  {
    id: 1,
    quote:
      "Desde que uso CORE, mi enfoque en las mananas es brutal. Paso de reuniones de 4 horas sin perder claridad mental. Es otro nivel.",
    author: "Carlos Mendez",
    role: "CEO, Fintech Startup",
    avatar: "/images/imgi_97_user77.webp",
    blurColor: "bg-emerald-500",
  },
  {
    id: 2,
    quote:
      "La app sabe exactamente como he dormido y ajusta mi dosis. Es como tener un nutricionista y un coach de rendimiento en el bolsillo.",
    author: "Laura Herrera",
    role: "Directora de Producto, SaaS",
    avatar: "/images/imgi_106_user86.webp",
    blurColor: "bg-emerald-600",
  },
  {
    id: 3,
    quote:
      "Deje el cafe y no miro atras. La energia que me da Flow es limpia, constante y sin crashes. CORE es el futuro de la suplementacion.",
    author: "Andres Vega",
    role: "Fundador, Agencia Digital",
    avatar: "/images/imgi_105_user85.webp",
    blurColor: "bg-green-500",
  },
  {
    id: 4,
    quote:
      "Restore cambio mi sueno por completo. Me despierto descansada de verdad. Si eres high performer, necesitas esto.",
    author: "Sofia Torres",
    role: "VP de Estrategia, Consultora",
    avatar: "/images/imgi_102_user82.webp",
    blurColor: "bg-emerald-400",
  },
  {
    id: 5,
    quote:
      "Balance me ha ayudado a manejar el estres de levantar una ronda. Es ciencia real, no marketing de humo.",
    author: "Diego Ramirez",
    role: "CTO, HealthTech",
    avatar: "/images/imgi_100_user80.webp",
    blurColor: "bg-green-600",
  },
  {
    id: 6,
    quote:
      "La integracion con Apple Watch es genial. CORE sabe que dias necesito mas apoyo cognitivo y ajusta automaticamente.",
    author: "Maria Elena Cruz",
    role: "Directora Medica, Biotech",
    avatar: "/images/imgi_107_user87.webp",
    blurColor: "bg-emerald-500",
  },
  {
    id: 7,
    quote:
      "Como inversor en salud, he visto muchos productos. CORE es el primero que realmente personaliza a nivel dinamico. Impresionante.",
    author: "Javier Ortiz",
    role: "Managing Partner, VC Fund",
    avatar: "/images/imgi_108_user88.webp",
    blurColor: "bg-green-500",
  },
]

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false)

  const duplicatedTestimonials = [...testimonials, ...testimonials]
  const duplicatedTestimonialsReverse = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()]
  const mobileTestimonials = testimonials.slice(0, 6)

  return (
    <section id="testimonials" className="py-20 border-border overflow-hidden md:py-32 border-t-[0] pb-0 relative">
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-20 hidden lg:block" />

      <div className="hidden lg:block pl-6 md:pl-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-[1280px]">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Lo que dicen nuestros usuarios
          </SectionTitle>
        </div>

        <div className="relative mb-6">
          <div
            className="flex gap-6 animate-scroll-left"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.id}-${index}`}
                className="relative flex-shrink-0 w-[85vw] md:w-[400px] p-6 md:p-8 border bg-card hover:shadow-lg transition-shadow overflow-hidden border-border md:px-6 md:py-6 rounded-3xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="text-base leading-relaxed font-semibold text-foreground relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${testimonial.blurColor} rounded-full opacity-10`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="flex gap-6 animate-scroll-right"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {duplicatedTestimonialsReverse.map((testimonial, index) => (
              <article
                key={`reverse-${testimonial.id}-${index}`}
                className="relative flex-shrink-0 w-[85vw] md:w-[400px] p-6 md:p-8 border bg-card hover:shadow-lg transition-shadow overflow-hidden border-border md:px-6 md:py-6 rounded-3xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="text-base leading-relaxed font-semibold text-foreground relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${testimonial.blurColor} rounded-full opacity-10`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile stacked cards */}
      <div className="lg:hidden max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Lo que dicen nuestros usuarios
          </SectionTitle>
        </div>
        <div className="relative">
          {mobileTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="sticky pt-10"
              style={{
                top: `${70 + index * 0}px`,
                zIndex: index + 1,
              }}
            >
              <article className="relative p-6 md:p-8 border bg-card transition-shadow overflow-hidden border-border rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="text-base leading-relaxed font-semibold text-foreground relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${testimonial.blurColor} rounded-full opacity-10`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-10 lg:hidden" />
    </section>
  )
}
