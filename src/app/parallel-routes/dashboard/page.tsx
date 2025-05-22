import {
  Card,
  CardContent,
  // CardDescription, // NOTE: 미사용
  // CardHeader, // NOTE: 미사용
  // CardTitle, // NOTE: 미사용
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    // 이 내용은 DashboardLayout의 children으로 들어감
    // 별도의 Card로 감싸도 되지만, layout에서 이미 Card로 감싸고 있으므로 내부 컨텐츠만 제공
    // 여기서는 명시적으로 Card 구조를 한 번 더 사용하여 내용을 구분합니다.
    <Card className="border-none shadow-none">
      {/* <CardHeader> // 레이아웃 Card에서 이미 타이틀 제공
        <CardTitle className="text-base">대시보드 개요</CardTitle>
      </CardHeader> */}
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground">
          이것은 대시보드의 기본 콘텐츠입니다. (<code>children</code> prop으로
          전달됨)
        </p>
        {/* 여기에 실제 대시보드 개요 내용 추가 가능 */}
      </CardContent>
    </Card>
  );
}
