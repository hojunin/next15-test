"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TriggerRedirectHookPage() {
  const router = useRouter();

  useEffect(() => {
    // 특정 조건 하에 리다이렉트 할 수 있습니다.
    // 여기서는 컴포넌트 마운트 시 바로 리다이렉트합니다.
    router.push("/redirecting/new-path");
  }, [router]);

  return (
    <div>
      <h3>리다이렉션 트리거 페이지 (useRouter)</h3>
      <p>잠시 후 /redirecting/new-path 로 리다이렉션됩니다...</p>
    </div>
  );
}
