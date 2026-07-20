"use client"

import { toast } from "sonner"
import { BellIcon, PanelRightIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

/**
 * 컴포넌트 쇼케이스.
 * 스타터킷에 포함된 UI 프리미티브를 실제로 렌더링해 보여준다.
 * Tooltip · Sheet · Sonner 토스트가 클라이언트 상호작용을 요구하므로 "use client".
 */

function ShowcaseCard({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-3">
        {children}
      </CardContent>
    </Card>
  )
}

export function ComponentShowcase() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
        <ShowcaseCard title="Button" description="변형(variant)과 크기(size)">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </ShowcaseCard>

        <ShowcaseCard title="Badge" description="상태·라벨 표시">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </ShowcaseCard>

        <ShowcaseCard title="Avatar" description="이미지 · 폴백">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>NI</AvatarFallback>
          </Avatar>
        </ShowcaseCard>

        <ShowcaseCard title="Input" description="텍스트 입력">
          <Input placeholder="이메일을 입력하세요" className="max-w-xs" />
        </ShowcaseCard>

        <ShowcaseCard
          title="Separator"
          description="콘텐츠 구분선 (가로 · 세로)"
        >
          <div className="w-full space-y-2">
            <p className="text-sm">위 콘텐츠</p>
            <Separator />
            <p className="text-sm">아래 콘텐츠</p>
          </div>
          <div className="flex h-6 items-center gap-3 text-sm">
            <span>A</span>
            <Separator orientation="vertical" />
            <span>B</span>
            <Separator orientation="vertical" />
            <span>C</span>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="Skeleton" description="로딩 자리표시자">
          <div className="flex w-full items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="Tooltip" description="호버 시 힌트 표시">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">마우스를 올려보세요</Button>
            </TooltipTrigger>
            <TooltipContent>스타터킷 툴팁입니다 ✨</TooltipContent>
          </Tooltip>
        </ShowcaseCard>

        <ShowcaseCard title="Sonner" description="토스트 알림">
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
        </ShowcaseCard>

        <ShowcaseCard title="Sheet" description="측면 오버레이 패널">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <PanelRightIcon />
                Sheet 열기
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet 패널</SheetTitle>
                <SheetDescription>
                  Radix 기반 측면 오버레이입니다. 모바일 내비게이션 등에 사용됩니다.
                </SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">닫기</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ShowcaseCard>
    </div>
  )
}
