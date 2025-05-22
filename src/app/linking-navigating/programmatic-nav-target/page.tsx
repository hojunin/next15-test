"use client";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProgrammaticNavTargetPage() {
  const searchParams = useSearchParams();
  const replaced = searchParams.get("replaced");

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">
          Programmatic Navigation Target 페이지
        </CardTitle>
        <CardDescription>
          이 페이지는 <code>useRouter</code> 훅을 사용한 프로그래매틱
          네비게이션(<code>router.push</code> 또는 <code>router.replace</code>
          )의 대상입니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {replaced && (
          <p className="p-3 bg-sky-100 border border-sky-300 rounded-md">
            이 페이지는 &apos;router.replace&apos;를 통해 네비게이션 되었으며,
            쿼리 파라미터 (replaced=true)가 전달되었습니다.
          </p>
        )}
        {!replaced && (
          <p className="p-3 bg-gray-100 border border-gray-300 rounded-md">
            이 페이지는 &apos;router.push&apos; 또는 직접 URL 접근을 통해
            네비게이션 되었습니다.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
