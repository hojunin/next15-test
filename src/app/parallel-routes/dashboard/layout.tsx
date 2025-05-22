import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardLayout({
  children, // page.tsx에 해당
  user, // @user 폴더에 해당
  revenue, // @revenue 폴더에 해당
}: // TODO: 향후 @notifications와 같은 다른 슬롯 추가 가능성 고려
{
  children: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
}) {
  const isLoggedIn = true; // 예시: 로그인 상태 (실제 앱에서는 인증 상태에 따라 동적으로 설정)

  return (
    <section className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>대시보드 레이아웃</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            이 레이아웃은 여러 병렬 라우트 슬롯 (<code>@user</code>,{" "}
            <code>@revenue</code>)과 기본 <code>children</code> (페이지
            콘텐츠)을 보여줍니다.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">메인 콘텐츠 (children)</CardTitle>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>

        {isLoggedIn ? (
          <>
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">사용자 정보 (@user)</CardTitle>
              </CardHeader>
              <CardContent>{user}</CardContent>
            </Card>

            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">수익 정보 (@revenue)</CardTitle>
              </CardHeader>
              <CardContent>{revenue}</CardContent>
            </Card>
          </>
        ) : (
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>로그인 필요</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                대시보드의 사용자 및 수익 정보를 보려면 로그인이 필요합니다.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
