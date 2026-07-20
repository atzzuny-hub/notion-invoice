"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

/** 세그먼트 라벨링 (필요 시 커스텀). */
const LABELS: Record<string, string> = {
  components: "컴포넌트",
  docs: "문서",
  settings: "설정",
  help: "도움말",
}

const toLabel = (segment: string) =>
  LABELS[segment] ??
  segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")

/** 현재 경로(usePathname)를 읽어 자동 생성되는 브레드크럼. */
export function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {segments.length === 0 ? (
            <BreadcrumbPage>홈</BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link href="/">홈</Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/")
          const isLast = index === segments.length - 1
          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{toLabel(segment)}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{toLabel(segment)}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
