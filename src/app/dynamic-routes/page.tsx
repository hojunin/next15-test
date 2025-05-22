import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  // CardFooter, // NOTE: 사용하지 않으므로 주석 처리 또는 삭제
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DynamicRoutesPage() {
  const posts = [
    { id: "hello-world", title: "Hello World" },
    { id: "another-post", title: "Another Post" },
    { id: "dynamic-routing-example", title: "Dynamic Routing Example" },
  ];

  // const products = [ // NOTE: 사용하지 않는 변수 주석 처리
  //   { category: "electronics", id: "laptop" },
  //   { category: "books", id: "nextjs-handbook" },
  //   { category: "electronics", id: "monitor" },
  // ];

  const dynamicRouteSections = [
    {
      title: "1. 기본 동적 라우트 ([slug])",
      description:
        "가장 일반적인 동적 라우트입니다. `[folderName]` 형태로 사용됩니다.",
      links: posts.map((post) => ({
        href: `/dynamic-routes/blog/${post.id}`,
        text: post.title,
      })),
      filePath: "src/app/dynamic-routes/blog/[slug]/page.tsx",
      notes:
        "`generateStaticParams`를 사용하면 빌드 시점에 이 경로들을 미리 생성할 수 있습니다.",
    },
    {
      title: "2. Catch-all 세그먼트 ([...slug])",
      description:
        "여러 깊이의 경로를 하나의 파일로 처리합니다. `[...folderName]` 형태로 사용됩니다.",
      links: [
        {
          href: "/dynamic-routes/docs/getting-started/installation",
          text: "/docs/getting-started/installation",
        },
        {
          href: "/dynamic-routes/docs/api/components/link",
          text: "/docs/api/components/link",
        },
        {
          href: "/dynamic-routes/docs/configuration",
          text: "/docs/configuration",
        },
      ],
      filePath: "src/app/dynamic-routes/docs/[...slug]/page.tsx",
    },
    {
      title: "3. Optional Catch-all 세그먼트 ([[...slug]])",
      description:
        "Catch-all과 유사하지만, 경로가 없는 경우(루트)도 처리합니다. `[[...folderName]]` 형태로 사용됩니다.",
      links: [
        { href: "/dynamic-routes/shop", text: "/shop (기본 페이지)" },
        {
          href: "/dynamic-routes/shop/electronics",
          text: "/shop/electronics (카테고리)",
        },
        {
          href: "/dynamic-routes/shop/electronics/laptop",
          text: "/shop/electronics/laptop (상품)",
        },
      ],
      filePath: "src/app/dynamic-routes/shop/[[...slug]]/page.tsx",
      notes: "`/shop`으로 접근 시에도 이 페이지가 매칭됩니다.",
    },
    {
      title: "4. 여러 동적 세그먼트 결합",
      description: "하나의 경로에 여러 동적 세그먼트를 사용할 수 있습니다.",
      links: [
        {
          href: "/dynamic-routes/users/user123/posts/abc",
          text: "/users/user123/posts/abc",
        },
      ],
      filePath: "src/app/dynamic-routes/users/[userId]/posts/[postId]/page.tsx",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Dynamic Routes 테스트</CardTitle>
          <CardDescription>
            동적 세그먼트를 사용하여 페이지 경로를 동적으로 생성하는 다양한
            방법을 테스트합니다.
          </CardDescription>
        </CardHeader>
      </Card>

      {dynamicRouteSections.map((section, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-xl">{section.title}</CardTitle>
            <CardDescription>{section.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm font-semibold">예시 링크:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={link.href}>{link.text}</Link>
                  </Button>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground pt-2">
              관련 파일: <code>{section.filePath}</code>
            </p>
            {section.notes && (
              <p className="text-xs text-muted-foreground italic">
                참고: {section.notes}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
