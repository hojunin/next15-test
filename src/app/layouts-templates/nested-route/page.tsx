import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NestedRoutePage() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">중첩 라우트 페이지</CardTitle>
        <CardDescription>
          이 페이지는 <code>/layouts-templates/nested-route</code> 경로에 대한
          콘텐츠입니다. 부모 레이아웃(<code>layouts-templates/layout.tsx</code>
          )과 이 경로에 특화된 중첩 레이아웃(
          <code>layouts-templates/nested-route/layout.tsx</code>)이 모두
          적용됩니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-2">
          중첩 레이아웃은 특정 경로 그룹에만 적용되는 UI를 구성할 때 유용합니다.
        </p>
        <p>
          개발자 도구의 Elements 탭에서 DOM 구조를 확인하여 레이아웃들이 어떻게
          중첩되어 있는지 살펴보세요.
        </p>
      </CardContent>
    </Card>
  );
}
