import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            지금 바로 상담하세요
          </h2>
          <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
            복잡한 행정 업무, 전문가에게 맡기고 편하게 해결하세요.
            <br className="hidden sm:inline" />
            무료 상담으로 궁금한 점을 먼저 확인해 보세요.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto gap-2 text-base bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Phone className="h-5 w-5" />
              전화 상담
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              카카오톡 상담
            </Button>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-6 text-sm text-primary-foreground/70 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              평일 09:00 - 18:00
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              토요일 10:00 - 14:00
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              일/공휴일 휴무
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
