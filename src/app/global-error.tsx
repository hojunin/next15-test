"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div
          style={{
            border: "3px solid darkred",
            padding: "2rem",
            margin: "2rem",
            backgroundColor: "#ffebee",
          }}
        >
          <h2>전역 에러 발생! (global-error.tsx)</h2>
          <p>
            애플리케이션의 루트 레이아웃 또는 템플릿에서 처리되지 않은 심각한
            오류가 발생했습니다.
          </p>
          <p>에러 메시지: {error.message}</p>
          {error.digest && <p>Digest: {error.digest}</p>}
          <button onClick={() => reset()}>다시 시도</button>
          <p>문제가 지속되면 관리자에게 문의하세요.</p>
        </div>
      </body>
    </html>
  );
}
