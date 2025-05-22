"use client";

import { useSearchParams } from "next/navigation";

export function SearchParamsDisplay() {
  const searchParams = useSearchParams();

  return (
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
  );
}
