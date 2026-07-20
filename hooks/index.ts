/**
 * 공용 훅 배럴.
 *
 * 원칙: "바퀴를 재발명하지 않는다."
 * useMediaQuery / useDebounce / useCopyToClipboard 등 범용 훅은 직접 구현하지 않고
 * 검증된 라이브러리에서 재노출한다.
 *
 * - 일반 유틸 훅: `usehooks-ts` (TS 네이티브, 트리셰이킹, 넓은 커버리지)
 * - localStorage: `use-local-storage-state` (크로스탭 동기화 · SSR 안전)
 *
 * 필요한 훅을 여기서 한 번에 import 하도록 통로를 통일한다.
 *   import { useMediaQuery, useLocalStorageState } from "@/hooks"
 */
export {
  useMediaQuery,
  useBoolean,
  useDebounceValue,
  useDebounceCallback,
  useCopyToClipboard,
  useOnClickOutside,
  useIsMounted,
  useEventListener,
  useToggle,
  useStep,
  useReadLocalStorage,
} from "usehooks-ts"

export { default as useLocalStorageState } from "use-local-storage-state"

// 모바일 뷰포트 감지는 shadcn 사이드바가 사용하는 기존 훅을 재사용.
export { useIsMobile } from "./use-mobile"
