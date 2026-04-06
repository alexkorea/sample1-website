import { MessageSquare, FileSearch, Send, CheckCircle } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "무료 상담",
    description: "전화, 이메일, 카카오톡으로 편하게 상담하세요. 필요한 서류와 예상 기간을 안내해 드립니다.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "서류 검토",
    description: "제출하신 서류를 꼼꼼히 검토하고, 추가로 필요한 서류가 있다면 안내해 드립니다.",
  },
  {
    step: "03",
    icon: Send,
    title: "신청 대행",
    description: "출입국관리사무소 등 관계 기관에 신청을 대행하고 진행 상황을 안내해 드립니다.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "결과 안내",
    description: "업무 처리가 완료되면 결과를 안내해 드리고, 이후 관리가 필요한 사항을 알려드립니다.",
  },
]

export function ProcessSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Process
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            이용 절차
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            간단한 4단계로 행정 업무를 해결하세요
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-primary/30 to-transparent lg:block" />
              )}

              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-card shadow-sm border border-border">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
