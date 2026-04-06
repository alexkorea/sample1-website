import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "주소",
    value: "서울특별시 강남구 테헤란로 123\n한길빌딩 5층",
  },
  {
    icon: Phone,
    label: "전화",
    value: "02-1234-5678",
  },
  {
    icon: Mail,
    label: "이메일",
    value: "contact@hangil-admin.kr",
  },
  {
    icon: Clock,
    label: "상담 시간",
    value: "평일 09:00 - 18:00\n토요일 10:00 - 14:00",
  },
]

export function ContactCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left side - CTA */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Contact Us
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              상담 문의
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
              궁금한 점이 있으시면 언제든지 연락해 주세요.
              전문 상담사가 친절하게 안내해 드립니다.
              방문 상담을 원하시면 미리 예약해 주시기 바랍니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                무료 상담 신청
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                카카오톡 상담
              </Button>
            </div>
          </div>

          {/* Right side - Contact info cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {contactInfo.map((item) => (
              <Card key={item.label} className="border-border/60">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-foreground whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
