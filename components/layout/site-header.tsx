import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { UserNav } from "@/components/common/user-nav"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

/**
 * 셸 상단 헤더.
 * - 좌: 사이드바 토글(모바일에서는 Sheet 드로어 열기) + 브레드크럼
 * - 우: 테마 토글 + 유저 메뉴
 * `sticky`로 스크롤 시 고정된다.
 */
export function SiteHeader() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b px-4 backdrop-blur">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-1 data-[orientation=vertical]:h-4" />
      <Breadcrumbs />
      <div className="ml-auto flex items-center gap-1">
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  )
}
