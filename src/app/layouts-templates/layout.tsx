import Link from "next/link";

export default function LayoutsTemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Layouts and Templates 섹션</h2>
      <p>이 섹션의 모든 페이지는 이 레이아웃을 공유합니다.</p>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
          <li>
            <Link href="/layouts-templates">기본 페이지</Link>
          </li>
          <li>
            <Link href="/layouts-templates/nested-route">중첩 라우트</Link>
          </li>
          <li>
            <Link href="/layouts-templates/with-template">템플릿 사용</Link>
          </li>
        </ul>
      </nav>
      <div
        style={{
          border: "1px dashed blue",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        {children}
      </div>
    </section>
  );
}
