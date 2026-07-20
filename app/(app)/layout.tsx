import { cookies } from "next/headers"

import { AppSidebar } from "@/components/layout/app-sidebar"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

/**
 * 하이브리드 셸: 접이식 Sidebar + Header + Main + Footer.
 * 사이드바 열림 상태는 sidebar_state 쿠키로 영속화한다. SidebarProvider가 쿠키를
 * 쓰고, 여기서 서버 렌더 시 읽어 defaultOpen으로 넘겨 SSR/새로고침 후에도 유지된다.
 * 쿠키가 명시적으로 "false"일 때만 접힌 상태로 시작하고, 없으면 열림이 기본값이다.
 * 인증 페이지 등 셸이 필요 없는 라우트는 이 그룹 밖(예: app/(auth))에 둔다.
 */
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value !== "false"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset className="flex min-h-svh flex-col">
        <SiteHeader />
        <main className="flex-1 py-6">{children}</main>
        <SiteFooter />
      </SidebarInset>
    </SidebarProvider>
  )
}
