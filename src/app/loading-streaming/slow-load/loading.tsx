export default function Loading() {
  // 이 UI는 /loading-streaming/slow-load 세그먼트의 콘텐츠가 로드되는 동안 표시됩니다.
  return (
    <div style={{ padding: "1rem", border: "1px dashed navy" }}>
      <p>
        데이터를 불러오는 중입니다... 조금만 기다려주세요! (from
        /slow-load/loading.tsx)
      </p>
      <p>
        이것은 <code>loading.tsx</code> 파일에 의해 렌더링된 UI입니다.
      </p>
    </div>
  );
}
