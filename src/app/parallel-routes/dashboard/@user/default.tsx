import {
  Card,
  CardContent,
  // CardDescription,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";

export default function DefaultUserPage() {
  return (
    <Card className="border-dashed border-muted-foreground/50 bg-muted/20">
      {/* <CardHeader>
        <CardTitle className="text-base text-muted-foreground">사용자 정보 (Default)</CardTitle>
      </CardHeader> */}
      <CardContent className="pt-4">
        <p className="text-sm text-muted-foreground">
          사용자 정보를 불러올 수 없거나, 현재 경로에 맞는 사용자 UI가 없습니다.
        </p>
        <p className="text-xs text-muted-foreground/70 pt-2">
          (<code>@user/default.tsx</code> 에서 제공)
        </p>
      </CardContent>
    </Card>
  );
}
