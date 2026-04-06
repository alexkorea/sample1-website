import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  services: [
    { name: "비자 업무", href: "#" },
    { name: "체류자격 변경", href: "#" },
    { name: "사업자등록", href: "#" },
    { name: "인허가 업무", href: "#" },
  ],
  company: [
    { name: "사무소 소개", href: "/about" },
    { name: "블로그", href: "/blog" },
    { name: "오시는 길", href: "#" },
  ],
  legal: [
    { name: "개인정보처리방침", href: "#" },
    { name: "이용약관", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="text-xl font-bold text-primary">한</span>
              </div>
              <span className="text-xl font-semibold">한길 행정사</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              외국인 비자, 체류자격 변경, 사업자등록 등<br />
              모든 행정 업무를 전문적으로 처리해 드립니다.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>contact@hangil-admin.kr</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>서울특별시 강남구 테헤란로 123<br />한길빌딩 5층</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold">서비스</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">사무소</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold">법적 정보</h3>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-primary-foreground/60">
              행정사 등록번호: 제2024-서울강남-00123호 | 대표 행정사: 김한길
            </p>
            <p className="text-xs text-primary-foreground/60">
              &copy; {new Date().getFullYear()} 한길 행정사 사무소. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
