"use client"; // notFound()는 클라이언트 또는 서버 컴포넌트에서 모두 사용 가능하나, 버튼 등과 연동 시 client가 편리

import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { useEffect } from "react"; // NOTE: 미사용으로 주석 처리

export default function TriggerNestedNotFoundPage() {
  // 이 페이지는 특정 조건에 따라 notFound()를 호출하도록 설정할 수 있습니다.
  // 여기서는 버튼 클릭 시 또는 즉시 notFound()를 호출하도록 합니다.
  // 사용자에게 명확한 안내를 위해 즉시 호출보다는 버튼을 통한 호출이 교육적일 수 있습니다.

  const triggerNotFound = () => {
    notFound();
  };

  // 페이지 로드 시 바로 notFound를 트리거하려면 아래 useEffect를 사용
  /*
  useEffect(() => {
    notFound();
  }, []);
  */

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">중첩 라우트 Not Found 테스트</CardTitle>
        <CardDescription>
          이 페이지는 중첩된 라우트에서 <code>notFound()</code> 함수를 호출하여
          가장 가까운 <code>not-found.tsx</code> (이 경우,{" "}
          <code>src/app/error-handling/nested-not-found/not-found.tsx</code>)가
          어떻게 동작하는지 테스트합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <p className="text-center">
          아래 버튼을 클릭하면 <code>notFound()</code> 함수가 호출되어 Not Found
          UI가 렌더링됩니다.
        </p>
        <Button onClick={triggerNotFound} variant="destructive">
          Not Found 발생시키기
        </Button>
      </CardContent>
    </Card>
  );
}
