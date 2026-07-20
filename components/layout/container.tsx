import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * 콘텐츠 폭·좌우 여백을 통일하는 레이아웃 프리미티브.
 * 페이지 본문을 감싸 반응형 최대 폭과 패딩을 일관되게 유지한다.
 */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  )
}
