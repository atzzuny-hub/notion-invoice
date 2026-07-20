@AGENTS.md

# 프로젝트 개요

범용 웹 **스타터킷** (레포명 `notion-invoice`). 컴포넌트·레이아웃 기반을 재사용 가능하게 쌓아두는 것이 목적이며, 도메인 기능은 아직 없다.

**스택**: Next.js 16 (App Router · Turbopack) · React 19 · TypeScript(strict) · Tailwind CSS v4 · shadcn/ui(`radix-nova`) · lucide-react · next-themes.

## 명령어

```bash
npm run dev     # 개발 서버 (Turbopack)
npm run build   # 프로덕션 빌드
npm run start   # 프로덕션 서버
npm run lint    # ESLint (eslint-config-next)
```

## Next.js 16 주의 (학습 데이터와 다름 — 필독)

Next API를 쓰기 전 **`node_modules/next/dist/docs/`의 해당 가이드를 먼저 확인**한다. 기억에 의존하지 말 것. 이 레포에서 이미 확인된 파괴적 변경:

- `middleware` → **`proxy`** 로 개명 (루트 `proxy.ts`). 인증 라우트 보호 구현 시 주의.
- 새 캐싱 모델: `use cache` / `use cache: private` / `use cache: remote` + `cacheComponents` 설정.
- **Tailwind v4 = CSS-first**: `tailwind.config.js` 없음. 토큰·테마는 `app/globals.css`의 `@theme` 블록에서 관리.
- `next-themes` 사용 시 `<html suppressHydrationWarning>` 필수 (루트 레이아웃에 이미 적용).
- 클라이언트 미디어쿼리 훅은 **`initializeWithValue: false`** 로 SSR/CSR 첫 렌더를 일치시켜 하이드레이션 불일치 방지 (`hooks/use-mobile.ts` 참고).

## 코드 규약

- **경로 별칭**: `@/*` → 레포 **루트** (`src/` 디렉터리 없음). 예: `@/components`, `@/lib/utils`, `@/hooks`.
- **shadcn/ui**: 스타일은 `radix-nova`. 프리미티브 의존성은 통합 패키지 **`radix-ui`** 를 쓴다 — 개별 `@radix-ui/react-*` 패키지를 설치하지 말 것. 컴포넌트 추가는 `npx shadcn@latest add <name>`. 아이콘은 lucide-react.
- **훅은 재발명 금지**: `useMediaQuery`·`useLocalStorage`·`useDebounce` 등은 직접 구현하지 않고 `@/hooks` 배럴에서 import한다 (내부적으로 `usehooks-ts` + `use-local-storage-state`). 새 검증된 훅이 필요하면 배럴에 재노출로 추가.
- **클래스 병합**: `cn()` (`@/lib/utils`, clsx + tailwind-merge) 사용.

## 아키텍처

```
app/
  layout.tsx        # 루트: 폰트 · ThemeProvider · TooltipProvider · Toaster
  (app)/layout.tsx  # 하이브리드 셸 (Sidebar + Header + Main + Footer)
  (app)/…           # 셸이 적용되는 페이지들
components/
  ui/          # shadcn 프리미티브 (CLI 생성·소유) — 최하위 빌딩블록
  common/      # 범용 조합 위젯 (theme-toggle, user-nav, page-header …)
  layout/      # 구조 셸 (app-sidebar, site-header/footer, container, breadcrumbs, nav-config)
  providers/   # 클라이언트 프로바이더 (theme-provider …)
hooks/         # 검증된 라이브러리 재노출 배럴
lib/           # utils (cn 등)
features/      # 도메인 전용 코드 (기능 추가 시 이 아래에)
```

- **계층 원칙**: `ui`(프리미티브) → `common`(조합) → `layout`(구조) → `features`(도메인). 상위 계층은 하위 계층만 참조한다. `providers`·`hooks`는 횡단 관심사.
- **셸 재사용**: 셸이 필요 없는 화면(로그인 등)은 `(app)` 밖의 별도 라우트 그룹(예: `app/(auth)/`)에 둔다.
- **내비게이션은 데이터 주도**: 사이드바·브레드크럼은 `components/layout/nav-config.ts`의 `navGroups`를 공유한다. 새 프로젝트는 이 배열만 교체.
- 사이드바 열림 상태는 `sidebar_state` 쿠키로 영속화 → `(app)/layout.tsx`가 서버에서 읽어 `defaultOpen`으로 전달.

> 컴포넌트 인벤토리·설치 우선순위·백로그는 `ROADMAP.md` 참고. 코드 작성·변경 후에는 `code-reviewer` 서브에이전트로 리뷰한다.
