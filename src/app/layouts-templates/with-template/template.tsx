"use client"; // Template은 client component일 수 있습니다.
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // NOTE: 템플릿은 네비게이션 시 다시 마운트됩니다.
    // 이를 확인하기 위해 콘솔에 로그를 출력합니다.
    console.log(
      "Template mounted/remounted for /layouts-templates/with-template"
    );
  }, []);

  return (
    <div
      style={{ border: "1px solid green", padding: "1rem", margin: "1rem 0" }}
    >
      <p>
        이것은 Template입니다. 네비게이션 시 상태를 유지하지 않고 다시
        렌더링됩니다.
      </p>
      {children}
    </div>
  );
}
