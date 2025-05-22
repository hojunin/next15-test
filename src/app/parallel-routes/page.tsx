import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ParallelRoutesMainPage() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Parallel Routes 테스트</CardTitle>
        <CardDescription>
          Parallel Routes를 사용하면 동일한 레이아웃 내에서 하나 이상의 페이지를
          동시에 렌더링할 수 있습니다. 폴더명 앞에 <code>@</code> 기호를 붙여
          슬롯(slot)을 정의하여 구현합니다 (예: <code>@user</code>,{" "}
          <code>@revenue</code>).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <h4 className="text-lg font-semibold mb-2">개념 설명</h4>
          <p className="text-sm text-muted-foreground">
            이 기능은 대시보드와 같이 여러 독립적인 섹션을 가진 UI에 유용합니다.
            이 데모에서는 <code>/parallel-routes/dashboard</code> 경로에
            접근했을 때, <code>@user</code> 슬롯과 <code>@revenue</code> 슬롯에
            해당하는 콘텐츠가 함께 표시되도록 설정합니다. 각 슬롯에 대한{" "}
            <code>default.tsx</code> 파일을 만들어, 매칭되지 않는 경우의 폴백
            UI도 제공합니다.
          </p>
        </section>

        <hr />

        <section>
          <h4 className="text-lg font-semibold mb-2">테스트 링크</h4>
          <div className="space-y-3 flex flex-col items-start">
            <Button asChild>
              <Link href="/parallel-routes/dashboard">
                대시보드 기본 (User & Revenue 동시 로드)
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/parallel-routes/dashboard/settings">
                대시보드 설정 (User: settings, Revenue: default)
              </Link>
            </Button>
          </div>
        </section>

        <hr />

        <section>
          <h4 className="text-lg font-semibold mb-2">중요 참고사항</h4>
          <p className="text-sm text-muted-foreground">
            Parallel Routes는 현재 레이아웃의 <code>children</code> prop에 직접
            전달되지 않고, 레이아웃 파일(예:{" "}
            <code>src/app/parallel-routes/dashboard/layout.tsx</code>)에서 각
            슬롯을 props로 받아 명시적으로 렌더링해야 합니다.
          </p>
        </section>
      </CardContent>
    </Card>
  );
}
