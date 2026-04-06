import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { ServicesSection } from "@/components/home/services-section"
import { ProcessSection } from "@/components/home/process-section"
import { WhyUsSection } from "@/components/home/why-us-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <WhyUsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
