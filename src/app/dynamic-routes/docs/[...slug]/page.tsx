export default function DocsPage({ params }: { params: { slug: string[] } }) {
  // params.slug는 문자열 배열입니다. 예: ['getting-started', 'installation']
  const pathSegments = params.slug || []; // 만약 slug가 undefined일 경우 (예: /docs 만 접근)

  return (
    <div>
      <h2>문서 페이지</h2>
      <p>요청된 문서 경로:</p>
      <ul>
        {pathSegments.map((segment, index) => (
          <li key={index}>{segment}</li>
        ))}
      </ul>
      {pathSegments.length === 0 && <p>문서 홈입니다. (예: /docs)</p>}
      <pre
        style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}
      >
        params.slug: {JSON.stringify(params.slug)}
      </pre>
    </div>
  );
}
