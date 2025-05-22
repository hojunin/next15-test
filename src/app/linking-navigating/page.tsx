"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // next/router가 아닌 next/navigation을 사용합니다.
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Button 컴포넌트 import

export default function LinkingNavigatingPage() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/linking-navigating/programmatic-nav-target");
  };

  const handleNavigateWithReplace = () => {
    router.replace("/linking-navigating/programmatic-nav-target?replaced=true");
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Linking and Navigating 테스트</CardTitle>
        <CardDescription>
          Next.js에서 페이지 간 이동 및 네비게이션 상태 관리를 위한 다양한
          방법을 테스트합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <h4 className="text-lg font-semibold mb-3">
            1. &lt;Link&gt; 컴포넌트 사용
          </h4>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <Link
                href="/linking-navigating/link-target"
                className="text-blue-600 hover:underline"
              >
                기본 Link 태그
              </Link>
            </li>
            <li>
              <Link
                href="/linking-navigating/link-target?query=test"
                className="text-blue-600 hover:underline"
              >
                쿼리 파라미터와 함께 Link
              </Link>
            </li>
            <li>
              <Link
                href="/linking-navigating/link-target#section-id"
                className="text-blue-600 hover:underline"
              >
                해시 Fragment와 함께 Link
              </Link>
            </li>
            <li>
              <Link
                href="/linking-navigating/link-target"
                scroll={false}
                className="text-blue-600 hover:underline"
              >
                스크롤 비활성화 Link (scroll=false)
              </Link>
            </li>
            <li>
              <Link
                href="/linking-navigating/link-target"
                prefetch={false}
                className="text-blue-600 hover:underline"
              >
                프리페치 비활성화 Link (prefetch=false) - 개발 모드에서는 확인
                어려움
              </Link>
            </li>
            <li>
              <Link
                href="/linking-navigating/link-target"
                replace
                className="text-blue-600 hover:underline"
              >
                브라우저 히스토리 교체 Link (replace)
              </Link>
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h4 className="text-lg font-semibold mb-3">
            2. useRouter 훅 사용 (프로그래매틱 네비게이션)
          </h4>
          <div className="space-y-2 flex flex-col items-start">
            <Button onClick={handleNavigate}>
              /programmatic-nav-target 로 이동 (push)
            </Button>
            <Button onClick={handleNavigateWithReplace} variant="outline">
              /programmatic-nav-target 로 이동 (replace, 쿼리 추가)
            </Button>
            <Button onClick={() => router.back()} variant="outline">
              뒤로 가기 (back)
            </Button>
            <Button onClick={() => router.forward()} variant="outline">
              앞으로 가기 (forward) - (앞으로 갈 페이지가 있을 경우)
            </Button>
            <Button onClick={() => router.refresh()} variant="secondary">
              새로고침 (refresh)
            </Button>
          </div>
        </section>

        <hr />

        <section>
          <h4 className="text-lg font-semibold mb-3">
            3. 현재 경로 정보 확인 (usePathname, useSearchParams)
          </h4>
          <p className="mb-2">
            이 기능은 다른 페이지에서 확인하거나, 이 페이지 내에 컴포넌트를
            추가하여 테스트할 수 있습니다.
          </p>
          <Button asChild>
            <Link href="/linking-navigating/current-path-info?name=John&age=30">
              현재 경로 정보 확인 페이지로 이동
            </Link>
          </Button>
        </section>
      </CardContent>
    </Card>
  );
}
