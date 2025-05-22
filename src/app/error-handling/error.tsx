"use client"; // Error_Error Boundaries_는 반드시 Client Components 여야 합니다.

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorHandlingErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러를 로깅 서비스에 기록할 수 있습니다.
    console.error(
      "Error Boundary (error-handling/error.tsx) caught an error:",
      error
    );
  }, [error]);

  return (
    <div style={{ border: "2px solid red", padding: "1rem", margin: "1rem" }}>
      <h2>이런! 문제가 발생했습니다. (in /error-handling)</h2>
      <p>에러 메시지: {error.message}</p>
      {error.digest && <p>Digest: {error.digest}</p>}
      <button
        onClick={
          // 세그먼트를 다시 렌더링하여 복구를 시도합니다.
          () => reset()
        }
      >
        다시 시도
      </button>
      <p>
        또는 <Link href="/">홈으로 돌아가기</Link>
      </p>
    </div>
  );
}
