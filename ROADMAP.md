# 웹 스타터킷 ROADMAP

빠르게 새 웹 프로젝트를 시작하기 위한 **컴포넌트 · 레이아웃 기반**을 쌓아 올리는 로드맵.

## 이미 완료된 스택

- **Next.js 16** (App Router, Turbopack)
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first, `tailwind.config.js` 없음)
- **shadcn/ui** (`radix-nova` 스타일, `radix-ui` 통합 패키지)
- **lucide-react** (아이콘)

## ⚠️ 이 저장소 Next.js 16 규약 (필독)

이 버전은 학습 데이터와 다른 파괴적 변경이 있다. **코드 작성 전 `node_modules/next/dist/docs/`
의 해당 가이드를 먼저 확인**할 것. (`AGENTS.md` 의무)

- `middleware` → **`proxy`** 로 개명 (루트 `proxy.ts`). 인증 라우트 보호 시 주의.
- 새 캐싱 모델: `use cache` / `use cache: private` / `use cache: remote`, `cacheComponents` 설정.
- Tailwind v4 CSS-first: 토큰은 `app/globals.css` 의 `@theme` 블록에서 관리.
- `next-themes` 사용 시 `<html suppressHydrationWarning>` 필요.
- 클라이언트 미디어쿼리 훅은 **`initializeWithValue: false`** 로 SSR/CSR 첫 렌더를
  일치시켜 하이드레이션 불일치를 방지 (`hooks/use-mobile.ts` 참고).

---

## ① 범용 컴포넌트 · 레이아웃 인벤토리

어떤 웹에도 반복적으로 필요한 요소를 카테고리별로 정리한다. (✅ = 이번 라운드 완료)

### 레이아웃 / 구조
- ✅ AppShell (하이브리드 셸)
- ✅ Header (로고 · nav · 테마토글 · 유저메뉴 · 모바일 트리거)
- ✅ Sidebar (접이식, 모바일 Sheet 자동 전환)
- ✅ Footer
- ✅ Container (최대 폭 · 좌우 여백 통일)
- ✅ Breadcrumbs (경로 자동 생성)
- ✅ PageHeader (제목 · 설명 · 액션)

### 내비게이션
- ✅ Sidebar 메뉴 (활성 표시)
- ✅ Breadcrumb
- ✅ DropdownMenu
- [ ] Tabs
- [ ] Pagination
- [ ] NavigationMenu (상단 메가메뉴형)

### 피드백 / 오버레이
- ✅ Sonner (toast)
- ✅ Tooltip
- ✅ Sheet (드로어)
- ✅ Skeleton
- [ ] Dialog / AlertDialog
- [ ] Popover
- [ ] Progress / Spinner
- [ ] EmptyState (공통 위젯)

### 폼 / 입력
- ✅ Input, Button
- [ ] Form (react-hook-form 연동)
- [ ] Label, Textarea, Select, Checkbox, RadioGroup, Switch
- [ ] Slider, Calendar / DatePicker
- [ ] Combobox

### 데이터 표시
- ✅ Card, Badge, Avatar, Separator
- [ ] Table / DataTable
- [ ] Accordion
- [ ] Stat 카드

### 유틸 / 테마
- ✅ ThemeToggle (라이트 / 다크 / 시스템)
- ✅ 검증된 훅 배럴 (`@/hooks`)
- [ ] Command (⌘K 팔레트)

---

## ② 컴포넌트 계층 분류 (폴더 규약)

```
components/
  ui/          # shadcn 프리미티브 (CLI 생성·소유) — 최하위 빌딩블록
  common/      # 범용 조합 위젯: theme-toggle, user-nav, page-header, starter-demo …
  layout/      # 구조 셸: app-sidebar, site-header, site-footer, container, breadcrumbs, nav-config
  providers/   # 클라이언트 프로바이더: theme-provider …
hooks/         # 검증된 라이브러리 재노출 배럴 (직접 구현 금지)
features/      # 도메인 전용 (스타터킷 범위 밖 — 기능 추가 시 이 아래에)
```

