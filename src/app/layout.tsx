import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Routing Test",
  description: "Testing various Next.js routing features",
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface NavItem {
  title: string;
  href: string;
  description?: string;
}

interface NavCategory {
  category: string;
  items: NavItem[];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categorizedMenuItems: NavCategory[] = [
    {
      category: "기본 라우팅",
      items: [
        {
          href: "/",
          title: "홈",
          description: "애플리케이션의 메인 페이지입니다.",
        },
        {
          href: "/layouts-templates",
          title: "Layouts & Templates",
          description: "페이지 레이아웃과 템플릿 기능을 테스트합니다.",
        },
        {
          href: "/linking-navigating",
          title: "Linking & Navigating",
          description:
            "<Link> 컴포넌트 및 프로그래밍 방식 네비게이션을 테스트합니다.",
        },
      ],
    },
    {
      category: "특수 페이지 처리",
      items: [
        {
          href: "/error-handling",
          title: "Error Handling",
          description: "에러 및 Not Found 페이지 처리 기능을 테스트합니다.",
        },
        {
          href: "/loading-streaming",
          title: "Loading UI & Streaming",
          description: "로딩 UI와 스트리밍 기능을 테스트합니다.",
        },
      ],
    },
    {
      category: "라우트 제어",
      items: [
        {
          href: "/redirecting",
          title: "Redirecting",
          description: "다양한 리다이렉션 방법을 테스트합니다.",
        },
        {
          href: "/route-groups",
          title: "Route Groups",
          description: "라우트 그룹 기능을 테스트합니다.",
        },
        {
          href: "/dynamic-routes",
          title: "Dynamic Routes",
          description: "동적 라우트 기능을 테스트합니다.",
        },
      ],
    },
    {
      category: "고급 라우팅",
      items: [
        {
          href: "/parallel-routes",
          title: "Parallel Routes",
          description: "병렬 라우트 기능을 테스트합니다.",
        },
        {
          href: "/intercepting-routes",
          title: "Intercepting Routes",
          description: "인터셉트 라우트 기능을 테스트합니다.",
        },
      ],
    },
    {
      category: "API 및 미들웨어",
      items: [
        {
          href: "/route-handlers",
          title: "Route Handlers",
          description: "API 라우트 핸들러를 테스트합니다.",
        },
        {
          href: "/middleware-test",
          title: "Middleware",
          description: "미들웨어 기능을 테스트합니다.",
        },
      ],
    },
    {
      category: "국제화",
      items: [
        {
          href: "/internationalization",
          title: "Internationalization",
          description: "i18n 라우팅 및 콘텐츠 제공을 테스트합니다.",
        },
      ],
    },
  ];

  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        홈
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {categorizedMenuItems.map((category) => (
                    <NavigationMenuItem key={category.category}>
                      <NavigationMenuTrigger>
                        {category.category}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {category.items.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </header>
          <main className="container py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
