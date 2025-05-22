import { NextResponse } from "next/server";

interface Params {
  id: string;
}

export async function GET(request: Request, context: { params: Params }) {
  const itemId = context.params.id;

  // 실제로는 DB 등에서 itemId를 사용하여 데이터를 조회합니다.
  // 여기서는 예시 데이터를 반환합니다.
  const itemData = {
    id: itemId,
    name: `Item ${itemId}`,
    description: `This is the detailed description for item ${itemId}.`,
    price: Math.floor(Math.random() * 100) + 1, // 1 ~ 100 사이의 랜덤 가격
  };

  // 만약 아이템이 없다면 404를 반환할 수 있습니다.
  // if (!itemData) {
  //   return NextResponse.json({ error: 'Item not found' }, { status: 404 });
  // }

  return NextResponse.json(itemData);
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
