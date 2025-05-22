export default function GroupBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ border: "2px solid teal", padding: "1rem", margin: "1rem 0" }}
    >
      <h4>Layout for (groupB) within /route-groups</h4>
      <p>
        이 레이아웃은 <code>/route-groups</code> 경로 하위의 (groupB) 라우트
        그룹 페이지들에만 적용됩니다.
      </p>
      {children}
    </div>
  );
}
