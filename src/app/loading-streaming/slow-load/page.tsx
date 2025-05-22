// 이 컴포넌트는 의도적으로 느리게 응답합니다.
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 딜레이
  return { message: "드디어 로드된 데이터입니다! (slow-load page)" };
}

export default async function SlowLoadPage() {
  const data = await getData();

  return (
    <div>
      <h3>느리게 로드된 페이지</h3>
      <p>{data.message}</p>
      <p>
        이 페이지가 보이기 전에 <code>loading.tsx</code> 파일의 UI가 표시되었을
        것입니다.
      </p>
    </div>
  );
}
