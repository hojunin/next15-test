import Link from "next/link";
import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 서버에서 데이터를 느리게 가져오는 컴포넌트 (예시)
async function SlowComponent({ delay, name }: { delay: number; name: string }) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return (
    <p className="p-3 bg-green-100 border border-green-300 rounded-md text-green-700">
      <strong>{name}:</strong> 로딩 완료! (딜레이: {delay}ms)
    </p>
  );
}

export default function LoadingStreamingPage() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">
          Loading UI and Streaming 테스트
        </CardTitle>
        <CardDescription>
          <code>loading.tsx</code> 파일과 <code>Suspense</code>를 사용하여
          페이지 로딩 중 UI를 개선하고 콘텐츠를 점진적으로 스트리밍하는 방법을
          테스트합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <h4 className="text-lg font-semibold mb-2">
            1. 세그먼트 레벨 Loading UI (<code>loading.tsx</code>)
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            아래 링크로 이동하면 <code>/loading-streaming/slow-load</code>{" "}
            경로에 대한 <code>loading.tsx</code>가 먼저 보이고, 그 후 실제
            페이지 콘텐츠가 나타납니다.
          </p>
          <Button asChild>
            <Link href="/loading-streaming/slow-load">
              느리게 로드되는 페이지로 이동
            </Link>
          </Button>
        </section>

        <hr />

        <section>
          <h4 className="text-lg font-semibold mb-2">
            2. <code>Suspense</code>를 사용한 컴포넌트 레벨 스트리밍
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            아래 컴포넌트들은 각각 다른 딜레이를 가지고 로드됩니다.
            <code>Suspense</code>의 fallback UI가 먼저 보이고, 각 컴포넌트가
            준비되는 대로 스트리밍됩니다.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">스트리밍 예제 영역</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Suspense
                fallback={
                  <p className="p-3 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-700">
                    첫 번째 컴포넌트 로딩 중... (fallback)
                  </p>
                }
              >
                <SlowComponent delay={1000} name="컴포넌트 A" />
              </Suspense>
              <Suspense
                fallback={
                  <p className="p-3 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-700">
                    두 번째 컴포넌트 로딩 중... (fallback)
                  </p>
                }
              >
                <SlowComponent delay={3000} name="컴포넌트 B" />
              </Suspense>
              <Suspense
                fallback={
                  <p className="p-3 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-700">
                    세 번째 컴포넌트 로딩 중... (fallback)
                  </p>
                }
              >
                <SlowComponent delay={500} name="컴포넌트 C" />
              </Suspense>
            </CardContent>
          </Card>
          <p className="text-xs text-muted-foreground mt-3">
            <strong>참고:</strong> Suspense의 fallback은 즉시 렌더링되어야
            하므로, fallback 자체는 매우 가벼워야 합니다.
          </p>
        </section>
      </CardContent>
    </Card>
  );
}
