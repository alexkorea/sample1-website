import { Target, Eye, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "미션",
    description:
      "복잡한 행정 절차로 어려움을 겪는 분들에게 정확하고 신속한 서비스를 제공하여 고객의 소중한 시간과 노력을 아껴드립니다.",
  },
  {
    icon: Eye,
    title: "비전",
    description:
      "대한민국을 대표하는 행정사 사무소로서, 외국인과 내국인 모두에게 신뢰받는 원스톱 행정 서비스 플랫폼을 구축합니다.",
  },
  {
    icon: Heart,
    title: "핵심 가치",
    description:
      "정직, 전문성, 고객 중심. 이 세 가지 가치를 바탕으로 고객에게 최상의 서비스를 제공하고, 신뢰를 쌓아갑니다.",
  },
]

export function MissionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
