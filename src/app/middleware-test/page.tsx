import { headers } from "next/headers";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function MiddlewareTestPage() {
  const headersList = headers();
  const customHeader = headersList.get("x-custom-header-from-middleware");
  const modifiedPath = headersList.get("x-modified-path");

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Middleware 테스트</CardTitle>
        <CardDescription>
          Middleware (<code>middleware.ts</code>)가 요청에 어떻게 영향을
          미치는지 테스트합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <h4 className="text-lg font-semibold mb-2">1. 헤더 변경 테스트</h4>
          <p className="text-sm text-muted-foreground mb-1">
            미들웨어에서 추가/수정한 요청 헤더 값을 확인합니다.
          </p>
          <div className="p-3 bg-muted rounded-md text-sm space-y-1">
            <p>
              <strong>x-custom-header-from-middleware:</strong>{" "}
              <span className="font-mono bg-background p-1 rounded">
                {customHeader || "헤더 없음 / 미설정"}
              </span>
            </p>
            <p>
              <strong>x-modified-path (i18n 테스트용):</strong>{" "}
              <span className="font-mono bg-background p-1 rounded">
                {modifiedPath || "헤더 없음 / 미설정"}
              </span>
            </p>
          </div>
        </section>

        <hr />

        <section>
          <h4 className="text-lg font-semibold mb-2">2. 리다이렉션 테스트</h4>
          <p className="text-sm text-muted-foreground mb-3">
            <code>/middleware-test/redirect-me</code> 경로로 접근하면 미들웨어에
            의해 <code>/middleware-test/redirected-destination</code>으로
            리다이렉션됩니다.
          </p>
          <Button asChild>
            <Link href="/middleware-test/redirect-me">
              리다이렉션 테스트 실행
            </Link>
          </Button>
        </section>
      </CardContent>
    </Card>
  );
}
