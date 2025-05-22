"use client";
import { useSearchParams } from "next/navigation";

export function SearchParamsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const replaced = searchParams.get("replaced");

  return (
    <>
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
    </>
  );
}
