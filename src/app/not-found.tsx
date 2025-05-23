import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>페이지를 찾을 수 없습니다 (루트 not-found.tsx)</h2>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
