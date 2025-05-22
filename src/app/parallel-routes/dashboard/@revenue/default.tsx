import {
  Card,
  CardContent,
  // CardDescription,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";

export default function DefaultRevenuePage() {
  return (
    <Card className="border-dashed border-muted-foreground/50 bg-muted/20">
      {/* <CardHeader>
        <CardTitle className="text-base text-muted-foreground">수익 정보 (Default)</CardTitle>
      </CardHeader> */}
      <CardContent className="pt-4">
        <p className="text-sm text-muted-foreground">
          수익 정보를 불러올 수 없거나, 현재 경로에 맞는 수익 UI가 없습니다.
        </p>
        <p className="text-xs text-muted-foreground/70 pt-2">
          (<code>@revenue/default.tsx</code> 에서 제공)
        </p>
      </CardContent>
    </Card>
  );
}
