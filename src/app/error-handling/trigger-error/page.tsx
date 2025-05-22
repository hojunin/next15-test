"use client"; // 에러 발생 및 인터랙션을 위해 클라이언트 컴포넌트로
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TriggerErrorPage() {
  const [shouldThrow, setShouldThrow] = useState(false);

  useEffect(() => {
    if (shouldThrow) {
      throw new Error(
        "사용자에 의해 의도적으로 발생된 에러입니다! (TriggerErrorPage)"
      );
    }
  }, [shouldThrow]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">클라이언트 에러 발생 테스트</CardTitle>
        <CardDescription>
          이 페이지는 클라이언트 측에서 의도적으로 에러를 발생시켜 Next.js의{" "}
          <code>error.tsx</code> 파일이 어떻게 동작하는지 테스트합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <p className="text-center">
          아래 버튼을 클릭하면 에러가 발생하며, 정의된 <code>error.tsx</code>{" "}
          컴포넌트 (이 경우 <code>src/app/error-handling/error.tsx</code> 또는
          루트
          <code>src/app/error.tsx</code>)가 대신 렌더링됩니다.
        </p>
        <Button onClick={() => setShouldThrow(true)} variant="destructive">
          에러 발생시키기
        </Button>
      </CardContent>
    </Card>
  );
}
