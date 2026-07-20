"use client"

import { toast } from "sonner"
import { BellIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLocalStorageState } from "@/hooks"

/**
 * 스타터 데모 위젯.
 * - Sonner 토스트 트리거
 * - `use-local-storage-state`로 배너 닫힘 상태를 영속화(크로스탭 동기화·SSR 안전)
 *
 * 훅을 직접 구현하지 않고 검증된 라이브러리를 쓰는 예시.
 */
export function StarterDemo() {
  const [dismissed, setDismissed] = useLocalStorageState("welcome-dismissed", {
    defaultValue: false,
  })

  return (
    <div className="space-y-4">
      {!dismissed ? (
        <div className="bg-muted/50 flex items-center justify-between gap-4 rounded-lg border p-4">
          <p className="text-sm">
            👋 환영합니다! 이 배너의 닫힘 상태는 <code>localStorage</code>에
            저장되어 새로고침·다른 탭에도 유지됩니다.
          </p>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="배너 닫기"
            onClick={() => setDismissed(true)}
          >
            <XIcon />
          </Button>
        </div>
      ) : (
        <Button variant="outline" size="sm" onClick={() => setDismissed(false)}>
          환영 배너 다시 보기
        </Button>
      )}

      <Button
        onClick={() =>
          toast.success("토스트 알림", {
            description: "Sonner가 정상 동작합니다.",
          })
        }
      >
        <BellIcon />
        토스트 띄우기
      </Button>
    </div>
  )
}
