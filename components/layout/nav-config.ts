import {
  LayoutDashboardIcon,
  ComponentIcon,
  FileTextIcon,
  SettingsIcon,
  type LucideIcon,
} from "lucide-react"

export interface NavItem {
  title: string
  href: string
  icon: LucideIcon
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

/**
 * 사이드바 · 브레드크럼이 공유하는 내비게이션 정의.
 * 새 프로젝트에서는 이 배열만 교체하면 셸이 그대로 재사용된다.
 */
export const navGroups: NavGroup[] = [
  {
    label: "메뉴",
    items: [
      { title: "대시보드", href: "/", icon: LayoutDashboardIcon },
      { title: "컴포넌트", href: "/components", icon: ComponentIcon },
      { title: "문서", href: "/docs", icon: FileTextIcon },
    ],
  },
  {
    label: "지원",
    items: [{ title: "설정", href: "/settings", icon: SettingsIcon }],
  },
]
