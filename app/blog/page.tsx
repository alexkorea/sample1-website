import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { FeaturedPost } from "@/components/blog/featured-post"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata: Metadata = {
  title: "블로그 | 한길 행정사 사무소",
  description: "비자, 이민, 행정 업무에 대한 유용한 정보와 최신 소식을 전해드립니다.",
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BlogHero />
        <FeaturedPost />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}
