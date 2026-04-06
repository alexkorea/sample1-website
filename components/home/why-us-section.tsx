import { Headphones, Zap, ShieldCheck, Globe, BadgeCheck, Heart } from "lucide-react"

const features = [
  {
    icon: Headphones,
    title: "1:1 전담 상담",
    description: "담당 행정사가 처음부터 끝까지 책임지고 진행합니다.",
  },
  {
    icon: Zap,
    title: "신속한 처리",
    description: "최적화된 프로세스로 빠른 업무 처리가 가능합니다.",
  },
  {
    icon: ShieldCheck,
    title: "정확한 업무",
    description: "풍부한 경험으로 실수 없이 정확하게 처리합니다.",
  },
  {
    icon: Globe,
    title: "다국어 지원",
    description: "영어, 중국어, 베트남어 상담이 가능합니다.",
  },
  {
    icon: BadgeCheck,
    title: "투명한 비용",
    description: "숨겨진 비용 없이 명확한 견적을 제공합니다.",
  },
  {
    icon: Heart,
    title: "사후 관리",
    description: "업무 완료 후에도 지속적인 상담을 제공합니다.",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            한길 행정사를 선택하는 이유
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            고객 중심의 서비스로 신뢰받는 행정사 사무소가 되겠습니다
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
