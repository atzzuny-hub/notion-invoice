import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { Container } from "@/components/layout/container"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "문서",
}

const sections = [
  {
    title: "시작하기",
    description: "프로젝트 구조와 셸 배선 방식을 설명합니다.",
  },
  {
    title: "컴포넌트 계층",
    description: "ui · common · layout · features 계층 규약.",
  },
  {
    title: "로드맵",
    description: "우선순위별 shadcn 설치 및 개발 단계는 ROADMAP.md 참고.",
  },
]

export default function DocsPage() {
  return (
    <Container className="space-y-8">
      <PageHeader
        title="문서"
        description="스타터킷 사용법과 규약을 정리한 공간입니다."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="text-base">{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Container>
  )
}
