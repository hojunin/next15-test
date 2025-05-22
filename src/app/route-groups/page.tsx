import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RouteGroupsPage() {
  const groupLinks = [
    {
      href: "/route-groups/page-in-group-a",
      text: "그룹 A 페이지 1",
      description: "(groupA) 레이아웃이 적용됩니다.",
    },
    {
      href: "/route-groups/another-page-in-group-a",
      text: "그룹 A 페이지 2",
      description: "(groupA) 레이아웃이 적용됩니다.",
    },
    {
      href: "/route-groups/page-in-group-b",
      text: "그룹 B 페이지 1",
      description: "(groupB) 레이아웃이 적용됩니다.",
    },
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Route Groups 테스트</CardTitle>
        <CardDescription>
          Route Groups는 URL 경로에 영향을 주지 않고 라우트를 구성하거나 특정
          레이아웃으로 라우트를 분할하는 기능입니다. 폴더 이름을 괄호로 묶어
          생성합니다 (예: <code>(groupA)</code>, <code>(groupB)</code>).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">
          이 데모에서는 <code>/route-groups</code> 경로 아래에 두 개의 라우트
          그룹 <code>(groupA)</code>와 <code>(groupB)</code>를 생성하고, 각 그룹
          내의 페이지에 특화된 레이아웃을 적용합니다. 라우트 그룹명 자체는 URL에
          나타나지 않습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groupLinks.map((linkInfo, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{linkInfo.text}</CardTitle>
                <CardDescription>{linkInfo.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className="w-full">
                  <Link href={linkInfo.href}>페이지로 이동</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="pt-4">
          <h4 className="font-semibold text-md mb-1">구조 설명:</h4>
          <p className="text-xs text-muted-foreground">
            예를 들어,{" "}
            <code>src/app/route-groups/(groupA)/page-in-group-a/page.tsx</code>
            는 URL <code>/route-groups/page-in-group-a</code>에 해당하며,
            <code>src/app/route-groups/(groupA)/layout.tsx</code>의 영향을
            받습니다. 또한, 상위 레이아웃들 (<code>src/app/layout.tsx</code>,{" "}
            <code>src/app/route-groups/layout.tsx</code> 등)의 영향도 함께
            받습니다.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
