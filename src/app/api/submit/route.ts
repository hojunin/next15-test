import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json(); // 요청 본문을 JSON으로 파싱
    // console.log('Received POST data:', body); // 서버 로그에 기록 (디버깅용)
    return NextResponse.json({
      message: "Data received successfully via POST at /api/submit!",
      data: body,
    });
  } catch (err) {
    // console.error('Error parsing POST data:', err);
    return NextResponse.json(
      {
        error: `Invalid JSON in request body: ${
          err instanceof Error ? err.message : String(err)
        }`,
      },
      { status: 400 }
    );
  }
}

// OPTIONS 핸들러
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
