"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TriggerNestedErrorPage() {
  const [shouldThrow, setShouldThrow] = useState(false);

  useEffect(() => {
    if (shouldThrow) {
      throw new Error(
        "중첩된 라우트에서 발생한 에러입니다! (nested-error/trigger-nested-error)"
      );
    }
  }, [shouldThrow]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">중첩 라우트 에러 발생 테스트</CardTitle>
        <CardDescription>
          이 페이지 (
          <code>/error-handling/nested-error/trigger-nested-error</code>)는
          중첩된 라우트 세그먼트 내에서 에러를 발생시켜 가장 가까운{" "}
          <code>error.tsx</code> (이 경우,{" "}
          <code>src/app/error-handling/nested-error/error.tsx</code>)가 어떻게
          동작하는지 테스트합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <p className="text-center">
          아래 버튼을 클릭하면 중첩된 에러가 발생합니다.
        </p>
        <Button onClick={() => setShouldThrow(true)} variant="destructive">
          중첩 에러 발생시키기
        </Button>
      </CardContent>
    </Card>
  );
}
