import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ErrorHandlingPage() {
  const errorLinks = [
    {
      href: "/error-handling/client-error-trigger",
      text: "클라이언트 컴포넌트 에러 (error.tsx)",
    },
    {
      href: "/error-handling/server-error-trigger",
      text: "서버 컴포넌트 에러 (error.tsx)",
    },
    {
      href: "/error-handling/intentionally-non-existent-path",
      text: "존재하지 않는 페이지 (루트 not-found.tsx)",
    },
    {
      href: "/error-handling/nested-error/trigger-nested-error",
      text: "중첩 라우트 에러 (가까운 error.tsx)",
    },
    {
      href: "/error-handling/nested-not-found/not-found-trigger",
      text: "중첩 라우트 Not Found (가까운 not-found.tsx)",
    },
    // global-error.tsx는 RootLayout에서 직접 에러를 발생시켜야 테스트 가능
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Error Handling 테스트</CardTitle>
        <CardDescription>
          Next.js의 에러 처리 메커니즘(<code>error.tsx</code>,{" "}
          <code>not-found.tsx</code>, <code>global-error.tsx</code>)을
          테스트합니다. 아래 링크를 클릭하여 다양한 에러 상황을 시뮬레이션할 수
          있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 flex flex-col items-start">
          {errorLinks.map((link) => (
            <Button key={link.href} asChild variant="outline">
              <Link href={link.href}>{link.text}</Link>
            </Button>
          ))}
        </div>
        <div>
          <h4 className="font-semibold mt-6 mb-2">참고: global-error.tsx</h4>
          <p className="text-sm text-muted-foreground">
            <code>global-error.tsx</code>는 루트 <code>layout.tsx</code> 또는{" "}
            <code>template.tsx</code> 컴포넌트 자체에서 발생하는 에러를
            처리합니다. 이 데모 페이지에서는 직접적으로 해당 에러를 유발하기는
            어렵습니다. 테스트를 위해서는 <code>src/app/layout.tsx</code> 파일
            내에서 의도적으로 에러를 발생시켜야 합니다.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
