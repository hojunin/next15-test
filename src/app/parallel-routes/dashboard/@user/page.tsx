import {
  Card,
  CardContent,
  // CardDescription, // 레이아웃에서 타이틀 제공하므로 생략 가능
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";

export default function UserPage() {
  return (
    // 이 내용은 DashboardLayout의 user 슬롯으로 들어감
    // 레이아웃에서 이미 Card로 감싸고 있으므로, 여기서는 내용만 제공하거나
    // Card의 depth를 최소화 (border-none, shadow-none 등) 하는 것이 좋음
    <Card className="border-none shadow-none">
      {/* <CardHeader>
        <CardTitle className="text-base">사용자 기본 정보</CardTitle>
      </CardHeader> */}
      <CardContent className="pt-0 space-y-1">
        <p className="text-sm">
          <strong>이름:</strong> 홍길동
        </p>
        <p className="text-sm">
          <strong>이메일:</strong> gildong@example.com
        </p>
        <p className="text-xs text-muted-foreground pt-2">
          (<code>@user/page.tsx</code> 에서 제공)
        </p>
      </CardContent>
    </Card>
  );
}
