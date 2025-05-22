"use client";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LinkTargetPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const replaced = searchParams.get("replaced");

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">Link Target 페이지</CardTitle>
        <CardDescription>
          이 페이지는 <code>/linking-navigating/link-target</code> 경로에 대한
          콘텐츠입니다. &lt;Link&gt; 컴포넌트의 다양한 옵션을 테스트하기 위한
          목적지 페이지입니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {query && (
          <p className="p-3 bg-blue-100 border border-blue-300 rounded-md">
            전달된 쿼리 파라미터 (query): <strong>{query}</strong>
          </p>
        )}
        {replaced && (
          <p className="p-3 bg-green-100 border border-green-300 rounded-md">
            이 페이지는 &apos;replace&apos; 옵션으로 네비게이션 되었습니다.
          </p>
        )}
        <div>
          <h4 className="font-semibold">해시 Fragment 테스트</h4>
          <p className="text-sm text-muted-foreground mb-2">
            페이지 URL에 <code>#section-id</code>가 포함된 링크로 접근 시 이
            섹션으로 스크롤됩니다.
          </p>
          <div
            id="section-id"
            className="mt-80 h-48 bg-muted p-4 rounded-md flex items-center justify-center"
          >
            <p className="text-lg font-semibold">여기가 section-id 입니다.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
