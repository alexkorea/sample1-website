export function BlogHero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Blog
          </p>
          <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            블로그
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            비자, 이민, 행정 업무에 관한 유용한 정보와 최신 소식을 전해드립니다
          </p>
        </div>
      </div>
    </section>
  )
}
