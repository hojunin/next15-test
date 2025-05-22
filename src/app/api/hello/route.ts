import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // URL 쿼리 파라미터 예시 (선택적)
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  return NextResponse.json({
    message: `Hello, ${
      name || "World"
    }! This is a GET request from /api/hello.`,
  });
}

// OPTIONS 핸들러 (CORS 예방 등에 필요할 수 있음)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // 실제 프로덕션에서는 더 제한적인 설정을 권장
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
