import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { Container } from "@/components/layout/container"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "설정",
}

export default function SettingsPage() {
  return (
    <Container className="space-y-8">
      <PageHeader
        title="설정"
        description="애플리케이션 환경설정을 관리합니다."
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-base">테마</CardTitle>
          <CardDescription>
            라이트 · 다크 · 시스템 테마를 선택합니다.
          </CardDescription>
          <CardContent className="px-0 pt-2">
            <ThemeToggle />
          </CardContent>
        </CardHeader>
      </Card>
    </Container>
  )
}
