import { useMediaQuery } from "usehooks-ts"

const MOBILE_BREAKPOINT = 768

/**
 * 모바일 뷰포트 감지.
 * shadcn 기본 구현(직접 matchMedia + useEffect) 대신 검증된 usehooks-ts로 대체 —
 * SSR 안전하고 effect 내 setState 문제가 없다. (sidebar.tsx가 이 훅을 사용)
 */
export function useIsMobile() {
  // initializeWithValue: false → 서버·클라이언트 첫 렌더가 모두 false로 일치(하이드레이션
  // 불일치 방지). 마운트 직후 effect에서 실제 매치 값으로 갱신된다.
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`, {
    initializeWithValue: false,
  })
}
