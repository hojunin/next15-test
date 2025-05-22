"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchParamsContent } from "./search-params-content";

export default function ProgrammaticNavTargetPage() {
  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">
          Programmatic Navigation Target 페이지
        </CardTitle>
        <CardDescription>
          이 페이지는 <code>useRouter</code> 훅을 사용한 프로그래매틱
          네비게이션(<code>router.push</code> 또는 <code>router.replace</code>
          )의 대상입니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <React.Suspense fallback={<div>검색 파라미터 로딩 중...</div>}>
          <SearchParamsContent />
        </React.Suspense>
      </CardContent>
    </Card>
  );
}
