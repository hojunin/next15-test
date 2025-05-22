import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// 'use client'를 사용하지 않으면 서버 컴포넌트가 되어,
// next-intl과 같은 라이브러리의 훅을 직접 사용하기 어려울 수 있습니다.
// 여기서는 간단히 링크만 제공하고, 실제 번역은 각 로케일 페이지에서 처리합니다.

export default function InternationalizationPage() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">
          Internationalization (i18n) 테스트
        </CardTitle>
        <CardDescription>
          경로 프리픽스 (<code>/en</code>, <code>/ko</code>)를 사용한 국제화
          기능을 테스트합니다. Middleware에서 로케일을 감지하여 적절한 콘텐츠를
          제공합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <h4 className="text-lg font-semibold mb-2">
            지원되는 언어 및 테스트 페이지
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            아래 링크를 클릭하여 각 언어별 페이지로 이동할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <Button asChild>
              <Link href="/en/internationalization/greeting">
                영어 (English)
              </Link>
            </Button>
            <Button asChild>
              <Link href="/ko/internationalization/greeting">
                한국어 (Korean)
              </Link>
            </Button>
          </div>
        </section>

        <hr />

        <section>
          <h4 className="text-lg font-semibold mb-2">
            로케일 자동 감지 테스트
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            브라우저의 기본 언어 설정에 따라 <code>middleware.ts</code>가
            자동으로 적절한 로케일로 리다이렉션할 수 있습니다. 아래 링크로 직접
            접근해보세요.
          </p>
          <Button asChild variant="outline">
            <Link href="/internationalization/greeting">
              로케일 프리픽스 없이 접근 (/internationalization/greeting)
            </Link>
          </Button>
        </section>

        <hr />

        <section>
          <h4 className="text-lg font-semibold mb-2">참고 사항</h4>
          <p className="text-sm text-muted-foreground">
            이 데모는 App Router에서 경로 기반 i18n의 기본적인 아이디어만 구현한
            것입니다. 보다 완전한 i18n 솔루션은 <code>next-intl</code>과 같은
            라이브러리를 사용하는 것이 일반적입니다.
          </p>
        </section>
      </CardContent>
    </Card>
  );
}
