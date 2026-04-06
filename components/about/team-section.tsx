import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const team = [
  {
    name: "김한길",
    role: "대표 행정사",
    specialties: ["비자 업무", "체류자격 변경", "투자비자"],
    description: "15년 이상의 경력을 바탕으로 복잡한 비자 및 체류 업무를 전문적으로 처리합니다.",
    languages: ["한국어", "영어"],
  },
  {
    name: "이수민",
    role: "선임 행정사",
    specialties: ["사업자등록", "법인설립", "인허가"],
    description: "기업 관련 행정 업무에 특화된 전문가로, 창업부터 운영까지 원스톱 서비스를 제공합니다.",
    languages: ["한국어", "중국어"],
  },
  {
    name: "박준혁",
    role: "행정사",
    specialties: ["외국인등록", "재입국허가", "체류기간연장"],
    description: "외국인 관련 업무 전문가로, 다양한 국적의 고객분들을 성심껏 도와드립니다.",
    languages: ["한국어", "베트남어"],
  },
  {
    name: "최영희",
    role: "상담 매니저",
    specialties: ["고객상담", "서류안내", "일정관리"],
    description: "친절하고 세심한 상담으로 고객분들의 궁금증을 해결해 드립니다.",
    languages: ["한국어", "영어"],
  },
]

export function TeamSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Team
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            전문가 소개
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            믿고 맡길 수 있는 한길의 전문가들을 소개합니다
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name} className="border-border/60 bg-card overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-md">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-accent font-medium">
                    {member.role}
                  </p>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {member.specialties.slice(0, 2).map((specialty) => (
                    <Badge
                      key={specialty}
                      variant="secondary"
                      className="text-xs"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium">언어:</span>
                  {member.languages.join(", ")}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
