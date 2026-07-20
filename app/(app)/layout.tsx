import { AppSidebar } from "@/components/layout/app-sidebar"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

/**
 * 하이브리드 셸: 접이식 Sidebar + Header + Main + Footer.
 * 사이드바 열림 상태는 shadcn SidebarProvider가 쿠키로 영속화한다(SSR 안전).
 * 인증 페이지 등 셸이 필요 없는 라우트는 이 그룹 밖(예: app/(auth))에 둔다.
 */
export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex min-h-svh flex-col">
        <SiteHeader />
        <main className="flex-1 py-6">{children}</main>
        <SiteFooter />
      </SidebarInset>
    </SidebarProvider>
  )
}
