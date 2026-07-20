import * as React from "react"

import { cn } from "@/lib/utils"

interface PageHeaderProps extends React.ComponentProps<"div"> {
  title: string
  description?: string
  actions?: React.ReactNode
}

/** 페이지 상단 제목·설명·액션 영역을 통일하는 범용 헤더. */
export function PageHeader({
  title,
  description,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
      {...props}
    >
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description ? (
          <p className="text-muted-foreground text-sm">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  )
}
