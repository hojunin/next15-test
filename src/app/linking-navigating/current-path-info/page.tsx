"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchParamsDisplay } from "./search-params-display";

// export const dynamic = 'force-dynamic'; // Suspense 사용 시 이 옵션은 필요 없을 수 있음

export default function CurrentPathInfoPage() {
  const pathname = usePathname();

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">
          현재 경로 및 검색 파라미터 정보
        </CardTitle>
        <CardDescription>
          <code>usePathname</code> 훅과 <code>useSearchParams</code> 훅을
          사용하여 현재 URL의 경로와 검색 파라미터(쿼리 스트링) 정보를
          가져옵니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold">현재 경로 (Pathname):</h4>
          <p className="p-2 bg-gray-100 rounded-md font-mono text-sm">
            {pathname}
          </p>
        </div>
        <React.Suspense fallback={<div>검색 파라미터 로딩 중...</div>}>
          <SearchParamsDisplay />
        </React.Suspense>
      </CardContent>
    </Card>
  );
}