**계층 원칙**: `ui`(프리미티브) → `common`(조합) → `layout`(구조) → `features`(도메인).
상위 계층은 하위 계층만 참조한다. `providers` · `hooks` 는 횡단 관심사.

**셸 배선**: `app/layout.tsx`(루트: 폰트 · ThemeProvider · TooltipProvider · Toaster) →
`app/(app)/layout.tsx`(하이브리드 셸) → 페이지. 셸이 필요 없는 화면(예: 로그인)은
`app/(auth)/` 같은 별도 라우트 그룹에 두면 된다.

---

## ③ 우선순위별 shadcn 설치 & 개발

`npx shadcn@latest add <component>` 로 설치. (✅ = 이번 라운드 완료)

### P0 — 레이아웃 필수 ✅ (완료)
- ✅ `sidebar` (→ button · separator · sheet · tooltip · input · skeleton 동반)
- ✅ `dropdown-menu`, `avatar`, `sonner`, `breadcrumb`
- ✅ `card`, `badge` (스타터 홈 데모용)
- ✅ 하이브리드 셸 구현 + 스타터 홈 페이지 + 다크모드 · 토스트 · localStorage 데모

### P1 — 폼 · 기본 표시 (다음 순서)
- [ ] `form` (+ `react-hook-form`, `zod`, `@hookform/resolvers`)
- [ ] `label`, `textarea`, `select`, `checkbox`, `switch`
- [ ] `dialog`, `alert-dialog`
- [ ] `EmptyState`, `ConfirmDialog` (common 위젯화)

### P2 — 확장
- [ ] `table` → DataTable (+ `@tanstack/react-table`)
- [ ] `tabs`, `accordion`, `popover`, `command`, `calendar`, `pagination`
- [ ] `progress`, `scroll-area`

---

## 유틸리티 라이브러리 결정 (바퀴를 재발명하지 않는다)

`useMediaQuery` · `useLocalStorage` 등을 직접 구현하지 않고 검증된 라이브러리를 채택한다.

| 목적 | 채택 | 이유 |
|---|---|---|
| 범용 훅 모음 | [`usehooks-ts`](https://www.npmjs.com/package/usehooks-ts) | `useMediaQuery` · `useDebounceValue` · `useCopyToClipboard` · `useOnClickOutside` 등을 하나의 TS 네이티브 · 트리셰이킹 패키지로 제공. 단일 훅 라이브러리(`react-responsive`)보다 커버리지가 넓고 의존성이 적다. |
| localStorage | [`use-local-storage-state`](https://www.npmjs.com/package/use-local-storage-state) | 크로스탭 동기화 · SSR 안전 · 삭제 처리에서 사실상 최고 수준. localStorage 한정으로는 usehooks-ts 보다 우위라 별도 채택. |

> 참고로 검토했던 `react-responsive` 는 `useMediaQuery` 단일 기능 위주라, 여러 훅을
> 함께 제공하는 `usehooks-ts` 로 대체했다. 모든 훅은 `@/hooks` 배럴에서 재노출하여
> `import { useMediaQuery, useLocalStorageState } from "@/hooks"` 로 통일해 사용한다.

---

## 다음 단계 우선순위

1. **P1 폼 스택** (`form` + `react-hook-form` + `zod`) — 대부분의 앱에서 즉시 필요.
2. **P2 DataTable** — 목록/관리 화면의 핵심.
3. **Command 팔레트 · EmptyState · ConfirmDialog** — UX 완성도.
4. (풀스택 확장) 인증(`proxy.ts` 주의) · DB(Drizzle) · API 라우트 핸들러 — 별도 로드맵.

> 각 단계 착수 전 반드시 `node_modules/next/dist/docs/` 의 해당 가이드를 확인할 것.
