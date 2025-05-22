"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CurrentPathInfoPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const name = searchParams.get("name"); // NOTE: 직접 사용하지 않고, 아래에서 전체 파라미터 표시
  // const age = searchParams.get("age");

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
        <div>
          <h4 className="font-semibold">검색 파라미터 (Search Params):</h4>
          {searchParams.toString() ? (
            <ul className="list-disc list-inside pl-4 space-y-1 bg-gray-100 p-3 rounded-md">
              {Array.from(searchParams.entries()).map(([key, value]) => (
                <li key={key} className="font-mono text-sm">
                  <span className="font-semibold">{key}</span>: {value}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground italic">
              검색 파라미터가 없습니다.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
