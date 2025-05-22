"use client"; // 상태를 가지는 컴포넌트를 위해 client component로 만듭니다.
import { useState } from "react";

export default function WithTemplatePage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>Template 사용 페이지</h4>
      <p>
        이 페이지는 <code>/layouts-templates/with-template</code> 경로에 대한
        콘텐츠입니다.
      </p>
      <p>
        아래 버튼을 클릭해도 템플릿은 상태를 유지하지 않지만, 이 페이지의 상태는
        유지됩니다 (템플릿이 다시 마운트되더라도).
      </p>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <p>
        다른 페이지로 이동했다가 다시 돌아오면 Template의 useEffect가 다시
        실행되는 것을 콘솔에서 확인할 수 있습니다.
      </p>
    </div>
  );
}
