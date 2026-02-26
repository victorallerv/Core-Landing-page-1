import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Benefits } from "@/components/sections/benefits"
import { ClientLogos } from "@/components/sections/client-logos"
import { FounderPerks } from "@/components/sections/founder-perks"
import { FinalCTA } from "@/components/sections/final-cta"
import { GradientBar } from "@/components/ui/gradient-bar"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <HowItWorks />
        <Benefits />
        <FounderPerks />
        <FinalCTA />
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
