import {
  ComponentIcon,
  LayoutTemplateIcon,
  MoonIcon,
  WrenchIcon,
} from "lucide-react"

import { PageHeader } from "@/components/common/page-header"
import { StarterDemo } from "@/components/common/starter-demo"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    icon: LayoutTemplateIcon,
    title: "하이브리드 레이아웃",
    description: "Header + 접이식 Sidebar + Footer. 모바일은 Sheet로 자동 전환.",
  },
  {
    icon: MoonIcon,
    title: "다크모드",
    description: "next-themes 기반 라이트/다크/시스템 테마 토글.",
  },
  {
    icon: ComponentIcon,
    title: "shadcn/ui",
    description: "radix-nova 스타일 프리미티브를 소유하고 자유롭게 커스터마이즈.",
  },
  {
    icon: WrenchIcon,
    title: "검증된 훅",
    description: "usehooks-ts · use-local-storage-state로 바퀴 재발명 금지.",
  },
]

export default function HomePage() {
  return (
    <Container className="space-y-8">
      <PageHeader
        title="대시보드"
        description="Next.js 16 웹 스타터킷 — 컴포넌트·레이아웃 기반이 준비되었습니다."
        actions={<Badge variant="secondary">v0.1.0</Badge>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="text-muted-foreground size-5" />
              <CardTitle className="text-base">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>인터랙션 데모</CardTitle>
          <CardDescription>
            Sonner 토스트와 localStorage 영속화 상태를 확인해 보세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StarterDemo />
        </CardContent>
      </Card>
    </Container>
  )
}
