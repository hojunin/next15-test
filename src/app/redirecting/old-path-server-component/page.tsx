import { redirect } from "next/navigation";

export default function OldPathServerComponentPage() {
  // 특정 조건에 따라 redirect를 호출할 수 있습니다.
  // 여기서는 페이지 접근 시 바로 리다이렉션합니다.
  redirect("/redirecting/new-path");

  // redirect 이후의 코드는 실행되지 않으므로, 아래 내용은 보이지 않습니다.
  return (
    <div>
      <h1>Old Path (Server Component)</h1>
      <p>이 내용은 보이지 않아야 합니다.</p>
    </div>
  );
}
