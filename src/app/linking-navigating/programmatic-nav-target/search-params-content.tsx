"use client";
import { useSearchParams } from "next/navigation";

export function SearchParamsContent() {
  const searchParams = useSearchParams();
  const replaced = searchParams.get("replaced");

  return (
    <>
      {replaced && (
        <p className="p-3 bg-sky-100 border border-sky-300 rounded-md">
          이 페이지는 &apos;router.replace&apos;를 통해 네비게이션 되었으며,
          쿼리 파라미터 (replaced=true)가 전달되었습니다.
        </p>
      )}
      {!replaced && (
        <p className="p-3 bg-gray-100 border border-gray-300 rounded-md">
          이 페이지는 &apos;router.push&apos; 또는 직접 URL 접근을 통해
          네비게이션 되었습니다.
        </p>
      )}
    </>
  );
}
