import { Container } from "@/components/layout/container"

/** 셸 하단 푸터. */
export function SiteFooter() {
  return (
    <footer className="border-t py-6">
      <Container className="flex flex-col items-center justify-between gap-2 text-sm sm:flex-row">
        <p className="text-muted-foreground">
          © 2026 Starter Kit. 모든 권리 보유.
        </p>
        <p className="text-muted-foreground">
          Next.js 16 · Tailwind v4 · shadcn/ui
        </p>
      </Container>
    </footer>
  )
}
