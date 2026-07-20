import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "로그인",
  description: "계정에 로그인합니다.",
}

// TODO: 실제 인증 로직으로 교체. 현재는 폼의 기본 GET 제출(비밀번호가 URL에
// 노출됨)을 막기 위한 스텁이다.
async function login(formData: FormData) {
  "use server"
  void formData
}

export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-lg">로그인</CardTitle>
        <CardDescription>
          이메일과 비밀번호를 입력해 계정에 로그인하세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={login} className="flex flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">비밀번호</Label>
              <Link
                href="#"
                className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                비밀번호를 잊으셨나요?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
          <Button type="submit" className="mt-2 w-full">
            로그인하기
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          계정이 없으신가요?{" "}
          <Link
            href="#"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            회원가입
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
