import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LayoutsTemplatesPage() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Layouts and Templates 테스트</CardTitle>
        <CardDescription>
          이 페이지는 <code>/layouts-templates</code> 경로에 대한 기본
          콘텐츠입니다. 관련된 레이아웃과 템플릿 파일들이 이 페이지와 하위
          경로에 적용됩니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold">테스트 항목:</h4>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>기본 레이아웃:</strong> 이 페이지와 하위 페이지들은
              <code>src/app/layouts-templates/layout.tsx</code> 파일에 정의된
              레이아웃의 영향을 받습니다.
            </li>
            <li>
              <strong>중첩 레이아웃:</strong>{" "}
              <Link
                href="/layouts-templates/nested"
                className="text-blue-600 hover:underline"
              >
                중첩된 레이아웃 페이지
              </Link>
              로 이동하여{" "}
              <code>src/app/layouts-templates/nested/layout.tsx</code>에 정의된
              중첩 레이아웃을 확인하세요.
            </li>
            <li>
              <strong>템플릿:</strong> 이 페이지와 하위 페이지들은 탐색 시마다
              <code>src/app/layouts-templates/template.tsx</code> 파일에 정의된
              템플릿이 다시 렌더링됩니다.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">확인 사항:</h4>
          <p>
            각 페이지 이동 시 개발자 도구의 Elements 탭에서 DOM 구조 변화를
            관찰하고, 콘솔에서 Template의 재마운트 로그를 확인하세요
            (template.tsx에 로그 추가 필요).
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
