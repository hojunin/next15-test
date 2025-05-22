import Link from "next/link";

export default function NestedNotFound() {
  return (
    <div
      style={{
        border: "2px solid orange",
        padding: "1rem",
        margin: "1rem",
        textAlign: "center",
      }}
    >
      <h2>페이지를 찾을 수 없습니다 (in /error-handling/nested-not-found)</h2>
      <p>
        요청하신 페이지 (<code>/error-handling/nested-not-found/*</code>) 가
        존재하지 않습니다.
      </p>
      <Link href="/error-handling">Error Handling 홈으로</Link>
      <br />
      <Link href="/">애플리케이션 홈으로</Link>
    </div>
  );
}
