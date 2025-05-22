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
import { Input } from "@/components/ui/input";

export default function RouteHandlersPage() {
  const [getResponse, setGetResponse] = useState<string | null>(null);
  const [postResponse, setPostResponse] = useState<string | null>(null);
  const [dynamicResponse, setDynamicResponse] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  // GET 요청 테스트
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/hello");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setGetResponse(JSON.stringify(data, null, 2));
      } catch (error) {
        setGetResponse(
          `Error fetching /api/hello: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }
    };
    fetchData();
  }, []);

  // POST 요청 테스트
  const handlePostRequest = async () => {
    setPostResponse("Loading...");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue || "Default POST message" }),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setPostResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setPostResponse(
        `Error fetching /api/submit: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  // Dynamic Route Handler GET 요청 테스트
  const handleDynamicGetRequest = async () => {
    setDynamicResponse("Loading...");
    const dynamicId = "123"; // 예시 ID
    try {
      const res = await fetch(`/api/items/${dynamicId}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setDynamicResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setDynamicResponse(
        `Error fetching /api/items/${dynamicId}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Route Handlers 테스트</CardTitle>
        <CardDescription>
          Route Handlers (<code>app/.../route.ts</code>)를 사용하여 API
          엔드포인트를 만들고 테스트합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <section>
          <h4 className="text-lg font-semibold mb-2">
            1. 기본 GET 요청 (/api/hello)
          </h4>
          <p className="text-sm text-muted-foreground mb-1">
            페이지 로드 시 자동 실행됩니다.
          </p>
          <pre className="p-3 bg-muted rounded-md text-sm overflow-x-auto">
            {getResponse === null ? "Loading..." : getResponse}
          </pre>
        </section>

        <hr />

        <section>
          <h4 className="text-lg font-semibold mb-2">
            2. POST 요청 (/api/submit)
          </h4>
          <div className="flex w-full max-w-sm items-center space-x-2 mb-3">
            <Input
              type="text"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
              placeholder="전송할 메시지 (선택)"
            />
            <Button onClick={handlePostRequest}>POST 요청</Button>
          </div>
          <pre className="p-3 bg-muted rounded-md text-sm overflow-x-auto">
            {postResponse === null ? "결과 대기 중..." : postResponse}
          </pre>
        </section>

        <hr />

        <section>
          <h4 className="text-lg font-semibold mb-2">
            3. 동적 GET 요청 (/api/items/[id])
          </h4>
          <Button onClick={handleDynamicGetRequest} className="mb-3">
            /api/items/123 으로 GET 요청
          </Button>
          <pre className="p-3 bg-muted rounded-md text-sm overflow-x-auto">
            {dynamicResponse === null ? "결과 대기 중..." : dynamicResponse}
          </pre>
        </section>
      </CardContent>
    </Card>
  );
}
