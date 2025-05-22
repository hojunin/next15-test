import { permanentRedirect } from "next/navigation";

export default function PermanentOldPathServerComponentPage() {
  permanentRedirect("/redirecting/new-path");

  return (
    <div>
      <h1>Permanent Old Path (Server Component)</h1>
      <p>이 내용은 보이지 않아야 합니다.</p>
    </div>
  );
}
