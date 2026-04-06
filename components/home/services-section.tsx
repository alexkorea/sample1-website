import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Building2, FileText, Scale, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Plane,
    title: "비자 업무",
    description: "외국인 비자 발급, 연장, 변경 등 모든 비자 관련 업무를 전문적으로 처리합니다.",
    features: ["취업비자 (E-7, E-9)", "투자비자 (D-8)", "유학비자 (D-2, D-4)", "가족비자 (F-1, F-2, F-6)"],
    popular: true,
  },
  {
    icon: Building2,
    title: "체류자격 변경",
    description: "체류자격 변경 및 기간 연장 신청을 신속하고 정확하게 대행합니다.",
    features: ["체류자격 변경허가", "체류기간 연장", "재입국 허가", "외국인등록"],
    popular: false,
  },
  {
    icon: FileText,
    title: "사업자등록 / 법인설립",
    description: "외국인 사업자등록 및 법인 설립 절차를 원스톱으로 지원합니다.",
    features: ["외국인 사업자등록", "외국인투자기업 설립", "지점 설치 신고", "사업자 변경 신고"],
    popular: false,
  },
  {
    icon: Scale,
    title: "각종 인허가",
    description: "음식점, 무역업, 학원 등 다양한 업종의 인허가 취득을 지원합니다.",
    features: ["음식점 영업신고", "무역업 등록", "학원 설립 인가", "통신판매업 신고"],
    popular: false,
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Services
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            전문 행정 서비스
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            비자, 이민, 사업자등록부터 각종 인허가까지
            <br className="hidden sm:inline" />
            모든 행정 업무를 원스톱으로 해결해 드립니다.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border/60 bg-card transition-all hover:border-primary/30 hover:shadow-lg"
            >
              {service.popular && (
                <Badge className="absolute right-4 top-4 bg-accent text-accent-foreground">
                  인기
                </Badge>
              )}
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  자세히 보기
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
