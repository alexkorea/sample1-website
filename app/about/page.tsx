import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { MissionSection } from "@/components/about/mission-section"
import { StrengthsSection } from "@/components/about/strengths-section"
import { TeamSection } from "@/components/about/team-section"
import { TimelineSection } from "@/components/about/timeline-section"
import { ContactCta } from "@/components/about/contact-cta"

export const metadata: Metadata = {
  title: "사무소 소개 | 한길 행정사 사무소",
  description: "한길 행정사 사무소를 소개합니다. 15년 이상의 전문 경력으로 신뢰받는 행정 서비스를 제공합니다.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <MissionSection />
        <StrengthsSection />
        <TeamSection />
        <TimelineSection />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
