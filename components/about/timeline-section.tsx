const milestones = [
  {
    year: "2009",
    title: "사무소 설립",
    description: "서울 강남구에 한길 행정사 사무소 개소",
  },
  {
    year: "2012",
    title: "1,000건 돌파",
    description: "누적 업무 처리 1,000건 달성",
  },
  {
    year: "2015",
    title: "다국어 서비스 시작",
    description: "영어, 중국어 상담 서비스 개시",
  },
  {
    year: "2018",
    title: "사무소 확장",
    description: "인원 확충 및 사무실 이전",
  },
  {
    year: "2021",
    title: "3,000건 돌파",
    description: "누적 업무 처리 3,000건 달성",
  },
  {
    year: "2024",
    title: "5,000건 돌파",
    description: "누적 업무 처리 5,000건 달성, 베트남어 서비스 추가",
  },
]

export function TimelineSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            History
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            성장 과정
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            한길 행정사 사무소의 주요 연혁을 소개합니다
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border lg:left-1/2 lg:-translate-x-1/2" />

            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-6 lg:gap-0 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary lg:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                  </div>

                  <div
                    className={`ml-12 lg:ml-0 lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    }`}
                  >
                    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                        {milestone.year}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
