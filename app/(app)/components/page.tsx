import type { Metadata } from "next"

import { ComponentShowcase } from "@/components/common/component-showcase"
import { PageHeader } from "@/components/common/page-header"
import { Container } from "@/components/layout/container"

export const metadata: Metadata = {
  title: "컴포넌트",
}

export default function ComponentsPage() {
  return (
    <Container className="space-y-8">
      <PageHeader
        title="컴포넌트"
        description="스타터킷에 포함된 재사용 컴포넌트를 실제로 렌더링한 쇼케이스입니다."
      />
      <ComponentShowcase />
    </Container>
  )
}
