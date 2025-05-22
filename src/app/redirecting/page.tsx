import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RedirectingPage() {
  const redirectTests = [
    {
      href: "/redirecting/old-path-server-component",
      text: "서버 컴포넌트: redirect() (→ /new-path)",
      description:
        "redirect() 함수를 사용하여 서버 컴포넌트 내에서 리다이렉션합니다.",
    },
    {
      href: "/redirecting/permanent-old-path-server-component",
      text: "서버 컴포넌트: permanentRedirect() (→ /new-path)",
      description: "permanentRedirect() 함수를 사용하여 영구 리다이렉션합니다.",
    },
    {
      href: "/redirecting/trigger-redirect-hook",
      text: "클라이언트 컴포넌트: useRouter().push() (→ /new-path)",
      description:
        "useRouter 훅의 push 메서드를 사용하여 클라이언트에서 리다이렉션합니다.",
    },
    {
      href: "/config-redirect-source",
      text: "next.config.js 리다이렉션 (→ /config-redirect-destination)",
      description:
        "next.config.js 파일의 redirects 설정을 통해 리다이렉션합니다.",
    },
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Redirecting 테스트</CardTitle>
        <CardDescription>
          Next.js에서 제공하는 다양한 리다이렉션 방법을 테스트합니다. 각 링크를
          클릭하여 리다이렉션 동작을 확인하세요.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {redirectTests.map((test, index) => (
          <Card key={index} className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">{test.text}</CardTitle>
              <CardDescription>{test.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={test.href}>테스트 실행하기</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
        <div className="pt-4 text-center">
          <p className="text-sm text-muted-foreground">
            대부분의 리다이렉션은 최종적으로 아래 페이지로 이동합니다 (설정에
            따라 다름):
          </p>
          <Button variant="link" asChild className="text-base">
            <Link href="/redirecting/new-path">/redirecting/new-path</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
