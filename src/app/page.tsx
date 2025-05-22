// import Image from "next/image"; // NOTE: 주석 처리하여 사용하지 않는 import 제거
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const menuItems = [
  { href: "/layouts-templates", label: "Layouts & Templates" },
  { href: "/linking-navigating", label: "Linking & Navigating" },
  { href: "/error-handling", label: "Error Handling" },
  { href: "/loading-streaming", label: "Loading UI & Streaming" },
  { href: "/redirecting", label: "Redirecting" },
  { href: "/route-groups", label: "Route Groups" },
  { href: "/dynamic-routes", label: "Dynamic Routes" },
  { href: "/parallel-routes", label: "Parallel Routes" },
  { href: "/intercepting-routes", label: "Intercepting Routes" },
  { href: "/route-handlers", label: "Route Handlers" },
  { href: "/middleware-test", label: "Middleware" },
  { href: "/internationalization", label: "Internationalization" },
];

export default function HomePage() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Next.js 라우팅 기능 테스트</CardTitle>
        <CardDescription>
          이 애플리케이션은 Next.js의 다양한 라우팅 기능을 테스트하기 위해
          제작되었습니다. 상단 네비게이션 메뉴 또는 아래 링크를 통해 각 기능별
          테스트 페이지로 이동할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
