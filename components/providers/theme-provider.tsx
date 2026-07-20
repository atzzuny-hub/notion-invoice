"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * 앱 전역 테마 프로바이더 (next-themes 래핑).
 * 다크모드는 `.dark` 클래스 기반(`app/globals.css`의 `@custom-variant dark`와 연결).
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
