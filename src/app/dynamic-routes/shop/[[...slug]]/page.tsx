export default function ShopPage({ params }: { params: { slug?: string[] } }) {
  // params.slug는 문자열 배열이거나 undefined일 수 있습니다.
  const pathSegments = params.slug || [];

  return (
    <div>
      <h2>쇼핑몰 페이지</h2>
      <p>요청된 쇼핑몰 경로:</p>
      {pathSegments.length > 0 ? (
        <ul>
          {pathSegments.map((segment, index) => (
            <li key={index}>{segment}</li>
          ))}
        </ul>
      ) : (
        <p>쇼핑몰 홈입니다. (예: /shop)</p>
      )}
      <pre
        style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}
      >
        params.slug: {JSON.stringify(params.slug)}
      </pre>
    </div>
  );
}
