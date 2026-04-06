import { FileCheck, Clock, Users, Award } from "lucide-react"

const stats = [
  {
    icon: FileCheck,
    value: "5,000+",
    label: "처리 건수",
    description: "누적 행정 업무 처리",
  },
  {
    icon: Clock,
    value: "24시간",
    label: "빠른 응답",
    description: "평균 상담 응답 시간",
  },
  {
    icon: Users,
    value: "98%",
    label: "고객 만족도",
    description: "고객 재이용률 기준",
  },
  {
    icon: Award,
    value: "15년",
    label: "전문 경력",
    description: "행정 분야 실무 경험",
  },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
