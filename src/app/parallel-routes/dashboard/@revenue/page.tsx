import {
  Card,
  CardContent,
  // CardDescription,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";

async function getRevenueData() {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // 데이터 로딩 시뮬레이션
  return { amount: 1250000, currency: "KRW" };
}

export default async function RevenuePage() {
  const data = await getRevenueData();
  return (
    <Card className="border-none shadow-none">
      {/* <CardHeader>
        <CardTitle className="text-base">수익 현황</CardTitle>
      </CardHeader> */}
      <CardContent className="pt-0 space-y-1">
        <p className="text-sm">
          <strong>이번 달 수익:</strong> {data.amount.toLocaleString()}{" "}
          {data.currency}
        </p>
        <p className="text-xs text-muted-foreground pt-2">
          (<code>@revenue/page.tsx</code> 에서 제공, 1.5초 딜레이)
        </p>
      </CardContent>
    </Card>
  );
}
