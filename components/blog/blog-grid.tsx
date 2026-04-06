"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const categories = [
  { id: "all", name: "전체" },
  { id: "visa", name: "비자 정보" },
  { id: "immigration", name: "이민 상담" },
  { id: "business", name: "사업자등록" },
  { id: "tips", name: "실무 팁" },
  { id: "news", name: "정책 소식" },
]

const posts = [
  {
    id: 2,
    title: "E-7 취업비자 신청 시 꼭 알아야 할 5가지",
    excerpt: "E-7 비자 신청 전 반드시 확인해야 할 자격 요건과 준비 서류, 심사 기준을 알려드립니다.",
    category: "visa",
    categoryName: "비자 정보",
    date: "2024년 3월 10일",
    readTime: "6분",
    slug: "e7-visa-guide",
  },
  {
    id: 3,
    title: "외국인 사업자등록 절차 완벽 가이드",
    excerpt: "외국인이 한국에서 사업자등록을 하려면 어떤 절차를 거쳐야 할까요? 단계별로 자세히 설명해 드립니다.",
    category: "business",
    categoryName: "사업자등록",
    date: "2024년 3월 5일",
    readTime: "7분",
    slug: "foreigner-business-registration",
  },
  {
    id: 4,
    title: "F-2 거주비자 점수제 계산 방법",
    excerpt: "F-2 거주비자 신청을 위한 점수제 항목과 계산 방법, 가점 받는 팁을 정리했습니다.",
    category: "visa",
    categoryName: "비자 정보",
    date: "2024년 2월 28일",
    readTime: "5분",
    slug: "f2-visa-points-system",
  },
  {
    id: 5,
    title: "체류기간 연장 신청, 언제 해야 할까?",
    excerpt: "체류기간 연장 신청 시기와 준비 서류, 주의사항을 알려드립니다. 늦지 않게 준비하세요.",
    category: "tips",
    categoryName: "실무 팁",
    date: "2024년 2월 20일",
    readTime: "4분",
    slug: "stay-extension-timing",
  },
  {
    id: 6,
    title: "2024년 출입국관리법 개정 주요 내용",
    excerpt: "올해 개정된 출입국관리법의 주요 내용을 정리했습니다. 변경된 규정을 미리 확인해 보세요.",
    category: "news",
    categoryName: "정책 소식",
    date: "2024년 2월 15일",
    readTime: "6분",
    slug: "immigration-law-2024",
  },
  {
    id: 7,
    title: "결혼비자(F-6) 신청 시 필요한 서류 목록",
    excerpt: "결혼비자 신청에 필요한 서류를 빠짐없이 준비할 수 있도록 체크리스트를 정리했습니다.",
    category: "visa",
    categoryName: "비자 정보",
    date: "2024년 2월 10일",
    readTime: "5분",
    slug: "f6-visa-documents",
  },
  {
    id: 8,
    title: "외국인 고용허가제(E-9) 이해하기",
    excerpt: "E-9 비자의 발급 절차와 고용허가제의 기본 개념을 알기 쉽게 설명합니다.",
    category: "immigration",
    categoryName: "이민 상담",
    date: "2024년 2월 5일",
    readTime: "7분",
    slug: "e9-employment-permit",
  },
  {
    id: 9,
    title: "비자 거절 시 대응 방법과 재신청 전략",
    excerpt: "비자가 거절되었을 때 어떻게 대응해야 할까요? 재신청 시 성공률을 높이는 방법을 알려드립니다.",
    category: "tips",
    categoryName: "실무 팁",
    date: "2024년 1월 30일",
    readTime: "6분",
    slug: "visa-rejection-response",
  },
]

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory)

  return (
    <section className="bg-secondary/20 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Blog grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-border/60 bg-card transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.categoryName}
                  </Badge>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="mt-2 text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  읽기
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            더 많은 글 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
