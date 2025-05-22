import {
  Card,
  CardContent,
  // CardDescription,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";

export default function UserSettingsPage() {
  return (
    <Card className="border-none shadow-none">
      {/* <CardHeader>
        <CardTitle className="text-base">사용자 설정</CardTitle>
      </CardHeader> */}
      <CardContent className="pt-0 space-y-1">
        <p className="text-sm">계정 설정, 알림 설정 등을 여기서 관리합니다.</p>
        <p className="text-xs text-muted-foreground pt-2">
          (<code>@user/settings/page.tsx</code> 에서 제공)
        </p>
        {/* TODO: 실제 설정 폼 요소들 추가 */}
      </CardContent>
    </Card>
  );
}
