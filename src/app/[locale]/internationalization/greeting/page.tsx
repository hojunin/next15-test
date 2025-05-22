import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 가상의 번역 데이터 (실제로는 JSON 파일이나 CMS에서 가져옴)
const translations: Record<string, Record<string, string>> = {
  en: {
    title: "Internationalized Greeting Page",
    greeting: "Hello, World!",
    description:
      "This page demonstrates content localization based on the URL locale.",
    back_to_i18n_home: "Back to i18n Test Home",
  },
  ko: {
    title: "국제화된 인사 페이지",
    greeting: "안녕하세요, 세상아!",
    description: "이 페이지는 URL 로케일에 따라 현지화된 콘텐츠를 보여줍니다.",
    back_to_i18n_home: "i18n 테스트 홈으로 돌아가기",
  },
};

// generateStaticParams를 사용하여 지원하는 모든 로케일 경로를 미리 생성할 수 있습니다.
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ko" }];
}

export default function GreetingPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  // 현재 로케일이 지원되는지 확인, 아니면 기본값(예: 'en')으로 설정
  const currentLocale = translations[locale] ? locale : "en";
  const t = translations[currentLocale];

  if (!t) {
    // 이 경우는 발생하지 않아야 하지만, 안전장치
    return (
      <Card className="w-full max-w-md mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-red-600">Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Translations not found for locale &quot;{currentLocale}&quot;.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">{t.title}</CardTitle>
        <CardDescription>
          현재 로케일: {currentLocale.toUpperCase()}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-3xl font-semibold text-center py-4">{t.greeting}</p>
        <p className="text-muted-foreground text-center">{t.description}</p>
        <div className="pt-4 text-center">
          <Button asChild>
            <Link href={`/${currentLocale}/internationalization`}>
              {t.back_to_i18n_home}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
