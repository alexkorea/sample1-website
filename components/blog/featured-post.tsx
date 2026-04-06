import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"

const featuredPost = {
  id: 1,
  title: "2024년 외국인 비자 정책 주요 변경사항 총정리",
  excerpt:
    "올해 시행되는 외국인 비자 정책의 주요 변경사항을 정리했습니다. E-7 비자 발급 요건 완화, F-2 비자 점수제 개편 등 중요한 내용을 확인해 보세요.",
  category: "비자 정보",
  date: "2024년 3월 15일",
  readTime: "8분",
  slug: "visa-policy-changes-2024",
}

export function FeaturedPost() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-card to-accent/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,var(--border)_50%,transparent_51%,transparent_100%)] bg-[size:40px_100%] opacity-20" />
          
          <div className="relative p-8 lg:p-12">
            <div className="flex items-center gap-3">
              <Badge className="bg-accent text-accent-foreground">
                Featured
              </Badge>
              <Badge variant="outline">{featuredPost.category}</Badge>
            </div>

            <h2 className="mt-6 text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              {featuredPost.title}
            </h2>

            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
              {featuredPost.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{featuredPost.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>읽는 시간 {featuredPost.readTime}</span>
              </div>
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              자세히 읽기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
