import { Award, Users, BookOpen, Globe, Clock, Shield } from "lucide-react"

const strengths = [
  {
    icon: Award,
    title: "15년 이상의 전문 경력",
    description: "다양한 케이스를 처리한 풍부한 실무 경험으로 어떤 상황에서도 최적의 솔루션을 제공합니다.",
  },
  {
    icon: Users,
    title: "5,000건 이상 처리 실적",
    description: "비자, 체류자격, 인허가 등 5,000건 이상의 업무를 성공적으로 처리한 검증된 실력을 갖추고 있습니다.",
  },
  {
    icon: BookOpen,
    title: "지속적인 전문성 강화",
    description: "변화하는 법령과 제도를 꾸준히 학습하여 최신 정보를 바탕으로 정확한 업무를 수행합니다.",
  },
  {
    icon: Globe,
    title: "다국어 상담 지원",
    description: "영어, 중국어, 베트남어 등 다국어 상담이 가능하여 외국인 고객도 편하게 이용하실 수 있습니다.",
  },
  {
    icon: Clock,
    title: "신속한 업무 처리",
    description: "체계적인 프로세스와 전문 인력으로 빠르고 정확한 업무 처리가 가능합니다.",
  },
  {
    icon: Shield,
    title: "철저한 비밀 보장",
    description: "고객의 개인정보와 사업 정보를 철저하게 보호하며, 비밀유지 의무를 준수합니다.",
  },
]

export function StrengthsSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Strengths
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            전문성과 신뢰
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            한길 행정사 사무소가 가진 강점을 소개합니다
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/60 bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
