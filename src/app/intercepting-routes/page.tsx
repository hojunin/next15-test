"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InterceptingRoutesPage() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Intercepting Routes 테스트</CardTitle>
        <CardDescription>
          Intercepting Routes는 현재 레이아웃 내에서 다른 라우트의 콘텐츠를
          보여줄 수 있게 해주는 기능입니다. 주로 모달이나 팝업을 구현할 때
          유용하며, URL을 통해 콘텐츠 공유도 가능하게 합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          아래 버튼을 클릭하여 사진 피드 예제로 이동하세요. 피드에서 사진을
          클릭하면 모달 형태로 사진 상세 정보가 나타납니다. (소프트 네비게이션)
        </p>
        <p>
          하지만 사진 상세 정보 URL로 직접 접속하거나 새로고침하면, 모달이 아닌
          별도의 페이지로 콘텐츠가 렌더링됩니다. (하드 네비게이션)
        </p>
        <div className="flex justify-center mt-6">
          <Button asChild>
            <Link href="/intercepting-routes/feed">사진 피드 보러가기</Link>
          </Button>
        </div>
        <h4 className="text-lg font-semibold pt-4">테스트 시나리오:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <strong>소프트 네비게이션 (모달):</strong> 사진 피드에서 사진 클릭
            &rarr; URL은 <code>/intercepting-routes/photos/[id]</code>로
            변경되지만, 피드 레이아웃 위로 모달 표시.
          </li>
          <li>
            <strong>하드 네비게이션 (전체 페이지):</strong> 브라우저 주소창에
            직접 <code>/intercepting-routes/photos/[id]</code> 입력 또는 해당
            URL에서 새로고침 &rarr; 모달이 아닌 사진 상세 정보 전체 페이지 표시.
          </li>
          <li>
            <strong>모달 닫기:</strong> 모달 외부 클릭 또는 ESC 키 &rarr; 모달
            닫히고 URL은 <code>/intercepting-routes/feed</code>로 돌아감
            (shadcn/ui Dialog 기본 동작).
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
